(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();class no{static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(e){try{const t=document.createElement("canvas"),r=window.WebGL2RenderingContext&&t.getContext("webgl2");return r.drawingBufferColorSpace=e,r.drawingBufferColorSpace===e}catch{return!1}}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},r={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const i=document.createElement("div");return i.id="webglmessage",i.style.fontFamily="monospace",i.style.fontSize="13px",i.style.fontWeight="normal",i.style.textAlign="center",i.style.background="#fff",i.style.color="#000",i.style.padding="1.5em",i.style.width="400px",i.style.margin="5em auto 0",r[e]?n=n.replace("$0","graphics card"):n=n.replace("$0","browser"),n=n.replace("$1",t[e]),i.innerHTML=n,i}static isWebGLAvailable(){console.warn("isWebGLAvailable() has been deprecated and will be removed in r178. Use isWebGL2Available() instead.");try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static getWebGLErrorMessage(){return console.warn("getWebGLErrorMessage() has been deprecated and will be removed in r178. Use getWebGL2ErrorMessage() instead."),this.getErrorMessage(1)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ls="172",oc=0,io=1,lc=2,pl=1,cc=2,pn=3,Pn=0,Ft=1,ln=2,Un=0,Ei=1,ro=2,ao=3,so=4,uc=5,Wn=100,fc=101,hc=102,dc=103,pc=104,mc=200,gc=201,_c=202,vc=203,Va=204,Ha=205,xc=206,Sc=207,Mc=208,Ec=209,yc=210,Tc=211,bc=212,Ac=213,wc=214,Wa=0,Xa=1,Ya=2,bi=3,qa=4,ja=5,Ka=6,Za=7,ml=0,Rc=1,Cc=2,Dn=0,Uc=1,Dc=2,Pc=3,Lc=4,Ic=5,Fc=6,Nc=7,gl=300,Ai=301,wi=302,Ja=303,Qa=304,Yr=306,$a=1e3,Yn=1001,es=1002,nn=1003,Oc=1004,fr=1005,Yt=1006,ca=1007,qn=1008,vn=1009,_l=1010,vl=1011,tr=1012,Is=1013,Zn=1014,mn=1015,nr=1016,Fs=1017,Ns=1018,Ri=1020,xl=35902,Sl=1021,Ml=1022,tn=1023,El=1024,yl=1025,yi=1026,Ci=1027,Tl=1028,Os=1029,bl=1030,Bs=1031,ks=1033,Fr=33776,Nr=33777,Or=33778,Br=33779,ts=35840,ns=35841,is=35842,rs=35843,as=36196,ss=37492,os=37496,ls=37808,cs=37809,us=37810,fs=37811,hs=37812,ds=37813,ps=37814,ms=37815,gs=37816,_s=37817,vs=37818,xs=37819,Ss=37820,Ms=37821,kr=36492,Es=36494,ys=36495,Al=36283,Ts=36284,bs=36285,As=36286,Bc=3200,wl=3201,kc=0,Gc=1,Cn="",Wt="srgb",Ui="srgb-linear",Hr="linear",nt="srgb",ri=7680,oo=519,zc=512,Vc=513,Hc=514,Rl=515,Wc=516,Xc=517,Yc=518,qc=519,lo=35044,co="300 es",gn=2e3,Wr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,ws=180/Math.PI;function ir(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toLowerCase()}function Qe(a,e,t){return Math.max(e,Math.min(t,a))}function jc(a,e){return(a%e+e)%e}function fa(a,e,t){return(1-t)*a+t*e}function Xi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function It(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,r,n,i,s,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],d=r[5],g=r[8],_=n[0],m=n[3],p=n[6],A=n[1],y=n[4],S=n[7],w=n[2],R=n[5],b=n[8];return i[0]=s*_+o*A+l*w,i[3]=s*m+o*y+l*R,i[6]=s*p+o*S+l*b,i[1]=c*_+u*A+f*w,i[4]=c*m+u*y+f*R,i[7]=c*p+u*S+f*b,i[2]=h*_+d*A+g*w,i[5]=h*m+d*y+g*R,i[8]=h*p+d*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*i,d=c*i-s*l,g=t*f+r*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*r)*_,e[2]=(o*r-n*s)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Xe;function Cl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Xr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Kc(){const a=Xr("canvas");return a.style.display="block",a}const uo={};function xi(a){a in uo||(uo[a]=!0,console.warn(a))}function Zc(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function Jc(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qc(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fo=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $c(){const a={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(n,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===nt&&(n.r=_n(n.r),n.g=_n(n.g),n.b=_n(n.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===nt&&(n.r=Ti(n.r),n.g=Ti(n.g),n.b=Ti(n.b))),n},fromWorkingColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},toWorkingColorSpace:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Cn?Hr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,s){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ui]:{primaries:e,whitePoint:r,transfer:Hr,toXYZ:fo,fromXYZ:ho,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:r,transfer:nt,toXYZ:fo,fromXYZ:ho,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),a}const et=$c();function _n(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ti(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ai;class eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=Xr("canvas")),ai.width=e.width,ai.height=e.height;const r=ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=_n(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(_n(t[r]/255)*255):t[r]=_n(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tu=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(da(n[s].image)):i.push(da(n[s]))}else i=da(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function da(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?eu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;class Ct extends Pi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,r=Yn,n=Yn,i=Yt,s=qn,o=tn,l=vn,c=Ct.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ir(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=gl;Ct.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,r=0,n=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(d+1)/2,w=(p+1)/2,R=(u+h)/4,b=(f+_)/4,C=(g+m)/4;return y>S&&y>w?y<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(y),n=R/r,i=b/r):S>w?S<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(S),r=R/n,i=C/n):w<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(w),r=b/i,n=C/i),this.set(r,n,i,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-_)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends Pi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Ct(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends iu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Dl extends Ct{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ru extends Ct{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[s+0],d=i[s+1],g=i[s+2],_=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),R=Math.atan2(w,p*A);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const S=o*A;if(l=l*m+h*S,c=c*m+d*S,u=u*m+g*S,f=f*m+_*S,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=i[s],h=i[s+1],d=i[s+2],g=i[s+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),f=o(i/2),h=l(r/2),d=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(s-n)*d}else if(r>o&&r>f){const d=2*Math.sqrt(1+r-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-r-f);this._w=(i-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-r-o);this._w=(s-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-i*n),f=2*(i*r-s*t);return this.x=t+l*c+s*f-o*u,this.y=r+l*u+o*c-i*f,this.z=n+l*f+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new ae,po=new rr;class Qn{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Jt):Jt.fromBufferAttribute(i,s),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hr.copy(r.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),dr.subVectors(this.max,Yi),si.subVectors(e.a,Yi),oi.subVectors(e.b,Yi),li.subVectors(e.c,Yi),yn.subVectors(oi,si),Tn.subVectors(li,oi),Fn.subVectors(si,li);let t=[0,-yn.z,yn.y,0,-Tn.z,Tn.y,0,-Fn.z,Fn.y,yn.z,0,-yn.x,Tn.z,0,-Tn.x,Fn.z,0,-Fn.x,-yn.y,yn.x,0,-Tn.y,Tn.x,0,-Fn.y,Fn.x,0];return!ma(t,si,oi,li,dr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,si,oi,li,dr))?!1:(pr.crossVectors(yn,Tn),t=[pr.x,pr.y,pr.z],ma(t,si,oi,li,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Jt=new ae,hr=new Qn,si=new ae,oi=new ae,li=new ae,yn=new ae,Tn=new ae,Fn=new ae,Yi=new ae,dr=new ae,pr=new ae,Nn=new ae;function ma(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Nn.fromArray(a,i);const o=n.x*Math.abs(Nn.x)+n.y*Math.abs(Nn.y)+n.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=r.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const au=new Qn,qi=new ae,ga=new ae;class qr{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):au.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(qi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(ga)),this.expandByPoint(qi.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new ae,_a=new ae,mr=new ae,bn=new ae,va=new ae,gr=new ae,xa=new ae;class su{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){_a.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(_a);const i=e.distanceTo(t)*.5,s=-this.direction.dot(mr),o=bn.dot(this.direction),l=-bn.dot(mr),c=bn.lengthSq(),u=Math.abs(1-s*s);let f,h,d,g;if(u>0)if(f=s*l-o,h=s*o-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*i+o)),h=f>0?-i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),d=h*(h+2*l)+c):(f=Math.max(0,-(s*i+o)),h=f>0?i:Math.min(Math.max(-i,-l),i),d=-f*f+h*(h+2*l)+c);else h=s>0?-i:i,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(_a).addScaledVector(mr,h),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);const r=un.dot(this.direction),n=un.dot(un)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,r,n,i){va.subVectors(t,e),gr.subVectors(r,e),xa.crossVectors(va,gr);let s=this.direction.dot(xa),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;bn.subVectors(this.origin,e);const l=o*this.direction.dot(gr.crossVectors(bn,gr));if(l<0)return null;const c=o*this.direction.dot(va.cross(bn));if(c<0||l+c>s)return null;const u=-o*bn.dot(xa);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m)}set(e,t,r,n,i,s,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/ci.setFromMatrixColumn(e,0).length(),i=1/ci.setFromMatrixColumn(e,1).length(),s=1/ci.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=s*u,d=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-s*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=s*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ou,e,lu)}lookAt(e,t,r){const n=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),An.crossVectors(r,kt),An.lengthSq()===0&&(Math.abs(r.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),An.crossVectors(r,kt)),An.normalize(),_r.crossVectors(kt,An),n[0]=An.x,n[4]=_r.x,n[8]=kt.x,n[1]=An.y,n[5]=_r.y,n[9]=kt.y,n[2]=An.z,n[6]=_r.z,n[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],d=r[13],g=r[2],_=r[6],m=r[10],p=r[14],A=r[3],y=r[7],S=r[11],w=r[15],R=n[0],b=n[4],C=n[8],E=n[12],v=n[1],D=n[5],U=n[9],I=n[13],F=n[2],V=n[6],G=n[10],Q=n[14],q=n[3],K=n[7],j=n[11],L=n[15];return i[0]=s*R+o*v+l*F+c*q,i[4]=s*b+o*D+l*V+c*K,i[8]=s*C+o*U+l*G+c*j,i[12]=s*E+o*I+l*Q+c*L,i[1]=u*R+f*v+h*F+d*q,i[5]=u*b+f*D+h*V+d*K,i[9]=u*C+f*U+h*G+d*j,i[13]=u*E+f*I+h*Q+d*L,i[2]=g*R+_*v+m*F+p*q,i[6]=g*b+_*D+m*V+p*K,i[10]=g*C+_*U+m*G+p*j,i[14]=g*E+_*I+m*Q+p*L,i[3]=A*R+y*v+S*F+w*q,i[7]=A*b+y*D+S*V+w*K,i[11]=A*C+y*U+S*G+w*j,i[15]=A*E+y*I+S*Q+w*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+i*l*f-n*c*f-i*o*h+r*c*h+n*o*d-r*l*d)+_*(+t*l*d-t*c*h+i*s*h-n*s*d+n*c*u-i*l*u)+m*(+t*c*f-t*o*d-i*s*f+r*s*d+i*o*u-r*c*u)+p*(-n*o*u-t*l*f+t*o*h+n*s*f-r*s*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,y=g*h*c-u*m*c-g*l*d+s*m*d+u*l*p-s*h*p,S=u*_*c-g*f*c+g*o*d-s*_*d-u*o*p+s*f*p,w=g*f*l-u*_*l-g*o*h+s*_*h+u*o*m-s*f*m,R=t*A+r*y+n*S+i*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=A*b,e[1]=(_*h*i-f*m*i-_*n*d+r*m*d+f*n*p-r*h*p)*b,e[2]=(o*m*i-_*l*i+_*n*c-r*m*c-o*n*p+r*l*p)*b,e[3]=(f*l*i-o*h*i-f*n*c+r*h*c+o*n*d-r*l*d)*b,e[4]=y*b,e[5]=(u*m*i-g*h*i+g*n*d-t*m*d-u*n*p+t*h*p)*b,e[6]=(g*l*i-s*m*i-g*n*c+t*m*c+s*n*p-t*l*p)*b,e[7]=(s*h*i-u*l*i+u*n*c-t*h*c-s*n*d+t*l*d)*b,e[8]=S*b,e[9]=(g*f*i-u*_*i-g*r*d+t*_*d+u*r*p-t*f*p)*b,e[10]=(s*_*i-g*o*i+g*r*c-t*_*c-s*r*p+t*o*p)*b,e[11]=(u*o*i-s*f*i-u*r*c+t*f*c+s*r*d-t*o*d)*b,e[12]=w*b,e[13]=(u*_*n-g*f*n+g*r*h-t*_*h-u*r*m+t*f*m)*b,e[14]=(g*o*n-s*_*n-g*r*l+t*_*l+s*r*m-t*o*m)*b,e[15]=(s*f*n-u*o*n+u*r*l-t*f*l-s*r*h+t*o*h)*b,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,f=o+o,h=i*c,d=i*u,g=i*f,_=s*u,m=s*f,p=o*f,A=l*c,y=l*u,S=l*f,w=r.x,R=r.y,b=r.z;return n[0]=(1-(_+p))*w,n[1]=(d+S)*w,n[2]=(g-y)*w,n[3]=0,n[4]=(d-S)*R,n[5]=(1-(h+p))*R,n[6]=(m+A)*R,n[7]=0,n[8]=(g+y)*b,n[9]=(m-A)*b,n[10]=(1-(h+_))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=ci.set(n[0],n[1],n[2]).length();const s=ci.set(n[4],n[5],n[6]).length(),o=ci.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Qt.copy(this);const c=1/i,u=1/s,f=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=gn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),f=(t+e)/(t-e),h=(r+n)/(r-n);let d,g;if(o===gn)d=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(o===Wr)d=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=gn){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(s-i),h=(t+e)*c,d=(r+n)*u;let g,_;if(o===gn)g=(s+i)*f,_=-2*f;else if(o===Wr)g=i*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ci=new ae,Qt=new ft,ou=new ae(0,0,0),lu=new ae(1,1,1),An=new ae,_r=new ae,kt=new ae,mo=new ft,go=new rr;class xn{constructor(e=0,t=0,r=0,n=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return go.setFromEuler(this),this.setFromQuaternion(go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cu=0;const _o=new ae,ui=new rr,fn=new ft,vr=new ae,ji=new ae,uu=new ae,fu=new rr,vo=new ae(1,0,0),xo=new ae(0,1,0),So=new ae(0,0,1),Mo={type:"added"},hu={type:"removed"},fi={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Nt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new ae,t=new xn,r=new rr,n=new ae(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(vo,e)}rotateY(e){return this.rotateOnAxis(xo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vo,e)}translateY(e){return this.translateOnAxis(xo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vr.copy(e):vr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ji,vr,this.up):fn.lookAt(vr,ji,this.up),this.quaternion.setFromRotationMatrix(fn),n&&(fn.extractRotation(n.matrixWorld),ui.setFromRotationMatrix(fn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Nt.DEFAULT_UP=new ae(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new ae,hn=new ae,Ma=new ae,dn=new ae,hi=new ae,di=new ae,Eo=new ae,Ea=new ae,ya=new ae,Ta=new ae,ba=new lt,Aa=new lt,wa=new lt;class en{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),$t.subVectors(e,t),n.cross($t);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){$t.subVectors(n,t),hn.subVectors(r,t),Ma.subVectors(e,t);const s=$t.dot($t),o=$t.dot(hn),l=$t.dot(Ma),c=hn.dot(hn),u=hn.dot(Ma),f=s*c-o*o;if(f===0)return i.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(s*u-o*l)*h;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,dn.x),l.addScaledVector(s,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,r,n,i,s){return ba.setScalar(0),Aa.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,r),wa.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(ba,i.x),s.addScaledVector(Aa,i.y),s.addScaledVector(wa,i.z),s}static isFrontFacing(e,t,r,n){return $t.subVectors(r,t),hn.subVectors(e,t),$t.cross(hn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return en.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;hi.subVectors(n,r),di.subVectors(i,r),Ea.subVectors(e,r);const l=hi.dot(Ea),c=di.dot(Ea);if(l<=0&&c<=0)return t.copy(r);ya.subVectors(e,n);const u=hi.dot(ya),f=di.dot(ya);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(hi,s);Ta.subVectors(e,i);const d=hi.dot(Ta),g=di.dot(Ta);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(di,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Eo.subVectors(i,n),o=(f-u)/(f-u+(d-g)),t.copy(n).addScaledVector(Eo,o);const p=1/(m+_+h);return s=_*p,o=h*p,t.copy(r).addScaledVector(hi,s).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ra(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class $e{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=et.workingColorSpace){if(e=jc(e,1),t=Qe(t,0,1),r=Qe(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=Ra(s,i,e+1/3),this.g=Ra(s,i,e),this.b=Ra(s,i,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=Wt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const r=Ll[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return et.fromWorkingColorSpace(At.copy(this),e),Math.round(Qe(At.r*255,0,255))*65536+Math.round(Qe(At.g*255,0,255))*256+Math.round(Qe(At.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(At.copy(this),t);const r=At.r,n=At.g,i=At.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case r:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-r)/f+2;break;case i:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Wt){et.fromWorkingColorSpace(At.copy(this),e);const t=At.r,r=At.g,n=At.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(xr);const r=fa(wn.h,xr.h,t),n=fa(wn.s,xr.s,t),i=fa(wn.l,xr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new $e;$e.NAMES=Ll;let du=0;class jr extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Ei,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ha,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(r.blending=this.blending),this.side!==Pn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Va&&(r.blendSrc=this.blendSrc),this.blendDst!==Ha&&(r.blendDst=this.blendDst),this.blendEquation!==Wn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kr extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new ae,Sr=new tt;class rn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=lo,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=It(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),r=It(r,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),r=It(r,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}}class Il extends rn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Fl extends rn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jn extends rn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let pu=0;const Ht=new ft,Ca=new Nt,pi=new ae,Gt=new Qn,Ki=new Qn,xt=new ae;class In extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cl(e)?Fl:Il)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Xe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,r){return Ht.makeTranslation(e,t,r),this.applyMatrix4(Ht),this}scale(e,t,r){return Ht.makeScale(e,t,r),this.applyMatrix4(Ht),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Gt.setFromBufferAttribute(i),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Gt.min,Ki.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,Ki.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(Ki.min),Gt.expandByPoint(Ki.max))}Gt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)xt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(xt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),xt.add(pi)),n=Math.max(n,r.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<r.count;C++)o[C]=new ae,l[C]=new ae;const c=new ae,u=new ae,f=new ae,h=new tt,d=new tt,g=new tt,_=new ae,m=new ae;function p(C,E,v){c.fromBufferAttribute(r,C),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,v),h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),g.fromBufferAttribute(i,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[C].add(_),o[E].add(_),o[v].add(_),l[C].add(m),l[E].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let C=0,E=A.length;C<E;++C){const v=A[C],D=v.start,U=v.count;for(let I=D,F=D+U;I<F;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new ae,S=new ae,w=new ae,R=new ae;function b(C){w.fromBufferAttribute(n,C),R.copy(w);const E=o[C];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(R,E);const D=S.dot(l[C])<0?-1:1;s.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,E=A.length;C<E;++C){const v=A[C],D=v.start,U=v.count;for(let I=D,F=D+U;I<F;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,d=r.count;h<d;h++)r.setXYZ(h,0,0,0);const n=new ae,i=new ae,s=new ae,o=new ae,l=new ae,c=new ae,u=new ae,f=new ae;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new ft,On=new su,Mr=new qr,To=new ae,Er=new ae,yr=new ae,Tr=new ae,Ua=new ae,br=new ae,bo=new ae,Ar=new ae;class zt extends Nt{constructor(e=new In,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){br.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],f=i[l];u!==0&&(Ua.fromBufferAttribute(f,e),s?br.addScaledVector(Ua,u):br.addScaledVector(Ua.sub(t),u))}t.add(br)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mr.copy(r.boundingSphere),Mr.applyMatrix4(i),On.copy(e.ray).recast(e.near),!(Mr.containsPoint(On.origin)===!1&&(On.intersectSphere(Mr,To)===null||On.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(yo.copy(i).invert(),On.copy(e.ray).applyMatrix4(yo),!(r.boundingBox!==null&&On.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=s[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=A,w=y;S<w;S+=3){const R=o.getX(S),b=o.getX(S+1),C=o.getX(S+2);n=wr(this,p,e,r,c,u,f,R,b,C),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);n=wr(this,s,e,r,c,u,f,A,y,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=s[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=A,w=y;S<w;S+=3){const R=S,b=S+1,C=S+2;n=wr(this,p,e,r,c,u,f,R,b,C),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=m,y=m+1,S=m+2;n=wr(this,s,e,r,c,u,f,A,y,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function mu(a,e,t,r,n,i,s,o){let l;if(e.side===Ft?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===Pn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:a}}function wr(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,Er),a.getVertexPosition(l,yr),a.getVertexPosition(c,Tr);const u=mu(a,e,t,r,Er,yr,Tr,bo);if(u){const f=new ae;en.getBarycoord(bo,Er,yr,Tr,f),n&&(u.uv=en.getInterpolatedAttribute(n,o,l,c,f,new tt)),i&&(u.uv1=en.getInterpolatedAttribute(i,o,l,c,f,new tt)),s&&(u.normal=en.getInterpolatedAttribute(s,o,l,c,f,new ae),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new ae,materialIndex:0};en.getNormal(Er,yr,Tr,h.normal),u.face=h,u.barycoord=f}return u}class Li extends In{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(f,2));function g(_,m,p,A,y,S,w,R,b,C,E){const v=S/b,D=w/C,U=S/2,I=w/2,F=R/2,V=b+1,G=C+1;let Q=0,q=0;const K=new ae;for(let j=0;j<G;j++){const L=j*D-I;for(let W=0;W<V;W++){const ee=W*v-U;K[_]=ee*A,K[m]=L*y,K[p]=F,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=R>0?1:-1,u.push(K.x,K.y,K.z),f.push(W/b),f.push(1-j/C),Q+=1}}for(let j=0;j<C;j++)for(let L=0;L<b;L++){const W=h+L+V*j,ee=h+L+V*(j+1),N=h+(L+1)+V*(j+1),B=h+(L+1)+V*j;l.push(W,ee,B),l.push(ee,N,B),q+=6}o.addGroup(d,q,E),d+=q,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Rt(a){const e={};for(let t=0;t<a.length;t++){const r=Di(a[t]);for(const n in r)e[n]=r[n]}return e}function gu(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Nl(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Ol={clone:Di,merge:Rt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Bl extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new ae,Ao=new tt,wo=new tt;class Xt extends Bl{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Ao,wo),t.subVectors(wo,Ao)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class xu extends Nt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xt(mi,gi,e,t);n.layers=this.layers,this.add(n);const i=new Xt(mi,gi,e,t);i.layers=this.layers,this.add(i);const s=new Xt(mi,gi,e,t);s.layers=this.layers,this.add(s);const o=new Xt(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===gn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class kl extends Ct{constructor(e,t,r,n,i,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,r,n,i,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Su extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new kl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Li(5,5,5),i=new Ln({name:"CubemapFromEquirect",uniforms:Di(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ft,blending:Un});i.uniforms.tEquirect.value=t;const s=new zt(n,i),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Yt),new xu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}class Mu extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eu extends rn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Da=new ae,yu=new ae,Tu=new Xe;class Vn{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Da.subVectors(r,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Da),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Tu.getNormalMatrix(e),n=this.coplanarPoint(Da).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new qr,Rr=new ae;class Gl{constructor(e=new Vn,t=new Vn,r=new Vn,n=new Vn,i=new Vn,s=new Vn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=gn){const r=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],g=n[9],_=n[10],m=n[11],p=n[12],A=n[13],y=n[14],S=n[15];if(r[0].setComponents(l-i,h-c,m-d,S-p).normalize(),r[1].setComponents(l+i,h+c,m+d,S+p).normalize(),r[2].setComponents(l+s,h+u,m+g,S+A).normalize(),r[3].setComponents(l-s,h-u,m-g,S-A).normalize(),r[4].setComponents(l-o,h-f,m-_,S-y).normalize(),t===gn)r[5].setComponents(l+o,h+f,m+_,S+y).normalize();else if(t===Wr)r[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Rr.x=n.normal.x>0?e.max.x:e.min.x,Rr.y=n.normal.y>0?e.max.y:e.min.y,Rr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class zl extends Ct{constructor(e,t,r,n,i,s,o,l,c,u=yi){if(u!==yi&&u!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===yi&&(r=Zn),r===void 0&&u===Ci&&(r=Ri),super(null,n,i,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $n extends In{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*h-s;for(let y=0;y<c;y++){const S=y*f-i;g.push(S,-A,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const y=A+c*p,S=A+c*(p+1),w=A+1+c*(p+1),R=A+1+c*p;d.push(y,S,R),d.push(S,w,R)}this.setIndex(d),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vl extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hl extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bu extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Au extends Bl{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wu extends bu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ru extends In{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Cu extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Ro(a,e,t,r){const n=Uu(r);switch(t){case Sl:return a*e;case El:return a*e;case yl:return a*e*2;case Tl:return a*e/n.components*n.byteLength;case Os:return a*e/n.components*n.byteLength;case bl:return a*e*2/n.components*n.byteLength;case Bs:return a*e*2/n.components*n.byteLength;case Ml:return a*e*3/n.components*n.byteLength;case tn:return a*e*4/n.components*n.byteLength;case ks:return a*e*4/n.components*n.byteLength;case Fr:case Nr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ns:case rs:return Math.max(a,16)*Math.max(e,8)/4;case ts:case is:return Math.max(a,8)*Math.max(e,8)/2;case as:case ss:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case os:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ls:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cs:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case us:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case fs:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case hs:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case ds:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ps:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ms:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case gs:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case _s:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case vs:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case xs:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ss:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ms:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case kr:case Es:case ys:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Al:case Ts:return Math.ceil(a/4)*Math.ceil(e/4)*8;case bs:case As:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uu(a){switch(a){case vn:case _l:return{byteLength:1,components:1};case tr:case vl:case nr:return{byteLength:2,components:1};case Fs:case Ns:return{byteLength:2,components:4};case Zn:case Is:case mn:return{byteLength:4,components:1};case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ls);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wl(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Du(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,l,c){const u=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];a.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Pf=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,th=`#ifdef USE_NORMALMAP
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
#endif`,nh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_h=`float getShadowMask() {
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
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xh=`#ifdef USE_SKINNING
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
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mh=`#ifdef USE_SKINNING
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
#endif`,Eh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Th=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ah=`#ifdef USE_TRANSMISSION
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
#endif`,wh=`#ifdef USE_TRANSMISSION
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ph=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
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
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bh=`#include <common>
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
}`,kh=`#if DEPTH_PACKING == 3200
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
}`,Gh=`#define DISTANCE
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
}`,zh=`#define DISTANCE
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
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`uniform float scale;
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
}`,Xh=`uniform vec3 diffuse;
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
}`,Yh=`#include <common>
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
}`,qh=`uniform vec3 diffuse;
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
}`,jh=`#define LAMBERT
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
}`,Kh=`#define LAMBERT
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
}`,Zh=`#define MATCAP
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
}`,Jh=`#define MATCAP
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
}`,Qh=`#define NORMAL
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
}`,$h=`#define NORMAL
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
}`,ed=`#define PHONG
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
}`,td=`#define PHONG
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
}`,nd=`#define STANDARD
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
}`,id=`#define STANDARD
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
}`,rd=`#define TOON
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
}`,ad=`#define TOON
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
}`,sd=`uniform float size;
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
}`,od=`uniform vec3 diffuse;
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
}`,ld=`#include <common>
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
}`,cd=`uniform vec3 color;
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
}`,ud=`uniform float rotation;
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
}`,fd=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Pu,alphahash_pars_fragment:Lu,alphamap_fragment:Iu,alphamap_pars_fragment:Fu,alphatest_fragment:Nu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:ku,batching_pars_vertex:Gu,batching_vertex:zu,begin_vertex:Vu,beginnormal_vertex:Hu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:$u,color_vertex:ef,common:tf,cube_uv_reflection_fragment:nf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:sf,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:uf,envmap_fragment:ff,envmap_common_pars_fragment:hf,envmap_pars_fragment:df,envmap_pars_vertex:pf,envmap_physical_pars_fragment:bf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:_f,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:yf,lights_pars_begin:Tf,lights_toon_fragment:Af,lights_toon_pars_fragment:wf,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Uf,lights_physical_pars_fragment:Df,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:If,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Gf,map_particle_fragment:zf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:Yf,morphnormal_vertex:qf,morphtarget_pars_vertex:jf,morphtarget_vertex:Kf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:$f,normal_vertex:eh,normalmap_pars_fragment:th,clearcoat_normal_fragment_begin:nh,clearcoat_normal_fragment_maps:ih,clearcoat_pars_fragment:rh,iridescence_pars_fragment:ah,opaque_fragment:sh,packing:oh,premultiplied_alpha_fragment:lh,project_vertex:ch,dithering_fragment:uh,dithering_pars_fragment:fh,roughnessmap_fragment:hh,roughnessmap_pars_fragment:dh,shadowmap_pars_fragment:ph,shadowmap_pars_vertex:mh,shadowmap_vertex:gh,shadowmask_pars_fragment:_h,skinbase_vertex:vh,skinning_pars_vertex:xh,skinning_vertex:Sh,skinnormal_vertex:Mh,specularmap_fragment:Eh,specularmap_pars_fragment:yh,tonemapping_fragment:Th,tonemapping_pars_fragment:bh,transmission_fragment:Ah,transmission_pars_fragment:wh,uv_pars_fragment:Rh,uv_pars_vertex:Ch,uv_vertex:Uh,worldpos_vertex:Dh,background_vert:Ph,background_frag:Lh,backgroundCube_vert:Ih,backgroundCube_frag:Fh,cube_vert:Nh,cube_frag:Oh,depth_vert:Bh,depth_frag:kh,distanceRGBA_vert:Gh,distanceRGBA_frag:zh,equirect_vert:Vh,equirect_frag:Hh,linedashed_vert:Wh,linedashed_frag:Xh,meshbasic_vert:Yh,meshbasic_frag:qh,meshlambert_vert:jh,meshlambert_frag:Kh,meshmatcap_vert:Zh,meshmatcap_frag:Jh,meshnormal_vert:Qh,meshnormal_frag:$h,meshphong_vert:ed,meshphong_frag:td,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:rd,meshtoon_frag:ad,points_vert:sd,points_frag:od,shadow_vert:ld,shadow_frag:cd,sprite_vert:ud,sprite_frag:fd},Ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},on={basic:{uniforms:Rt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Rt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Rt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Rt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Rt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Rt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Rt([Ce.points,Ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Rt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Rt([Ce.common,Ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Rt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Rt([Ce.sprite,Ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Rt([Ce.common,Ce.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Rt([Ce.lights,Ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};on.physical={uniforms:Rt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ur={r:0,b:0,g:0},kn=new xn,hd=new ft;function dd(a,e,t,r,n,i,s){const o=new $e(0);let l=i===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const w=g(y);w===null?p(o,l):w&&w.isColor&&(p(w,1),S=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||S)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(y,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===Yr)?(u===void 0&&(u=new zt(new Li(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Di(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),kn.copy(S.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hd.makeRotationFromEuler(kn)),u.material.toneMapped=et.getTransfer(w.colorSpace)!==nt,(f!==w||h!==w.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=a.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new zt(new $n(2,2),new Ln({name:"BackgroundMaterial",uniforms:Di(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Ur,Nl(a)),r.buffers.color.setClear(Ur.r,Ur.g,Ur.b,S,s)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m,dispose:A}}function pd(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=h(null);let i=n,s=!1;function o(v,D,U,I,F){let V=!1;const G=f(I,U,D);i!==G&&(i=G,c(i.object)),V=d(v,I,U,F),V&&g(v,I,U,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,S(v,D,U,I),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return a.createVertexArray()}function c(v){return a.bindVertexArray(v)}function u(v){return a.deleteVertexArray(v)}function f(v,D,U){const I=U.wireframe===!0;let F=r[v.id];F===void 0&&(F={},r[v.id]=F);let V=F[D.id];V===void 0&&(V={},F[D.id]=V);let G=V[I];return G===void 0&&(G=h(l()),V[I]=G),G}function h(v){const D=[],U=[],I=[];for(let F=0;F<t;F++)D[F]=0,U[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,D,U,I){const F=i.attributes,V=D.attributes;let G=0;const Q=U.getAttributes();for(const q in Q)if(Q[q].location>=0){const j=F[q];let L=V[q];if(L===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(L=v.instanceColor)),j===void 0||j.attribute!==L||L&&j.data!==L.data)return!0;G++}return i.attributesNum!==G||i.index!==I}function g(v,D,U,I){const F={},V=D.attributes;let G=0;const Q=U.getAttributes();for(const q in Q)if(Q[q].location>=0){let j=V[q];j===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const L={};L.attribute=j,j&&j.data&&(L.data=j.data),F[q]=L,G++}i.attributes=F,i.attributesNum=G,i.index=I}function _(){const v=i.newAttributes;for(let D=0,U=v.length;D<U;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const U=i.newAttributes,I=i.enabledAttributes,F=i.attributeDivisors;U[v]=1,I[v]===0&&(a.enableVertexAttribArray(v),I[v]=1),F[v]!==D&&(a.vertexAttribDivisor(v,D),F[v]=D)}function A(){const v=i.newAttributes,D=i.enabledAttributes;for(let U=0,I=D.length;U<I;U++)D[U]!==v[U]&&(a.disableVertexAttribArray(U),D[U]=0)}function y(v,D,U,I,F,V,G){G===!0?a.vertexAttribIPointer(v,D,U,F,V):a.vertexAttribPointer(v,D,U,I,F,V)}function S(v,D,U,I){_();const F=I.attributes,V=U.getAttributes(),G=D.defaultAttributeValues;for(const Q in V){const q=V[Q];if(q.location>=0){let K=F[Q];if(K===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const j=K.normalized,L=K.itemSize,W=e.get(K);if(W===void 0)continue;const ee=W.buffer,N=W.type,B=W.bytesPerElement,$=N===a.INT||N===a.UNSIGNED_INT||K.gpuType===Is;if(K.isInterleavedBufferAttribute){const H=K.data,ne=H.stride,me=K.offset;if(H.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)p(q.location+Se,H.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let Se=0;Se<q.locationSize;Se++)y(q.location+Se,L/q.locationSize,N,j,ne*B,(me+L/q.locationSize*Se)*B,$)}else{if(K.isInstancedBufferAttribute){for(let H=0;H<q.locationSize;H++)p(q.location+H,K.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let H=0;H<q.locationSize;H++)m(q.location+H);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let H=0;H<q.locationSize;H++)y(q.location+H,L/q.locationSize,N,j,L*B,L/q.locationSize*H*B,$)}}else if(G!==void 0){const j=G[Q];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(q.location,j);break;case 3:a.vertexAttrib3fv(q.location,j);break;case 4:a.vertexAttrib4fv(q.location,j);break;default:a.vertexAttrib1fv(q.location,j)}}}}A()}function w(){C();for(const v in r){const D=r[v];for(const U in D){const I=D[U];for(const F in I)u(I[F].object),delete I[F];delete D[U]}delete r[v]}}function R(v){if(r[v.id]===void 0)return;const D=r[v.id];for(const U in D){const I=D[U];for(const F in I)u(I[F].object),delete I[F];delete D[U]}delete r[v.id]}function b(v){for(const D in r){const U=r[D];if(U[v.id]===void 0)continue;const I=U[v.id];for(const F in I)u(I[F].object),delete I[F];delete U[v.id]}}function C(){E(),s=!0,i!==n&&(i=n,c(i.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function md(a,e,t){let r;function n(c){r=c}function i(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,f){f!==0&&(a.drawArraysInstanced(r,c,u,f),t.update(u,r,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,r,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,r,1)}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gd(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==tn&&r.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==vn&&r.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==mn&&!C)}function l(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),A=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),S=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:w,maxSamples:R}}function _d(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Vn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||r!==0||n;return n=h,r=f.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!n||g===null||g.length===0||i&&!m)i?u(null):c();else{const A=i?0:r,y=A*4;let S=p.clippingState||null;l.value=S,S=u(g,h,y,d);for(let w=0;w!==y;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=d;y!==_;++y,S+=4)s.copy(f[y]).applyMatrix4(A,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vd(a){let e=new WeakMap;function t(s,o){return o===Ja?s.mapping=Ai:o===Qa&&(s.mapping=wi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ja||o===Qa)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Su(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Mi=4,Co=[.125,.215,.35,.446,.526,.582],Xn=20,Pa=new Au,Uo=new $e;let La=null,Ia=0,Fa=0,Na=!1;const Hn=(1+Math.sqrt(5))/2,_i=1/Hn,Do=[new ae(-Hn,_i,0),new ae(Hn,_i,0),new ae(-_i,0,Hn),new ae(_i,0,Hn),new ae(0,Hn,-_i),new ae(0,Hn,_i),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class Po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ia,Fa),this._renderer.xr.enabled=Na,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:nr,format:tn,colorSpace:Ui,depthBuffer:!1},n=Lo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xd(i)),this._blurMaterial=Sd(i,e,t)}return n}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,r,n){const o=new Xt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uo),u.toneMapping=Dn,u.autoClear=!1;const d=new Kr({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new zt(new Li,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Uo),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Dr(n,A*y,p>2?y:0,y,y),u.setRenderTarget(n),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ai||e.mapping===wi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new zt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Pa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Do[(n-i-1)%Do.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Xn-1),_=i/g,m=isFinite(i)?1+Math.floor(u*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const p=[];let A=0;for(let b=0;b<Xn;++b){const C=b/_,E=Math.exp(-C*C/2);p.push(E),b===0?A+=E:b<m&&(A+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-r;const S=this._sizeLods[n],w=3*S*(n>y-Mi?n-y+Mi:0),R=4*(this._cubeSize-S);Dr(t,w,R,3*S,2*S),l.setRenderTarget(t),l.render(f,Pa)}}function xd(a){const e=[],t=[],r=[];let n=a;const i=a-Mi+1+Co.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-Mi?l=Co[s-a+Mi-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*d),y=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,C=R>2?0:-1,E=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];A.set(E,_*g*R),y.set(h,m*g*R);const v=[R,R,R,R,R,R];S.set(v,p*g*R)}const w=new In;w.setAttribute("position",new rn(A,_)),w.setAttribute("uv",new rn(y,m)),w.setAttribute("faceIndex",new rn(S,p)),e.push(w),n>Mi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Lo(a,e,t){const r=new Jn(a,e,t);return r.texture.mapping=Yr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Sd(a,e,t){const r=new Float32Array(Xn),n=new ae(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Io(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fo(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}function Md(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===Qa,u=l===Ai||l===wi;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Po(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Po(a)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",i),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Ed(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&xi("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function yd(a,e,t,r){const n={},i=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete n[h.id];const d=i.get(h);d&&(e.remove(d),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],a.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const A=d.array;_=d.version;for(let y=0,S=A.length;y<S;y+=3){const w=A[y+0],R=A[y+1],b=A[y+2];h.push(w,R,R,b,b,w)}}else if(g!==void 0){const A=g.array;_=g.version;for(let y=0,S=A.length/3-1;y<S;y+=3){const w=y+0,R=y+1,b=y+2;h.push(w,R,R,b,b,w)}}else return;const m=new(Cl(h)?Fl:Il)(h,1);m.version=_;const p=i.get(f);p&&e.remove(p),i.set(f,m)}function u(f){const h=i.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return i.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Td(a,e,t){let r;function n(h){r=h}let i,s;function o(h){i=h.type,s=h.bytesPerElement}function l(h,d){a.drawElements(r,d,i,h*s),t.update(d,r,1)}function c(h,d,g){g!==0&&(a.drawElementsInstanced(r,d,i,h*s,g),t.update(d,r,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,h,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*_[A];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bd(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Ad(a,e,t){const r=new WeakMap,n=new lt;function i(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==f){let v=function(){C.dispose(),r.delete(o),o.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let w=o.attributes.position.count*S,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*R*4*f),C=new Dl(b,w,R,f);C.type=mn,C.needsUpdate=!0;const E=S*4;for(let D=0;D<f;D++){const U=p[D],I=A[D],F=y[D],V=w*R*4*D;for(let G=0;G<U.count;G++){const Q=G*E;g===!0&&(n.fromBufferAttribute(U,G),b[V+Q+0]=n.x,b[V+Q+1]=n.y,b[V+Q+2]=n.z,b[V+Q+3]=0),_===!0&&(n.fromBufferAttribute(I,G),b[V+Q+4]=n.x,b[V+Q+5]=n.y,b[V+Q+6]=n.z,b[V+Q+7]=0),m===!0&&(n.fromBufferAttribute(F,G),b[V+Q+8]=n.x,b[V+Q+9]=n.y,b[V+Q+10]=n.z,b[V+Q+11]=F.itemSize===4?n.w:1)}}h={count:f,texture:C,size:new tt(w,R)},r.set(o,h),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",_),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:i}}function wd(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}const Xl=new Ct,No=new zl(1,1),Yl=new Dl,ql=new ru,jl=new kl,Oo=[],Bo=[],ko=new Float32Array(16),Go=new Float32Array(9),zo=new Float32Array(4);function Ii(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Oo[n];if(i===void 0&&(i=new Float32Array(n),Oo[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function pt(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function mt(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function Zr(a,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function Rd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Cd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;a.uniform2fv(this.addr,e),mt(t,e)}}function Ud(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;a.uniform3fv(this.addr,e),mt(t,e)}}function Dd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;a.uniform4fv(this.addr,e),mt(t,e)}}function Pd(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(pt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,r))return;zo.set(r),a.uniformMatrix2fv(this.addr,!1,zo),mt(t,r)}}function Ld(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(pt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,r))return;Go.set(r),a.uniformMatrix3fv(this.addr,!1,Go),mt(t,r)}}function Id(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(pt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,r))return;ko.set(r),a.uniformMatrix4fv(this.addr,!1,ko),mt(t,r)}}function Fd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Nd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;a.uniform2iv(this.addr,e),mt(t,e)}}function Od(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;a.uniform3iv(this.addr,e),mt(t,e)}}function Bd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;a.uniform4iv(this.addr,e),mt(t,e)}}function kd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Gd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;a.uniform2uiv(this.addr,e),mt(t,e)}}function zd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;a.uniform3uiv(this.addr,e),mt(t,e)}}function Vd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;a.uniform4uiv(this.addr,e),mt(t,e)}}function Hd(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);let i;this.type===a.SAMPLER_2D_SHADOW?(No.compareFunction=Rl,i=No):i=Xl,t.setTexture2D(e||i,n)}function Wd(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||ql,n)}function Xd(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||jl,n)}function Yd(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Yl,n)}function qd(a){switch(a){case 5126:return Rd;case 35664:return Cd;case 35665:return Ud;case 35666:return Dd;case 35674:return Pd;case 35675:return Ld;case 35676:return Id;case 5124:case 35670:return Fd;case 35667:case 35671:return Nd;case 35668:case 35672:return Od;case 35669:case 35673:return Bd;case 5125:return kd;case 36294:return Gd;case 36295:return zd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return Yd}}function jd(a,e){a.uniform1fv(this.addr,e)}function Kd(a,e){const t=Ii(e,this.size,2);a.uniform2fv(this.addr,t)}function Zd(a,e){const t=Ii(e,this.size,3);a.uniform3fv(this.addr,t)}function Jd(a,e){const t=Ii(e,this.size,4);a.uniform4fv(this.addr,t)}function Qd(a,e){const t=Ii(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function $d(a,e){const t=Ii(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function ep(a,e){const t=Ii(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function tp(a,e){a.uniform1iv(this.addr,e)}function np(a,e){a.uniform2iv(this.addr,e)}function ip(a,e){a.uniform3iv(this.addr,e)}function rp(a,e){a.uniform4iv(this.addr,e)}function ap(a,e){a.uniform1uiv(this.addr,e)}function sp(a,e){a.uniform2uiv(this.addr,e)}function op(a,e){a.uniform3uiv(this.addr,e)}function lp(a,e){a.uniform4uiv(this.addr,e)}function cp(a,e,t){const r=this.cache,n=e.length,i=Zr(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Xl,i[s])}function up(a,e,t){const r=this.cache,n=e.length,i=Zr(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||ql,i[s])}function fp(a,e,t){const r=this.cache,n=e.length,i=Zr(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||jl,i[s])}function hp(a,e,t){const r=this.cache,n=e.length,i=Zr(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Yl,i[s])}function dp(a){switch(a){case 5126:return jd;case 35664:return Kd;case 35665:return Zd;case 35666:return Jd;case 35674:return Qd;case 35675:return $d;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return sp;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return hp}}class pp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=qd(t.type)}}class mp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dp(t.type)}}class gp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Vo(a,e){a.seq.push(e),a.map[e.id]=e}function _p(a,e,t){const r=a.name,n=r.length;for(Oa.lastIndex=0;;){const i=Oa.exec(r),s=Oa.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Vo(t,c===void 0?new pp(o,a,e):new mp(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new gp(o),Vo(t,f)),t=f}}}class Gr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);_p(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Ho(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const vp=37297;let xp=0;function Sp(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const Wo=new Xe;function Mp(a){et._getMatrix(Wo,et.workingColorSpace,a);const e=`mat3( ${Wo.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(a)){case Hr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Xo(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Sp(a.getShaderSource(e),s)}else return n}function Ep(a,e){const t=Mp(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yp(a,e){let t;switch(e){case Uc:t="Linear";break;case Dc:t="Reinhard";break;case Pc:t="Cineon";break;case Lc:t="ACESFilmic";break;case Fc:t="AgX";break;case Nc:t="Neutral";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new ae;function Tp(){et.getLuminanceCoefficients(Pr);const a=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Ap(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function wp(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ji(a){return a!==""}function Yo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qo(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rs(a){return a.replace(Rp,Up)}const Cp=new Map;function Up(a,e){let t=qe[e];if(t===void 0){const r=Cp.get(e);if(r!==void 0)t=qe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rs(t)}const Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(a){return a.replace(Dp,Pp)}function Pp(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Ko(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fp(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Np(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Rc:e="ENVMAP_BLENDING_MIX";break;case Cc:e="ENVMAP_BLENDING_ADD";break}return e}function Op(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Bp(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Lp(t),c=Ip(t),u=Fp(t),f=Np(t),h=Op(t),d=bp(t),g=Ap(i),_=n.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(m=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Dn?yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ep("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),s=Rs(s),s=Yo(s,t),s=qo(s,t),o=Rs(o),o=Yo(o,t),o=qo(o,t),s=jo(s),o=jo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=A+m+s,S=A+p+o,w=Ho(n,n.VERTEX_SHADER,y),R=Ho(n,n.FRAGMENT_SHADER,S);n.attachShader(_,w),n.attachShader(_,R),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(D){if(a.debug.checkShaderErrors){const U=n.getProgramInfoLog(_).trim(),I=n.getShaderInfoLog(w).trim(),F=n.getShaderInfoLog(R).trim();let V=!0,G=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,w,R);else{const Q=Xo(n,w,"vertex"),q=Xo(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Q+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||F==="")&&(G=!1);G&&(D.diagnostics={runnable:V,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:p}})}n.deleteShader(w),n.deleteShader(R),C=new Gr(n,_),E=wp(n,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(_,vp)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let kp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new zp(e),t.set(e,r)),r}}class zp{constructor(e){this.id=kp++,this.code=e,this.usedTimes=0}}function Vp(a,e,t,r,n,i,s){const o=new Pl,l=new Gp,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,D,U,I){const F=U.fog,V=I.geometry,G=E.isMeshStandardMaterial?U.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),q=Q&&Q.mapping===Yr?Q.image.height:null,K=g[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,L=j!==void 0?j.length:0;let W=0;V.morphAttributes.position!==void 0&&(W=1),V.morphAttributes.normal!==void 0&&(W=2),V.morphAttributes.color!==void 0&&(W=3);let ee,N,B,$;if(K){const ze=on[K];ee=ze.vertexShader,N=ze.fragmentShader}else ee=E.vertexShader,N=E.fragmentShader,l.update(E),B=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const H=a.getRenderTarget(),ne=a.state.buffers.depth.getReversed(),me=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,ve=!!E.map,oe=!!E.matcap,Ne=!!Q,P=!!E.aoMap,Oe=!!E.lightMap,be=!!E.bumpMap,Re=!!E.normalMap,se=!!E.displacementMap,Ae=!!E.emissiveMap,de=!!E.metalnessMap,M=!!E.roughnessMap,x=E.anisotropy>0,O=E.clearcoat>0,Z=E.dispersion>0,J=E.iridescence>0,re=E.sheen>0,he=E.transmission>0,ce=x&&!!E.anisotropyMap,ge=O&&!!E.clearcoatMap,De=O&&!!E.clearcoatNormalMap,ue=O&&!!E.clearcoatRoughnessMap,Me=J&&!!E.iridescenceMap,ye=J&&!!E.iridescenceThicknessMap,Te=re&&!!E.sheenColorMap,le=re&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Ie=!!E.specularColorMap,Ye=!!E.specularIntensityMap,k=he&&!!E.transmissionMap,fe=he&&!!E.thicknessMap,te=!!E.gradientMap,pe=!!E.alphaMap,xe=E.alphaTest>0,_e=!!E.alphaHash,Fe=!!E.extensions;let We=Dn;E.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(We=a.toneMapping);const Be={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:N,defines:E.defines,customVertexShaderID:B,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:me,instancingColor:me&&I.instanceColor!==null,instancingMorph:me&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:H===null?a.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ui,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:oe,envMap:Ne,envMapMode:Ne&&Q.mapping,envMapCubeUVHeight:q,aoMap:P,lightMap:Oe,bumpMap:be,normalMap:Re,displacementMap:h&&se,emissiveMap:Ae,normalMapObjectSpace:Re&&E.normalMapType===Gc,normalMapTangentSpace:Re&&E.normalMapType===kc,metalnessMap:de,roughnessMap:M,anisotropy:x,anisotropyMap:ce,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:De,clearcoatRoughnessMap:ue,dispersion:Z,iridescence:J,iridescenceMap:Me,iridescenceThicknessMap:ye,sheen:re,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:Ye,transmission:he,transmissionMap:k,thicknessMap:fe,gradientMap:te,opaque:E.transparent===!1&&E.blending===Ei&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:xe,alphaHash:_e,combine:E.combine,mapUv:ve&&_(E.map.channel),aoMapUv:P&&_(E.aoMap.channel),lightMapUv:Oe&&_(E.lightMap.channel),bumpMapUv:be&&_(E.bumpMap.channel),normalMapUv:Re&&_(E.normalMap.channel),displacementMapUv:se&&_(E.displacementMap.channel),emissiveMapUv:Ae&&_(E.emissiveMap.channel),metalnessMapUv:de&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(E.sheenRoughnessMap.channel),specularMapUv:Pe&&_(E.specularMap.channel),specularColorMapUv:Ie&&_(E.specularColorMap.channel),specularIntensityMapUv:Ye&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:fe&&_(E.thicknessMap.channel),alphaMapUv:pe&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(ve||pe),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ne,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:W,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:We,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===nt,decodeVideoTextureEmissive:Ae&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Se)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)v.push(D),v.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(v,E),y(v,E),v.push(a.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function A(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const v=g[E.type];let D;if(v){const U=on[v];D=Ol.clone(U.uniforms)}else D=E.uniforms;return D}function w(E,v){let D;for(let U=0,I=u.length;U<I;U++){const F=u[U];if(F.cacheKey===v){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Bp(a,v,E,i),u.push(D)),D}function R(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:C}}function Hp(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function r(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function i(){a=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function Wp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Zo(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Jo(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(f,h,d,g,_,m){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=s(f,h,d,g,_,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=s(f,h,d,g,_,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Wp),r.length>1&&r.sort(h||Zo),n.length>1&&n.sort(h||Zo)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function Xp(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new Jo,a.set(r,[s])):n>=i.length?(s=new Jo,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Yp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new $e};break;case"SpotLight":t={position:new ae,direction:new ae,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=t,t}}}function qp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let jp=0;function Kp(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Zp(a){const e=new Yp,t=qp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new ae);const n=new ae,i=new ft,s=new ft;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,A=0,y=0,S=0,w=0,R=0,b=0;c.sort(Kp);for(let E=0,v=c.length;E<v;E++){const D=c[E],U=D.color,I=D.intensity,F=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*I,f+=U.g*I,h+=U.b*I;else if(D.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(D.sh.coefficients[G],I);b++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,q=t.get(D);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[d]=q,r.directionalShadowMap[d]=V,r.directionalShadowMatrix[d]=D.shadow.matrix,A++}r.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(U).multiplyScalar(I),G.distance=F,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,r.spot[_]=G;const Q=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&R++),r.spotLightMatrix[_]=Q.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[_]=q,r.spotShadowMap[_]=V,S++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(U).multiplyScalar(I),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Q=D.shadow,q=t.get(D);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[g]=q,r.pointShadowMap[g]=V,r.pointShadowMatrix[g]=D.shadow.matrix,y++}r.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(I),G.groundColor.copy(D.groundColor).multiplyScalar(I),r.hemi[p]=G,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const C=r.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==A||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==w||C.numLightProbes!==b)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=S+w-R,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=A,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=w,C.numLightProbes=b,r.version=jp++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const y=c[p];if(y.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=r.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),s.identity(),i.copy(y.matrixWorld),i.premultiply(m),s.extractRotation(i),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){const S=r.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const S=r.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function Qo(a){const e=new Zp(a),t=[],r=[];function n(u){c.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function Jp(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new Qo(a),e.set(n,[o])):i>=s.length?(o=new Qo(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$p=`uniform sampler2D shadow_pass;
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
}`;function em(a,e,t){let r=new Gl;const n=new tt,i=new tt,s=new lt,o=new Vl({depthPacking:wl}),l=new Hl,c={},u=t.maxTextureSize,f={[Pn]:Ft,[Ft]:Pn,[ln]:ln},h=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Qp,fragmentShader:$p}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let p=this.type;this.render=function(R,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=a.getRenderTarget(),v=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),U=a.state;U.setBlending(Un),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=p!==pn&&this.type===pn,F=p===pn&&this.type!==pn;for(let V=0,G=R.length;V<G;V++){const Q=R[V],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const K=q.getFrameExtents();if(n.multiply(K),i.copy(q.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/K.x),n.x=i.x*K.x,q.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/K.y),n.y=i.y*K.y,q.mapSize.y=i.y)),q.map===null||I===!0||F===!0){const L=this.type!==pn?{minFilter:nn,magFilter:nn}:{};q.map!==null&&q.map.dispose(),q.map=new Jn(n.x,n.y,L),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const j=q.getViewportCount();for(let L=0;L<j;L++){const W=q.getViewport(L);s.set(i.x*W.x,i.y*W.y,i.x*W.z,i.y*W.w),U.viewport(s),q.updateMatrices(Q,L),r=q.getFrustum(),S(b,C,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===pn&&A(q,C),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(E,v,D)};function A(R,b){const C=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jn(n.x,n.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(b,null,C,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(b,null,C,d,_,null)}function y(R,b,C,E){let v=null;const D=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)v=D;else if(v=C.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,I=b.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let V=F[I];V===void 0&&(V=v.clone(),F[I]=V,b.addEventListener("dispose",w)),v=V}if(v.visible=b.visible,v.wireframe=b.wireframe,E===pn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=a.properties.get(v);U.light=C}return v}function S(R,b,C,E,v){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===pn)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const I=e.update(R),F=R.material;if(Array.isArray(F)){const V=I.groups;for(let G=0,Q=V.length;G<Q;G++){const q=V[G],K=F[q.materialIndex];if(K&&K.visible){const j=y(R,K,E,v);R.onBeforeShadow(a,R,b,C,I,j,q),a.renderBufferDirect(C,null,I,j,R,q),R.onAfterShadow(a,R,b,C,I,j,q)}}}else if(F.visible){const V=y(R,F,E,v);R.onBeforeShadow(a,R,b,C,I,V,null),a.renderBufferDirect(C,null,I,V,R,null),R.onAfterShadow(a,R,b,C,I,V,null)}}const U=R.children;for(let I=0,F=U.length;I<F;I++)S(U[I],b,C,E,v)}function w(R){R.target.removeEventListener("dispose",w);for(const C in c){const E=c[C],v=R.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const tm={[Wa]:Xa,[Ya]:Ka,[qa]:Za,[bi]:ja,[Xa]:Wa,[Ka]:Ya,[Za]:qa,[ja]:bi};function nm(a,e){function t(){let k=!1;const fe=new lt;let te=null;const pe=new lt(0,0,0,0);return{setMask:function(xe){te!==xe&&!k&&(a.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){k=xe},setClear:function(xe,_e,Fe,We,Be){Be===!0&&(xe*=We,_e*=We,Fe*=We),fe.set(xe,_e,Fe,We),pe.equals(fe)===!1&&(a.clearColor(xe,_e,Fe,We),pe.copy(fe))},reset:function(){k=!1,te=null,pe.set(-1,0,0,0)}}}function r(){let k=!1,fe=!1,te=null,pe=null,xe=null;return{setReversed:function(_e){if(fe!==_e){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const We=xe;xe=null,this.setClear(We)}fe=_e},getReversed:function(){return fe},setTest:function(_e){_e?H(a.DEPTH_TEST):ne(a.DEPTH_TEST)},setMask:function(_e){te!==_e&&!k&&(a.depthMask(_e),te=_e)},setFunc:function(_e){if(fe&&(_e=tm[_e]),pe!==_e){switch(_e){case Wa:a.depthFunc(a.NEVER);break;case Xa:a.depthFunc(a.ALWAYS);break;case Ya:a.depthFunc(a.LESS);break;case bi:a.depthFunc(a.LEQUAL);break;case qa:a.depthFunc(a.EQUAL);break;case ja:a.depthFunc(a.GEQUAL);break;case Ka:a.depthFunc(a.GREATER);break;case Za:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=_e}},setLocked:function(_e){k=_e},setClear:function(_e){xe!==_e&&(fe&&(_e=1-_e),a.clearDepth(_e),xe=_e)},reset:function(){k=!1,te=null,pe=null,xe=null,fe=!1}}}function n(){let k=!1,fe=null,te=null,pe=null,xe=null,_e=null,Fe=null,We=null,Be=null;return{setTest:function(ze){k||(ze?H(a.STENCIL_TEST):ne(a.STENCIL_TEST))},setMask:function(ze){fe!==ze&&!k&&(a.stencilMask(ze),fe=ze)},setFunc:function(ze,it,rt){(te!==ze||pe!==it||xe!==rt)&&(a.stencilFunc(ze,it,rt),te=ze,pe=it,xe=rt)},setOp:function(ze,it,rt){(_e!==ze||Fe!==it||We!==rt)&&(a.stencilOp(ze,it,rt),_e=ze,Fe=it,We=rt)},setLocked:function(ze){k=ze},setClear:function(ze){Be!==ze&&(a.clearStencil(ze),Be=ze)},reset:function(){k=!1,fe=null,te=null,pe=null,xe=null,_e=null,Fe=null,We=null,Be=null}}}const i=new t,s=new r,o=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,y=null,S=null,w=null,R=null,b=new $e(0,0,0),C=0,E=!1,v=null,D=null,U=null,I=null,F=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=Q>=2);let K=null,j={};const L=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),ee=new lt().fromArray(L),N=new lt().fromArray(W);function B(k,fe,te,pe){const xe=new Uint8Array(4),_e=a.createTexture();a.bindTexture(k,_e),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Fe=0;Fe<te;Fe++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(fe,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,xe):a.texImage2D(fe+Fe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,xe);return _e}const $={};$[a.TEXTURE_2D]=B(a.TEXTURE_2D,a.TEXTURE_2D,1),$[a.TEXTURE_CUBE_MAP]=B(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[a.TEXTURE_2D_ARRAY]=B(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),$[a.TEXTURE_3D]=B(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(a.DEPTH_TEST),s.setFunc(bi),be(!1),Re(io),H(a.CULL_FACE),P(Un);function H(k){u[k]!==!0&&(a.enable(k),u[k]=!0)}function ne(k){u[k]!==!1&&(a.disable(k),u[k]=!1)}function me(k,fe){return f[k]!==fe?(a.bindFramebuffer(k,fe),f[k]=fe,k===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=fe),k===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(k,fe){let te=d,pe=!1;if(k){te=h.get(fe),te===void 0&&(te=[],h.set(fe,te));const xe=k.textures;if(te.length!==xe.length||te[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Fe=xe.length;_e<Fe;_e++)te[_e]=a.COLOR_ATTACHMENT0+_e;te.length=xe.length,pe=!0}}else te[0]!==a.BACK&&(te[0]=a.BACK,pe=!0);pe&&a.drawBuffers(te)}function ve(k){return g!==k?(a.useProgram(k),g=k,!0):!1}const oe={[Wn]:a.FUNC_ADD,[fc]:a.FUNC_SUBTRACT,[hc]:a.FUNC_REVERSE_SUBTRACT};oe[dc]=a.MIN,oe[pc]=a.MAX;const Ne={[mc]:a.ZERO,[gc]:a.ONE,[_c]:a.SRC_COLOR,[Va]:a.SRC_ALPHA,[yc]:a.SRC_ALPHA_SATURATE,[Mc]:a.DST_COLOR,[xc]:a.DST_ALPHA,[vc]:a.ONE_MINUS_SRC_COLOR,[Ha]:a.ONE_MINUS_SRC_ALPHA,[Ec]:a.ONE_MINUS_DST_COLOR,[Sc]:a.ONE_MINUS_DST_ALPHA,[Tc]:a.CONSTANT_COLOR,[bc]:a.ONE_MINUS_CONSTANT_COLOR,[Ac]:a.CONSTANT_ALPHA,[wc]:a.ONE_MINUS_CONSTANT_ALPHA};function P(k,fe,te,pe,xe,_e,Fe,We,Be,ze){if(k===Un){_===!0&&(ne(a.BLEND),_=!1);return}if(_===!1&&(H(a.BLEND),_=!0),k!==uc){if(k!==m||ze!==E){if((p!==Wn||S!==Wn)&&(a.blendEquation(a.FUNC_ADD),p=Wn,S=Wn),ze)switch(k){case Ei:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ro:a.blendFunc(a.ONE,a.ONE);break;case ao:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case so:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ei:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ro:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case ao:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case so:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,y=null,w=null,R=null,b.set(0,0,0),C=0,m=k,E=ze}return}xe=xe||fe,_e=_e||te,Fe=Fe||pe,(fe!==p||xe!==S)&&(a.blendEquationSeparate(oe[fe],oe[xe]),p=fe,S=xe),(te!==A||pe!==y||_e!==w||Fe!==R)&&(a.blendFuncSeparate(Ne[te],Ne[pe],Ne[_e],Ne[Fe]),A=te,y=pe,w=_e,R=Fe),(We.equals(b)===!1||Be!==C)&&(a.blendColor(We.r,We.g,We.b,Be),b.copy(We),C=Be),m=k,E=!1}function Oe(k,fe){k.side===ln?ne(a.CULL_FACE):H(a.CULL_FACE);let te=k.side===Ft;fe&&(te=!te),be(te),k.blending===Ei&&k.transparent===!1?P(Un):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),i.setMask(k.colorWrite);const pe=k.stencilWrite;o.setTest(pe),pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(a.SAMPLE_ALPHA_TO_COVERAGE):ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function be(k){v!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),v=k)}function Re(k){k!==oc?(H(a.CULL_FACE),k!==D&&(k===io?a.cullFace(a.BACK):k===lc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ne(a.CULL_FACE),D=k}function se(k){k!==U&&(G&&a.lineWidth(k),U=k)}function Ae(k,fe,te){k?(H(a.POLYGON_OFFSET_FILL),(I!==fe||F!==te)&&(a.polygonOffset(fe,te),I=fe,F=te)):ne(a.POLYGON_OFFSET_FILL)}function de(k){k?H(a.SCISSOR_TEST):ne(a.SCISSOR_TEST)}function M(k){k===void 0&&(k=a.TEXTURE0+V-1),K!==k&&(a.activeTexture(k),K=k)}function x(k,fe,te){te===void 0&&(K===null?te=a.TEXTURE0+V-1:te=K);let pe=j[te];pe===void 0&&(pe={type:void 0,texture:void 0},j[te]=pe),(pe.type!==k||pe.texture!==fe)&&(K!==te&&(a.activeTexture(te),K=te),a.bindTexture(k,fe||$[k]),pe.type=k,pe.texture=fe)}function O(){const k=j[K];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){ee.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),ee.copy(k))}function le(k){N.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),N.copy(k))}function Pe(k,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let pe=te.get(k);pe===void 0&&(pe=a.getUniformBlockIndex(fe,k.name),te.set(k,pe))}function Ie(k,fe){const pe=c.get(fe).get(k);l.get(fe)!==pe&&(a.uniformBlockBinding(fe,pe,k.__bindingPointIndex),l.set(fe,pe))}function Ye(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},K=null,j={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,y=null,S=null,w=null,R=null,b=new $e(0,0,0),C=0,E=!1,v=null,D=null,U=null,I=null,F=null,ee.set(0,0,a.canvas.width,a.canvas.height),N.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:H,disable:ne,bindFramebuffer:me,drawBuffers:Se,useProgram:ve,setBlending:P,setMaterial:Oe,setFlipSided:be,setCullFace:Re,setLineWidth:se,setPolygonOffset:Ae,setScissorTest:de,activeTexture:M,bindTexture:x,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:Me,texImage3D:ye,updateUBOMapping:Pe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:ue,texSubImage2D:re,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Te,viewport:le,reset:Ye}}function im(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return d?new OffscreenCanvas(M,x):Xr("canvas")}function _(M,x,O){let Z=1;const J=de(M);if((J.width>O||J.height>O)&&(Z=O/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const re=Math.floor(Z*J.width),he=Math.floor(Z*J.height);f===void 0&&(f=g(re,he));const ce=x?g(re,he):f;return ce.width=re,ce.height=he,ce.getContext("2d").drawImage(M,0,0,re,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+he+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){a.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?a.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(M,x,O,Z,J=!1){if(M!==null){if(a[M]!==void 0)return a[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let re=x;if(x===a.RED&&(O===a.FLOAT&&(re=a.R32F),O===a.HALF_FLOAT&&(re=a.R16F),O===a.UNSIGNED_BYTE&&(re=a.R8)),x===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(re=a.R8UI),O===a.UNSIGNED_SHORT&&(re=a.R16UI),O===a.UNSIGNED_INT&&(re=a.R32UI),O===a.BYTE&&(re=a.R8I),O===a.SHORT&&(re=a.R16I),O===a.INT&&(re=a.R32I)),x===a.RG&&(O===a.FLOAT&&(re=a.RG32F),O===a.HALF_FLOAT&&(re=a.RG16F),O===a.UNSIGNED_BYTE&&(re=a.RG8)),x===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(re=a.RG8UI),O===a.UNSIGNED_SHORT&&(re=a.RG16UI),O===a.UNSIGNED_INT&&(re=a.RG32UI),O===a.BYTE&&(re=a.RG8I),O===a.SHORT&&(re=a.RG16I),O===a.INT&&(re=a.RG32I)),x===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(re=a.RGB8UI),O===a.UNSIGNED_SHORT&&(re=a.RGB16UI),O===a.UNSIGNED_INT&&(re=a.RGB32UI),O===a.BYTE&&(re=a.RGB8I),O===a.SHORT&&(re=a.RGB16I),O===a.INT&&(re=a.RGB32I)),x===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(re=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(re=a.RGBA16UI),O===a.UNSIGNED_INT&&(re=a.RGBA32UI),O===a.BYTE&&(re=a.RGBA8I),O===a.SHORT&&(re=a.RGBA16I),O===a.INT&&(re=a.RGBA32I)),x===a.RGB&&O===a.UNSIGNED_INT_5_9_9_9_REV&&(re=a.RGB9_E5),x===a.RGBA){const he=J?Hr:et.getTransfer(Z);O===a.FLOAT&&(re=a.RGBA32F),O===a.HALF_FLOAT&&(re=a.RGBA16F),O===a.UNSIGNED_BYTE&&(re=he===nt?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(re=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(re=a.RGB5_A1)}return(re===a.R16F||re===a.R32F||re===a.RG16F||re===a.RG32F||re===a.RGBA16F||re===a.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(M,x){let O;return M?x===null||x===Zn||x===Ri?O=a.DEPTH24_STENCIL8:x===mn?O=a.DEPTH32F_STENCIL8:x===tr&&(O=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===Ri?O=a.DEPTH_COMPONENT24:x===mn?O=a.DEPTH_COMPONENT32F:x===tr&&(O=a.DEPTH_COMPONENT16),O}function w(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==nn&&M.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){const x=M.target;x.removeEventListener("dispose",R),C(x),x.isVideoTexture&&u.delete(x)}function b(M){const x=M.target;x.removeEventListener("dispose",b),v(x)}function C(M){const x=r.get(M);if(x.__webglInit===void 0)return;const O=M.source,Z=h.get(O);if(Z){const J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(M),Object.keys(Z).length===0&&h.delete(O)}r.remove(M)}function E(M){const x=r.get(M);a.deleteTexture(x.__webglTexture);const O=M.source,Z=h.get(O);delete Z[x.__cacheKey],s.memory.textures--}function v(M){const x=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let J=0;J<x.__webglFramebuffer[Z].length;J++)a.deleteFramebuffer(x.__webglFramebuffer[Z][J]);else a.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)a.deleteFramebuffer(x.__webglFramebuffer[Z]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=M.textures;for(let Z=0,J=O.length;Z<J;Z++){const re=r.get(O[Z]);re.__webglTexture&&(a.deleteTexture(re.__webglTexture),s.memory.textures--),r.remove(O[Z])}r.remove(M)}let D=0;function U(){D=0}function I(){const M=D;return M>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+n.maxTextures),D+=1,M}function F(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function V(M,x){const O=r.get(M);if(M.isVideoTexture&&se(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(O,M,x);return}}t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+x)}function G(M,x){const O=r.get(M);if(M.version>0&&O.__version!==M.version){N(O,M,x);return}t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+x)}function Q(M,x){const O=r.get(M);if(M.version>0&&O.__version!==M.version){N(O,M,x);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+x)}function q(M,x){const O=r.get(M);if(M.version>0&&O.__version!==M.version){B(O,M,x);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+x)}const K={[$a]:a.REPEAT,[Yn]:a.CLAMP_TO_EDGE,[es]:a.MIRRORED_REPEAT},j={[nn]:a.NEAREST,[Oc]:a.NEAREST_MIPMAP_NEAREST,[fr]:a.NEAREST_MIPMAP_LINEAR,[Yt]:a.LINEAR,[ca]:a.LINEAR_MIPMAP_NEAREST,[qn]:a.LINEAR_MIPMAP_LINEAR},L={[zc]:a.NEVER,[qc]:a.ALWAYS,[Vc]:a.LESS,[Rl]:a.LEQUAL,[Hc]:a.EQUAL,[Yc]:a.GEQUAL,[Wc]:a.GREATER,[Xc]:a.NOTEQUAL};function W(M,x){if(x.type===mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yt||x.magFilter===ca||x.magFilter===fr||x.magFilter===qn||x.minFilter===Yt||x.minFilter===ca||x.minFilter===fr||x.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(M,a.TEXTURE_WRAP_S,K[x.wrapS]),a.texParameteri(M,a.TEXTURE_WRAP_T,K[x.wrapT]),(M===a.TEXTURE_3D||M===a.TEXTURE_2D_ARRAY)&&a.texParameteri(M,a.TEXTURE_WRAP_R,K[x.wrapR]),a.texParameteri(M,a.TEXTURE_MAG_FILTER,j[x.magFilter]),a.texParameteri(M,a.TEXTURE_MIN_FILTER,j[x.minFilter]),x.compareFunction&&(a.texParameteri(M,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(M,a.TEXTURE_COMPARE_FUNC,L[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==fr&&x.minFilter!==qn||x.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function ee(M,x){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",R));const Z=x.source;let J=h.get(Z);J===void 0&&(J={},h.set(Z,J));const re=F(x);if(re!==M.__cacheKey){J[re]===void 0&&(J[re]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),J[re].usedTimes++;const he=J[M.__cacheKey];he!==void 0&&(J[M.__cacheKey].usedTimes--,he.usedTimes===0&&E(x)),M.__cacheKey=re,M.__webglTexture=J[re].texture}return O}function N(M,x,O){let Z=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=a.TEXTURE_3D);const J=ee(M,x),re=x.source;t.bindTexture(Z,M.__webglTexture,a.TEXTURE0+O);const he=r.get(re);if(re.version!==he.__version||J===!0){t.activeTexture(a.TEXTURE0+O);const ce=et.getPrimaries(et.workingColorSpace),ge=x.colorSpace===Cn?null:et.getPrimaries(x.colorSpace),De=x.colorSpace===Cn||ce===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ue=_(x.image,!1,n.maxTextureSize);ue=Ae(x,ue);const Me=i.convert(x.format,x.colorSpace),ye=i.convert(x.type);let Te=y(x.internalFormat,Me,ye,x.colorSpace,x.isVideoTexture);W(Z,x);let le;const Pe=x.mipmaps,Ie=x.isVideoTexture!==!0,Ye=he.__version===void 0||J===!0,k=re.dataReady,fe=w(x,ue);if(x.isDepthTexture)Te=S(x.format===Ci,x.type),Ye&&(Ie?t.texStorage2D(a.TEXTURE_2D,1,Te,ue.width,ue.height):t.texImage2D(a.TEXTURE_2D,0,Te,ue.width,ue.height,0,Me,ye,null));else if(x.isDataTexture)if(Pe.length>0){Ie&&Ye&&t.texStorage2D(a.TEXTURE_2D,fe,Te,Pe[0].width,Pe[0].height);for(let te=0,pe=Pe.length;te<pe;te++)le=Pe[te],Ie?k&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,le.width,le.height,Me,ye,le.data):t.texImage2D(a.TEXTURE_2D,te,Te,le.width,le.height,0,Me,ye,le.data);x.generateMipmaps=!1}else Ie?(Ye&&t.texStorage2D(a.TEXTURE_2D,fe,Te,ue.width,ue.height),k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ue.width,ue.height,Me,ye,ue.data)):t.texImage2D(a.TEXTURE_2D,0,Te,ue.width,ue.height,0,Me,ye,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Ye&&t.texStorage3D(a.TEXTURE_2D_ARRAY,fe,Te,Pe[0].width,Pe[0].height,ue.depth);for(let te=0,pe=Pe.length;te<pe;te++)if(le=Pe[te],x.format!==tn)if(Me!==null)if(Ie){if(k)if(x.layerUpdates.size>0){const xe=Ro(le.width,le.height,x.format,x.type);for(const _e of x.layerUpdates){const Fe=le.data.subarray(_e*xe/le.data.BYTES_PER_ELEMENT,(_e+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,_e,le.width,le.height,1,Me,Fe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,ue.depth,Me,le.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,te,Te,le.width,le.height,ue.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,ue.depth,Me,ye,le.data):t.texImage3D(a.TEXTURE_2D_ARRAY,te,Te,le.width,le.height,ue.depth,0,Me,ye,le.data)}else{Ie&&Ye&&t.texStorage2D(a.TEXTURE_2D,fe,Te,Pe[0].width,Pe[0].height);for(let te=0,pe=Pe.length;te<pe;te++)le=Pe[te],x.format!==tn?Me!==null?Ie?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,te,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(a.TEXTURE_2D,te,Te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?k&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,le.width,le.height,Me,ye,le.data):t.texImage2D(a.TEXTURE_2D,te,Te,le.width,le.height,0,Me,ye,le.data)}else if(x.isDataArrayTexture)if(Ie){if(Ye&&t.texStorage3D(a.TEXTURE_2D_ARRAY,fe,Te,ue.width,ue.height,ue.depth),k)if(x.layerUpdates.size>0){const te=Ro(ue.width,ue.height,x.format,x.type);for(const pe of x.layerUpdates){const xe=ue.data.subarray(pe*te/ue.data.BYTES_PER_ELEMENT,(pe+1)*te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,ue.width,ue.height,1,Me,ye,xe)}x.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,ye,ue.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Te,ue.width,ue.height,ue.depth,0,Me,ye,ue.data);else if(x.isData3DTexture)Ie?(Ye&&t.texStorage3D(a.TEXTURE_3D,fe,Te,ue.width,ue.height,ue.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,ye,ue.data)):t.texImage3D(a.TEXTURE_3D,0,Te,ue.width,ue.height,ue.depth,0,Me,ye,ue.data);else if(x.isFramebufferTexture){if(Ye)if(Ie)t.texStorage2D(a.TEXTURE_2D,fe,Te,ue.width,ue.height);else{let te=ue.width,pe=ue.height;for(let xe=0;xe<fe;xe++)t.texImage2D(a.TEXTURE_2D,xe,Te,te,pe,0,Me,ye,null),te>>=1,pe>>=1}}else if(Pe.length>0){if(Ie&&Ye){const te=de(Pe[0]);t.texStorage2D(a.TEXTURE_2D,fe,Te,te.width,te.height)}for(let te=0,pe=Pe.length;te<pe;te++)le=Pe[te],Ie?k&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,Me,ye,le):t.texImage2D(a.TEXTURE_2D,te,Te,Me,ye,le);x.generateMipmaps=!1}else if(Ie){if(Ye){const te=de(ue);t.texStorage2D(a.TEXTURE_2D,fe,Te,te.width,te.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Me,ye,ue)}else t.texImage2D(a.TEXTURE_2D,0,Te,Me,ye,ue);m(x)&&p(Z),he.__version=re.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function B(M,x,O){if(x.image.length!==6)return;const Z=ee(M,x),J=x.source;t.bindTexture(a.TEXTURE_CUBE_MAP,M.__webglTexture,a.TEXTURE0+O);const re=r.get(J);if(J.version!==re.__version||Z===!0){t.activeTexture(a.TEXTURE0+O);const he=et.getPrimaries(et.workingColorSpace),ce=x.colorSpace===Cn?null:et.getPrimaries(x.colorSpace),ge=x.colorSpace===Cn||he===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let pe=0;pe<6;pe++)!De&&!ue?Me[pe]=_(x.image[pe],!0,n.maxCubemapSize):Me[pe]=ue?x.image[pe].image:x.image[pe],Me[pe]=Ae(x,Me[pe]);const ye=Me[0],Te=i.convert(x.format,x.colorSpace),le=i.convert(x.type),Pe=y(x.internalFormat,Te,le,x.colorSpace),Ie=x.isVideoTexture!==!0,Ye=re.__version===void 0||Z===!0,k=J.dataReady;let fe=w(x,ye);W(a.TEXTURE_CUBE_MAP,x);let te;if(De){Ie&&Ye&&t.texStorage2D(a.TEXTURE_CUBE_MAP,fe,Pe,ye.width,ye.height);for(let pe=0;pe<6;pe++){te=Me[pe].mipmaps;for(let xe=0;xe<te.length;xe++){const _e=te[xe];x.format!==tn?Te!==null?Ie?k&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,0,0,_e.width,_e.height,Te,le,_e.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,Pe,_e.width,_e.height,0,Te,le,_e.data)}}}else{if(te=x.mipmaps,Ie&&Ye){te.length>0&&fe++;const pe=de(Me[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,fe,Pe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ue){Ie?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Me[pe].width,Me[pe].height,Te,le,Me[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,Me[pe].width,Me[pe].height,0,Te,le,Me[pe].data);for(let xe=0;xe<te.length;xe++){const Fe=te[xe].image[pe].image;Ie?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,0,0,Fe.width,Fe.height,Te,le,Fe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,Pe,Fe.width,Fe.height,0,Te,le,Fe.data)}}else{Ie?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,le,Me[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,Te,le,Me[pe]);for(let xe=0;xe<te.length;xe++){const _e=te[xe];Ie?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,0,0,Te,le,_e.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,Pe,Te,le,_e.image[pe])}}}m(x)&&p(a.TEXTURE_CUBE_MAP),re.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function $(M,x,O,Z,J,re){const he=i.convert(O.format,O.colorSpace),ce=i.convert(O.type),ge=y(O.internalFormat,he,ce,O.colorSpace),De=r.get(x),ue=r.get(O);if(ue.__renderTarget=x,!De.__hasExternalTextures){const Me=Math.max(1,x.width>>re),ye=Math.max(1,x.height>>re);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,re,ge,Me,ye,x.depth,0,he,ce,null):t.texImage2D(J,re,ge,Me,ye,0,he,ce,null)}t.bindFramebuffer(a.FRAMEBUFFER,M),Re(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,J,ue.__webglTexture,0,be(x)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Z,J,ue.__webglTexture,re),t.bindFramebuffer(a.FRAMEBUFFER,null)}function H(M,x,O){if(a.bindRenderbuffer(a.RENDERBUFFER,M),x.depthBuffer){const Z=x.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,re=S(x.stencilBuffer,J),he=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=be(x);Re(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ce,re,x.width,x.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,re,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,re,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,M)}else{const Z=x.textures;for(let J=0;J<Z.length;J++){const re=Z[J],he=i.convert(re.format,re.colorSpace),ce=i.convert(re.type),ge=y(re.internalFormat,he,ce,re.colorSpace),De=be(x);O&&Re(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,De,ge,x.width,x.height):Re(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,De,ge,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,ge,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ne(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=r.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const J=Z.__webglTexture,re=be(x);if(x.depthTexture.format===yi)Re(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,J,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,J,0);else if(x.depthTexture.format===Ci)Re(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,J,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function me(M){const x=r.get(M),O=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const Z=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Z}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ne(x.__webglFramebuffer,M)}else if(O){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=a.createRenderbuffer(),H(x.__webglDepthbuffer[Z],M,!1);else{const J=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[Z];a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,re)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=a.createRenderbuffer(),H(x.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,J)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Se(M,x,O){const Z=r.get(M);x!==void 0&&$(Z.__webglFramebuffer,M,M.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&me(M)}function ve(M){const x=M.texture,O=r.get(M),Z=r.get(x);M.addEventListener("dispose",b);const J=M.textures,re=M.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=x.version,s.memory.textures++),re){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ge=0;ge<x.mipmaps.length;ge++)O.__webglFramebuffer[ce][ge]=a.createFramebuffer()}else O.__webglFramebuffer[ce]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)O.__webglFramebuffer[ce]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(he)for(let ce=0,ge=J.length;ce<ge;ce++){const De=r.get(J[ce]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),s.memory.textures++)}if(M.samples>0&&Re(M)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ge=J[ce];O.__webglColorRenderbuffer[ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const De=i.convert(ge.format,ge.colorSpace),ue=i.convert(ge.type),Me=y(ge.internalFormat,De,ue,ge.colorSpace,M.isXRRenderTarget===!0),ye=be(M);a.renderbufferStorageMultisample(a.RENDERBUFFER,ye,Me,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),H(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(re){t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),W(a.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)$(O.__webglFramebuffer[ce][ge],M,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else $(O.__webglFramebuffer[ce],M,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,ge=J.length;ce<ge;ce++){const De=J[ce],ue=r.get(De);t.bindTexture(a.TEXTURE_2D,ue.__webglTexture),W(a.TEXTURE_2D,De),$(O.__webglFramebuffer,M,De,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,0),m(De)&&p(a.TEXTURE_2D)}t.unbindTexture()}else{let ce=a.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),W(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)$(O.__webglFramebuffer[ge],M,x,a.COLOR_ATTACHMENT0,ce,ge);else $(O.__webglFramebuffer,M,x,a.COLOR_ATTACHMENT0,ce,0);m(x)&&p(ce),t.unbindTexture()}M.depthBuffer&&me(M)}function oe(M){const x=M.textures;for(let O=0,Z=x.length;O<Z;O++){const J=x[O];if(m(J)){const re=A(M),he=r.get(J).__webglTexture;t.bindTexture(re,he),p(re),t.unbindTexture()}}}const Ne=[],P=[];function Oe(M){if(M.samples>0){if(Re(M)===!1){const x=M.textures,O=M.width,Z=M.height;let J=a.COLOR_BUFFER_BIT;const re=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=r.get(M),ce=x.length>1;if(ce)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const De=r.get(x[ge]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,De,0)}a.blitFramebuffer(0,0,O,Z,0,0,O,Z,J,a.NEAREST),l===!0&&(Ne.length=0,P.length=0,Ne.push(a.COLOR_ATTACHMENT0+ge),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ne.push(re),P.push(re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,P)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const De=r.get(x[ge]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,De,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function be(M){return Math.min(n.maxSamples,M.samples)}function Re(M){const x=r.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(M){const x=s.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function Ae(M,x){const O=M.colorSpace,Z=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==Ui&&O!==Cn&&(et.getTransfer(O)===nt?(Z!==tn||J!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function de(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Se,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Re}function rm(a,e){function t(r,n=Cn){let i;const s=et.getTransfer(n);if(r===vn)return a.UNSIGNED_BYTE;if(r===Fs)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Ns)return a.UNSIGNED_SHORT_5_5_5_1;if(r===xl)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===_l)return a.BYTE;if(r===vl)return a.SHORT;if(r===tr)return a.UNSIGNED_SHORT;if(r===Is)return a.INT;if(r===Zn)return a.UNSIGNED_INT;if(r===mn)return a.FLOAT;if(r===nr)return a.HALF_FLOAT;if(r===Sl)return a.ALPHA;if(r===Ml)return a.RGB;if(r===tn)return a.RGBA;if(r===El)return a.LUMINANCE;if(r===yl)return a.LUMINANCE_ALPHA;if(r===yi)return a.DEPTH_COMPONENT;if(r===Ci)return a.DEPTH_STENCIL;if(r===Tl)return a.RED;if(r===Os)return a.RED_INTEGER;if(r===bl)return a.RG;if(r===Bs)return a.RG_INTEGER;if(r===ks)return a.RGBA_INTEGER;if(r===Fr||r===Nr||r===Or||r===Br)if(s===nt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Fr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Or)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Br)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Fr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Or)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Br)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ts||r===ns||r===is||r===rs)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===ts)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ns)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===is)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rs)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===as||r===ss||r===os)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===as||r===ss)return s===nt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===os)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ls||r===cs||r===us||r===fs||r===hs||r===ds||r===ps||r===ms||r===gs||r===_s||r===vs||r===xs||r===Ss||r===Ms)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===ls)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cs)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===us)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fs)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hs)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ds)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ps)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ms)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gs)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_s)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vs)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xs)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ss)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ms)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kr||r===Es||r===ys)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===kr)return s===nt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Es)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ys)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Al||r===Ts||r===bs||r===As)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===kr)return i.COMPRESSED_RED_RGTC1_EXT;if(r===Ts)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bs)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===As)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ri?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}const am={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Cr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
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

}`;class lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new Ct,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ln({vertexShader:sm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new $n(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cm extends Pi{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new lm,m=t.getContextAttributes();let p=null,A=null;const y=[],S=[],w=new tt;let R=null;const b=new Xt;b.viewport=new lt;const C=new Xt;C.viewport=new lt;const E=[b,C],v=new Cu;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let B=y[N];return B===void 0&&(B=new Ba,y[N]=B),B.getTargetRaySpace()},this.getControllerGrip=function(N){let B=y[N];return B===void 0&&(B=new Ba,y[N]=B),B.getGripSpace()},this.getHand=function(N){let B=y[N];return B===void 0&&(B=new Ba,y[N]=B),B.getHandSpace()};function I(N){const B=S.indexOf(N.inputSource);if(B===-1)return;const $=y[B];$!==void 0&&($.update(N.inputSource,N.frame,c||s),$.dispatchEvent({type:N.type,data:N.inputSource}))}function F(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",V);for(let N=0;N<y.length;N++){const B=S[N];B!==null&&(S[N]=null,y[N].disconnect(B))}D=null,U=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,n=null,A=null,ee.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){i=N,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",F),n.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),n.enabledFeatures!==void 0&&n.enabledFeatures.includes("layers")){let $=null,H=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Ci:yi,H=m.stencil?Ri:Zn);const me={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:i};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(me),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Jn(h.textureWidth,h.textureHeight,{format:tn,type:vn,depthTexture:new zl(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Jn(d.framebufferWidth,d.framebufferHeight,{format:tn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(N){for(let B=0;B<N.removed.length;B++){const $=N.removed[B],H=S.indexOf($);H>=0&&(S[H]=null,y[H].disconnect($))}for(let B=0;B<N.added.length;B++){const $=N.added[B];let H=S.indexOf($);if(H===-1){for(let me=0;me<y.length;me++)if(me>=S.length){S.push($),H=me;break}else if(S[me]===null){S[me]=$,H=me;break}if(H===-1)break}const ne=y[H];ne&&ne.connect($)}}const G=new ae,Q=new ae;function q(N,B,$){G.setFromMatrixPosition(B.matrixWorld),Q.setFromMatrixPosition($.matrixWorld);const H=G.distanceTo(Q),ne=B.projectionMatrix.elements,me=$.projectionMatrix.elements,Se=ne[14]/(ne[10]-1),ve=ne[14]/(ne[10]+1),oe=(ne[9]+1)/ne[5],Ne=(ne[9]-1)/ne[5],P=(ne[8]-1)/ne[0],Oe=(me[8]+1)/me[0],be=Se*P,Re=Se*Oe,se=H/(-P+Oe),Ae=se*-P;if(B.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(se),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ne[10]===-1)N.projectionMatrix.copy(B.projectionMatrix),N.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const de=Se+se,M=ve+se,x=be-Ae,O=Re+(H-Ae),Z=oe*ve/M*de,J=Ne*ve/M*de;N.projectionMatrix.makePerspective(x,O,Z,J,de,M),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function K(N,B){B===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(B.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;let B=N.near,$=N.far;_.texture!==null&&(_.depthNear>0&&(B=_.depthNear),_.depthFar>0&&($=_.depthFar)),v.near=C.near=b.near=B,v.far=C.far=b.far=$,(D!==v.near||U!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,U=v.far),b.layers.mask=N.layers.mask|2,C.layers.mask=N.layers.mask|4,v.layers.mask=b.layers.mask|C.layers.mask;const H=N.parent,ne=v.cameras;K(v,H);for(let me=0;me<ne.length;me++)K(ne[me],H);ne.length===2?q(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),j(N,v,H)};function j(N,B,$){$===null?N.matrix.copy(B.matrixWorld):(N.matrix.copy($.matrixWorld),N.matrix.invert(),N.matrix.multiply(B.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(B.projectionMatrix),N.projectionMatrixInverse.copy(B.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ws*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let L=null;function W(N,B){if(u=B.getViewerPose(c||s),g=B,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let H=!1;$.length!==v.cameras.length&&(v.cameras.length=0,H=!0);for(let me=0;me<$.length;me++){const Se=$[me];let ve=null;if(d!==null)ve=d.getViewport(Se);else{const Ne=f.getViewSubImage(h,Se);ve=Ne.viewport,me===0&&(e.setRenderTargetTextures(A,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(A))}let oe=E[me];oe===void 0&&(oe=new Xt,oe.layers.enable(me),oe.viewport=new lt,E[me]=oe),oe.matrix.fromArray(Se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(v.matrix.copy(oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),H===!0&&v.cameras.push(oe)}const ne=n.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const me=f.getDepthInformation($[0]);me&&me.isValid&&me.texture&&_.init(e,me,n.renderState)}}for(let $=0;$<y.length;$++){const H=S[$],ne=y[$];H!==null&&ne!==void 0&&ne.update(H,B,c||s)}L&&L(N,B),B.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:B}),g=null}const ee=new Wl;ee.setAnimationLoop(W),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}}const Gn=new xn,um=new ft;function fm(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Nl(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,A,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),y=A.envMap,S=A.envMapRotation;y&&(m.envMap.value=y,Gn.copy(S),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(um.makeRotationFromEuler(Gn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function hm(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const S=y.program;r.uniformBlockBinding(A,S)}function c(A,y){let S=n[A.id];S===void 0&&(g(A),S=u(A),n[A.id]=S,A.addEventListener("dispose",m));const w=y.program;r.updateUBOMapping(A,w);const R=e.render.frame;i[A.id]!==R&&(h(A),i[A.id]=R)}function u(A){const y=f();A.__bindingPointIndex=y;const S=a.createBuffer(),w=A.__size,R=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,w,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,S),S}function f(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=n[A.id],S=A.uniforms,w=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let R=0,b=S.length;R<b;R++){const C=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,v=C.length;E<v;E++){const D=C[E];if(d(D,R,E,w)===!0){const U=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let V=0;V<I.length;V++){const G=I[V],Q=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,U+F,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,U,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(A,y,S,w){const R=A.value,b=y+"_"+S;if(w[b]===void 0)return typeof R=="number"||typeof R=="boolean"?w[b]=R:w[b]=R.clone(),!0;{const C=w[b];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return w[b]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(A){const y=A.uniforms;let S=0;const w=16;for(let b=0,C=y.length;b<C;b++){const E=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,D=E.length;v<D;v++){const U=E[v],I=Array.isArray(U.value)?U.value:[U.value];for(let F=0,V=I.length;F<V;F++){const G=I[F],Q=_(G),q=S%w,K=q%Q.boundary,j=q+K;S+=K,j!==0&&w-j<Q.storage&&(S+=w-j),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Q.storage}}}const R=S%w;return R>0&&(S+=w-R),A.__size=S,A.__cache={},this}function _(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const S=s.indexOf(y.__bindingPointIndex);s.splice(S,1),a.deleteBuffer(n[y.id]),delete n[y.id],delete i[y.id]}function p(){for(const A in n)a.deleteBuffer(n[A]);s=[],n={},i={}}return{bind:l,update:c,dispose:p}}class dm{constructor(e={}){const{canvas:t=Kc(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Dn,this.toneMappingExposure=1;const S=this;let w=!1,R=0,b=0,C=null,E=-1,v=null;const D=new lt,U=new lt;let I=null;const F=new $e(0);let V=0,G=t.width,Q=t.height,q=1,K=null,j=null;const L=new lt(0,0,G,Q),W=new lt(0,0,G,Q);let ee=!1;const N=new Gl;let B=!1,$=!1;this.transmissionResolutionScale=1;const H=new ft,ne=new ft,me=new ae,Se=new lt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ne(){return C===null?q:1}let P=r;function Oe(T,X){return t.getContext(T,X)}try{const T={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ls}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),P===null){const X="webgl2";if(P=Oe(X,T),P===null)throw Oe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,Re,se,Ae,de,M,x,O,Z,J,re,he,ce,ge,De,ue,Me,ye,Te,le,Pe,Ie,Ye,k;function fe(){be=new Ed(P),be.init(),Ie=new rm(P,be),Re=new gd(P,be,e,Ie),se=new nm(P,be),Re.reverseDepthBuffer&&h&&se.buffers.depth.setReversed(!0),Ae=new bd(P),de=new Hp,M=new im(P,be,se,de,Re,Ie,Ae),x=new vd(S),O=new Md(S),Z=new Du(P),Ye=new pd(P,Z),J=new yd(P,Z,Ae,Ye),re=new wd(P,J,Z,Ae),Te=new Ad(P,Re,M),ue=new _d(de),he=new Vp(S,x,O,be,Re,Ye,ue),ce=new fm(S,de),ge=new Xp,De=new Jp(be),ye=new dd(S,x,O,se,re,d,l),Me=new em(S,re,Re),k=new hm(P,Ae,Re,se),le=new md(P,be,Ae),Pe=new Td(P,be,Ae),Ae.programs=he.programs,S.capabilities=Re,S.extensions=be,S.properties=de,S.renderLists=ge,S.shadowMap=Me,S.state=se,S.info=Ae}fe();const te=new cm(S,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(G,Q,!1))},this.getSize=function(T){return T.set(G,Q)},this.setSize=function(T,X,ie=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Q=X,t.width=Math.floor(T*q),t.height=Math.floor(X*q),ie===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(G*q,Q*q).floor()},this.setDrawingBufferSize=function(T,X,ie){G=T,Q=X,q=ie,t.width=Math.floor(T*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,X,ie,z){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,X,ie,z),se.viewport(D.copy(L).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(W)},this.setScissor=function(T,X,ie,z){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,X,ie,z),se.scissor(U.copy(W).multiplyScalar(q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){se.setScissorTest(ee=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(T=!0,X=!0,ie=!0){let z=0;if(T){let Y=!1;if(C!==null){const Ee=C.texture.format;Y=Ee===ks||Ee===Bs||Ee===Os}if(Y){const Ee=C.texture.type,we=Ee===vn||Ee===Zn||Ee===tr||Ee===Ri||Ee===Fs||Ee===Ns,Ue=ye.getClearColor(),Le=ye.getClearAlpha(),Ve=Ue.r,He=Ue.g,ke=Ue.b;we?(g[0]=Ve,g[1]=He,g[2]=ke,g[3]=Le,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ve,_[1]=He,_[2]=ke,_[3]=Le,P.clearBufferiv(P.COLOR,0,_))}else z|=P.COLOR_BUFFER_BIT}X&&(z|=P.DEPTH_BUFFER_BIT),ie&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),ge.dispose(),De.dispose(),de.dispose(),x.dispose(),O.dispose(),re.dispose(),Ye.dispose(),k.dispose(),he.dispose(),te.dispose(),te.removeEventListener("sessionstart",ct),te.removeEventListener("sessionend",Ut),yt.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Ae.autoReset,X=Me.enabled,ie=Me.autoUpdate,z=Me.needsUpdate,Y=Me.type;fe(),Ae.autoReset=T,Me.enabled=X,Me.autoUpdate=ie,Me.needsUpdate=z,Me.type=Y}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Fe(T){const X=T.target;X.removeEventListener("dispose",Fe),We(X)}function We(T){Be(T),de.remove(T)}function Be(T){const X=de.get(T).programs;X!==void 0&&(X.forEach(function(ie){he.releaseProgram(ie)}),T.isShaderMaterial&&he.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ie,z,Y,Ee){X===null&&(X=ve);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=Qr(T,X,ie,z,Y);se.setMaterial(z,we);let Le=ie.index,Ve=1;if(z.wireframe===!0){if(Le=J.getWireframeAttribute(ie),Le===void 0)return;Ve=2}const He=ie.drawRange,ke=ie.attributes.position;let Ke=He.start*Ve,Ze=(He.start+He.count)*Ve;Ee!==null&&(Ke=Math.max(Ke,Ee.start*Ve),Ze=Math.min(Ze,(Ee.start+Ee.count)*Ve)),Le!==null?(Ke=Math.max(Ke,0),Ze=Math.min(Ze,Le.count)):ke!=null&&(Ke=Math.max(Ke,0),Ze=Math.min(Ze,ke.count));const ot=Ze-Ke;if(ot<0||ot===1/0)return;Ye.setup(Y,z,Ue,ie,Le);let at,Je=le;if(Le!==null&&(at=Z.get(Le),Je=Pe,Je.setIndex(at)),Y.isMesh)z.wireframe===!0?(se.setLineWidth(z.wireframeLinewidth*Ne()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(Y.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),se.setLineWidth(Ge*Ne()),Y.isLineSegments?Je.setMode(P.LINES):Y.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else Y.isPoints?Je.setMode(P.POINTS):Y.isSprite&&Je.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Je.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Je.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ge=Y._multiDrawStarts,ut=Y._multiDrawCounts,je=Y._multiDrawCount,wt=Le?Z.get(Le).bytesPerElement:1,sn=de.get(z).currentProgram.getUniforms();for(let St=0;St<je;St++)sn.setValue(P,"_gl_DrawID",St),Je.render(Ge[St]/wt,ut[St])}else if(Y.isInstancedMesh)Je.renderInstances(Ke,ot,Y.count);else if(ie.isInstancedBufferGeometry){const Ge=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ut=Math.min(ie.instanceCount,Ge);Je.renderInstances(Ke,ot,ut)}else Je.render(Ke,ot)};function ze(T,X,ie){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=Ft,T.needsUpdate=!0,Vt(T,X,ie),T.side=Pn,T.needsUpdate=!0,Vt(T,X,ie),T.side=ln):Vt(T,X,ie)}this.compile=function(T,X,ie=null){ie===null&&(ie=T),p=De.get(ie),p.init(X),y.push(p),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),T!==ie&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const z=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){const Ue=Ee[we];ze(Ue,ie,Y),z.add(Ue)}else ze(Ee,ie,Y),z.add(Ee)}),y.pop(),p=null,z},this.compileAsync=function(T,X,ie=null){const z=this.compile(T,X,ie);return new Promise(Y=>{function Ee(){if(z.forEach(function(we){de.get(we).currentProgram.isReady()&&z.delete(we)}),z.size===0){Y(T);return}setTimeout(Ee,10)}be.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let it=null;function rt(T){it&&it(T)}function ct(){yt.stop()}function Ut(){yt.start()}const yt=new Wl;yt.setAnimationLoop(rt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(T){it=T,te.setAnimationLoop(T),T===null?yt.stop():yt.start()},te.addEventListener("sessionstart",ct),te.addEventListener("sessionend",Ut),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(X),X=te.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,X,C),p=De.get(T,y.length),p.init(X),y.push(p),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),N.setFromProjectionMatrix(ne),$=this.localClippingEnabled,B=ue.init(this.clippingPlanes,$),m=ge.get(T,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){const Ee=S.xr.getDepthSensingMesh();Ee!==null&&Ot(Ee,X,-1/0,S.sortObjects)}Ot(T,X,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(K,j),oe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,oe&&ye.addToRenderList(m,T),this.info.render.frame++,B===!0&&ue.beginShadows();const ie=p.state.shadowsArray;Me.render(ie,T,X),B===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,Y=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(Y.length>0)for(let we=0,Ue=Ee.length;we<Ue;we++){const Le=Ee[we];an(z,Y,T,Le)}oe&&ye.render(T);for(let we=0,Ue=Ee.length;we<Ue;we++){const Le=Ee[we];qt(m,T,Le,Le.viewport)}}else Y.length>0&&an(z,Y,T,X),oe&&ye.render(T),qt(m,T,X);C!==null&&b===0&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(S,T,X),Ye.resetDefaultState(),E=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],B===!0&&ue.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ot(T,X,ie,z){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||N.intersectsSprite(T)){z&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const we=re.update(T),Ue=T.material;Ue.visible&&m.push(T,we,Ue,ie,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||N.intersectsObject(T))){const we=re.update(T),Ue=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Se.copy(we.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Le=we.groups;for(let Ve=0,He=Le.length;Ve<He;Ve++){const ke=Le[Ve],Ke=Ue[ke.materialIndex];Ke&&Ke.visible&&m.push(T,we,Ke,ie,Se.z,ke)}}else Ue.visible&&m.push(T,we,Ue,ie,Se.z,null)}}const Ee=T.children;for(let we=0,Ue=Ee.length;we<Ue;we++)Ot(Ee[we],X,ie,z)}function qt(T,X,ie,z){const Y=T.opaque,Ee=T.transmissive,we=T.transparent;p.setupLightsView(ie),B===!0&&ue.setGlobalState(S.clippingPlanes,ie),z&&se.viewport(D.copy(z)),Y.length>0&&Dt(Y,X,ie),Ee.length>0&&Dt(Ee,X,ie),we.length>0&&Dt(we,X,ie),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function an(T,X,ie,z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Jn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?nr:vn,minFilter:qn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Ee=p.state.transmissionRenderTarget[z.id],we=z.viewport||D;Ee.setSize(we.z*S.transmissionResolutionScale,we.w*S.transmissionResolutionScale);const Ue=S.getRenderTarget();S.setRenderTarget(Ee),S.getClearColor(F),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),oe&&ye.render(ie);const Le=S.toneMapping;S.toneMapping=Dn;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),B===!0&&ue.setGlobalState(S.clippingPlanes,z),Dt(T,ie,z),M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee),be.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,Ke=X.length;ke<Ke;ke++){const Ze=X[ke],ot=Ze.object,at=Ze.geometry,Je=Ze.material,Ge=Ze.group;if(Je.side===ln&&ot.layers.test(z.layers)){const ut=Je.side;Je.side=Ft,Je.needsUpdate=!0,gt(ot,ie,z,at,Je,Ge),Je.side=ut,Je.needsUpdate=!0,He=!0}}He===!0&&(M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee))}S.setRenderTarget(Ue),S.setClearColor(F,V),Ve!==void 0&&(z.viewport=Ve),S.toneMapping=Le}function Dt(T,X,ie){const z=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ee=T.length;Y<Ee;Y++){const we=T[Y],Ue=we.object,Le=we.geometry,Ve=z===null?we.material:z,He=we.group;Ue.layers.test(ie.layers)&&gt(Ue,X,ie,Le,Ve,He)}}function gt(T,X,ie,z,Y,Ee){T.onBeforeRender(S,X,ie,z,Y,Ee),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(S,X,ie,z,T,Ee),Y.transparent===!0&&Y.side===ln&&Y.forceSinglePass===!1?(Y.side=Ft,Y.needsUpdate=!0,S.renderBufferDirect(ie,X,z,Y,T,Ee),Y.side=Pn,Y.needsUpdate=!0,S.renderBufferDirect(ie,X,z,Y,T,Ee),Y.side=ln):S.renderBufferDirect(ie,X,z,Y,T,Ee),T.onAfterRender(S,X,ie,z,Y,Ee)}function Vt(T,X,ie){X.isScene!==!0&&(X=ve);const z=de.get(T),Y=p.state.lights,Ee=p.state.shadowsArray,we=Y.state.version,Ue=he.getParameters(T,Y.state,Ee,X,ie),Le=he.getProgramCacheKey(Ue);let Ve=z.programs;z.environment=T.isMeshStandardMaterial?X.environment:null,z.fog=X.fog,z.envMap=(T.isMeshStandardMaterial?O:x).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Fe),Ve=new Map,z.programs=Ve);let He=Ve.get(Le);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===we)return ei(T,Ue),He}else Ue.uniforms=he.getUniforms(T),T.onBeforeCompile(Ue,S),He=he.acquireProgram(Ue,Le),Ve.set(Le,He),z.uniforms=Ue.uniforms;const ke=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=ue.uniform),ei(T,Ue),z.needsLights=ti(T),z.lightsStateVersion=we,z.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),z.currentProgram=He,z.uniformsList=null,He}function Ni(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Gr.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function ei(T,X){const ie=de.get(T);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Qr(T,X,ie,z,Y){X.isScene!==!0&&(X=ve),M.resetTextureUnits();const Ee=X.fog,we=z.isMeshStandardMaterial?X.environment:null,Ue=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ui,Le=(z.isMeshStandardMaterial?O:x).get(z.envMap||we),Ve=z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,He=!!ie.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ke=!!ie.morphAttributes.position,Ke=!!ie.morphAttributes.normal,Ze=!!ie.morphAttributes.color;let ot=Dn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ot=S.toneMapping);const at=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Je=at!==void 0?at.length:0,Ge=de.get(z),ut=p.state.lights;if(B===!0&&($===!0||T!==v)){const vt=T===v&&z.id===E;ue.setState(z,T,vt)}let je=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ut.state.version||Ge.outputColorSpace!==Ue||Y.isBatchedMesh&&Ge.batching===!1||!Y.isBatchedMesh&&Ge.batching===!0||Y.isBatchedMesh&&Ge.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ge.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Y.isInstancedMesh&&Ge.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ge.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ge.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ge.instancingMorph===!1&&Y.morphTexture!==null||Ge.envMap!==Le||z.fog===!0&&Ge.fog!==Ee||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ue.numPlanes||Ge.numIntersection!==ue.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==He||Ge.morphTargets!==ke||Ge.morphNormals!==Ke||Ge.morphColors!==Ze||Ge.toneMapping!==ot||Ge.morphTargetsCount!==Je)&&(je=!0):(je=!0,Ge.__version=z.version);let wt=Ge.currentProgram;je===!0&&(wt=Vt(z,X,Y));let sn=!1,St=!1,Tt=!1;const st=wt.getUniforms(),Mt=Ge.uniforms;if(se.useProgram(wt.program)&&(sn=!0,St=!0,Tt=!0),z.id!==E&&(E=z.id,St=!0),sn||v!==T){se.buffers.depth.getReversed()?(H.copy(T.projectionMatrix),Jc(H),Qc(H),st.setValue(P,"projectionMatrix",H)):st.setValue(P,"projectionMatrix",T.projectionMatrix),st.setValue(P,"viewMatrix",T.matrixWorldInverse);const dt=st.map.cameraPosition;dt!==void 0&&dt.setValue(P,me.setFromMatrixPosition(T.matrixWorld)),Re.logarithmicDepthBuffer&&st.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,St=!0,Tt=!0)}if(Y.isSkinnedMesh){st.setOptional(P,Y,"bindMatrix"),st.setOptional(P,Y,"bindMatrixInverse");const vt=Y.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),st.setValue(P,"boneTexture",vt.boneTexture,M))}Y.isBatchedMesh&&(st.setOptional(P,Y,"batchingTexture"),st.setValue(P,"batchingTexture",Y._matricesTexture,M),st.setOptional(P,Y,"batchingIdTexture"),st.setValue(P,"batchingIdTexture",Y._indirectTexture,M),st.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&st.setValue(P,"batchingColorTexture",Y._colorsTexture,M));const _t=ie.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&Te.update(Y,ie,wt),(St||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,st.setValue(P,"receiveShadow",Y.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Mt.envMap.value=Le,Mt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&X.environment!==null&&(Mt.envMapIntensity.value=X.environmentIntensity),St&&(st.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ge.needsLights&&ar(Mt,Tt),Ee&&z.fog===!0&&ce.refreshFogUniforms(Mt,Ee),ce.refreshMaterialUniforms(Mt,z,q,Q,p.state.transmissionRenderTarget[T.id]),Gr.upload(P,Ni(Ge),Mt,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Gr.upload(P,Ni(Ge),Mt,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(P,"center",Y.center),st.setValue(P,"modelViewMatrix",Y.modelViewMatrix),st.setValue(P,"normalMatrix",Y.normalMatrix),st.setValue(P,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const vt=z.uniformsGroups;for(let dt=0,Sn=vt.length;dt<Sn;dt++){const jt=vt[dt];k.update(jt,wt),k.bind(jt,wt)}}return wt}function ar(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function ti(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,X,ie){de.get(T.texture).__webglTexture=X,de.get(T.depthTexture).__webglTexture=ie;const z=de.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=ie===void 0,z.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,X){const ie=de.get(T);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Oi=P.createFramebuffer();this.setRenderTarget=function(T,X=0,ie=0){C=T,R=X,b=ie;let z=!0,Y=null,Ee=!1,we=!1;if(T){const Le=de.get(T);if(Le.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(Le.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Le.__hasExternalTextures)M.rebindTextures(T,de.get(T.texture).__webglTexture,de.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&de.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const He=de.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Y=He[X][ie]:Y=He[X],Ee=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?Y=de.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?Y=He[ie]:Y=He,D.copy(T.viewport),U.copy(T.scissor),I=T.scissorTest}else D.copy(L).multiplyScalar(q).floor(),U.copy(W).multiplyScalar(q).floor(),I=ee;if(ie!==0&&(Y=Oi),se.bindFramebuffer(P.FRAMEBUFFER,Y)&&z&&se.drawBuffers(T,Y),se.viewport(D),se.scissor(U),se.setScissorTest(I),Ee){const Le=de.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,ie)}else if(we){const Le=de.get(T.texture),Ve=X;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Le.__webglTexture,ie,Ve)}else if(T!==null&&ie!==0){const Le=de.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Le.__webglTexture,ie)}E=-1},this.readRenderTargetPixels=function(T,X,ie,z,Y,Ee,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){se.bindFramebuffer(P.FRAMEBUFFER,Ue);try{const Le=T.texture,Ve=Le.format,He=Le.type;if(!Re.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-z&&ie>=0&&ie<=T.height-Y&&P.readPixels(X,ie,z,Y,Ie.convert(Ve),Ie.convert(He),Ee)}finally{const Le=C!==null?de.get(C).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,X,ie,z,Y,Ee,we){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){const Le=T.texture,Ve=Le.format,He=Le.type;if(!Re.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=T.width-z&&ie>=0&&ie<=T.height-Y){se.bindFramebuffer(P.FRAMEBUFFER,Ue);const ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ke),P.bufferData(P.PIXEL_PACK_BUFFER,Ee.byteLength,P.STREAM_READ),P.readPixels(X,ie,z,Y,Ie.convert(Ve),Ie.convert(He),0);const Ke=C!==null?de.get(C).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,Ke);const Ze=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zc(P,Ze,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ee),P.deleteBuffer(ke),P.deleteSync(Ze),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,X=null,ie=0){T.isTexture!==!0&&(xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-ie),Y=Math.floor(T.image.width*z),Ee=Math.floor(T.image.height*z),we=X!==null?X.x:0,Ue=X!==null?X.y:0;M.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,ie,0,0,we,Ue,Y,Ee),se.unbindTexture()};const $r=P.createFramebuffer(),sr=P.createFramebuffer();this.copyTextureToTexture=function(T,X,ie=null,z=null,Y=0,Ee=null){T.isTexture!==!0&&(xi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],X=arguments[2],Ee=arguments[3]||0,ie=null),Ee===null&&(Y!==0?(xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let we,Ue,Le,Ve,He,ke,Ke,Ze,ot;const at=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(ie!==null)we=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Le=ie.isBox3?ie.max.z-ie.min.z:1,Ve=ie.min.x,He=ie.min.y,ke=ie.isBox3?ie.min.z:0;else{const _t=Math.pow(2,-Y);we=Math.floor(at.width*_t),Ue=Math.floor(at.height*_t),T.isDataArrayTexture?Le=at.depth:T.isData3DTexture?Le=Math.floor(at.depth*_t):Le=1,Ve=0,He=0,ke=0}z!==null?(Ke=z.x,Ze=z.y,ot=z.z):(Ke=0,Ze=0,ot=0);const Je=Ie.convert(X.format),Ge=Ie.convert(X.type);let ut;X.isData3DTexture?(M.setTexture3D(X,0),ut=P.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(M.setTexture2DArray(X,0),ut=P.TEXTURE_2D_ARRAY):(M.setTexture2D(X,0),ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),wt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),St=P.getParameter(P.UNPACK_SKIP_ROWS),Tt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,at.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,He),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);const st=T.isDataArrayTexture||T.isData3DTexture,Mt=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const _t=de.get(T),vt=de.get(X),dt=de.get(_t.__renderTarget),Sn=de.get(vt.__renderTarget);se.bindFramebuffer(P.READ_FRAMEBUFFER,dt.__webglFramebuffer),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let jt=0;jt<Le;jt++)st&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.get(T).__webglTexture,Y,ke+jt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.get(X).__webglTexture,Ee,ot+jt)),P.blitFramebuffer(Ve,He,we,Ue,Ke,Ze,we,Ue,P.DEPTH_BUFFER_BIT,P.NEAREST);se.bindFramebuffer(P.READ_FRAMEBUFFER,null),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||de.has(T)){const _t=de.get(T),vt=de.get(X);se.bindFramebuffer(P.READ_FRAMEBUFFER,$r),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,sr);for(let dt=0;dt<Le;dt++)st?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.__webglTexture,Y,ke+dt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_t.__webglTexture,Y),Mt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,Ee,ot+dt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,Ee),Y!==0?P.blitFramebuffer(Ve,He,we,Ue,Ke,Ze,we,Ue,P.COLOR_BUFFER_BIT,P.NEAREST):Mt?P.copyTexSubImage3D(ut,Ee,Ke,Ze,ot+dt,Ve,He,we,Ue):P.copyTexSubImage2D(ut,Ee,Ke,Ze,Ve,He,we,Ue);se.bindFramebuffer(P.READ_FRAMEBUFFER,null),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(ut,Ee,Ke,Ze,ot,we,Ue,Le,Je,Ge,at.data):X.isCompressedArrayTexture?P.compressedTexSubImage3D(ut,Ee,Ke,Ze,ot,we,Ue,Le,Je,at.data):P.texSubImage3D(ut,Ee,Ke,Ze,ot,we,Ue,Le,Je,Ge,at):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ee,Ke,Ze,we,Ue,Je,Ge,at.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ee,Ke,Ze,at.width,at.height,Je,at.data):P.texSubImage2D(P.TEXTURE_2D,Ee,Ke,Ze,we,Ue,Je,Ge,at);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,St),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),Ee===0&&X.generateMipmaps&&P.generateMipmap(ut),se.unbindTexture()},this.copyTextureToTexture3D=function(T,X,ie=null,z=null,Y=0){return T.isTexture!==!0&&(xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,z=arguments[1]||null,T=arguments[2],X=arguments[3],Y=arguments[4]||0),xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,ie,z,Y)},this.initRenderTarget=function(T){de.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),se.unbindTexture()},this.resetState=function(){R=0,b=0,C=null,se.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function pm(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function mm(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var Kl=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Kl=function(){return a},a},gm=0,_m=0,ka=!1,$i=Object.create(null),er=Object.create(null),Cs=Object.create(null);function Fi(a){if((!a||typeof a.init!="function")&&!ka)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId,i=mm(a);n==null&&(n="#default");var s="workerModule"+ ++gm,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(ka=!0,u=Fi({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+zr(u)+`
)}`}),ka=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!Kl())return i.apply(void 0,u);if(!l){l=$o(n,"registerModule",c.workerModuleData);var h=function(){l=null,er[n].delete(h)};(er[n]||(er[n]=new Set)).add(h)}return l.then(function(d){var g=d.isCallable;if(g)return $o(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:zr(t),getTransferables:r&&zr(r)},c.onMainThread=i,c}function vm(a){er[a]&&er[a].forEach(function(e){e()}),$i[a]&&($i[a].terminate(),delete $i[a])}function zr(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function xm(a){var e=$i[a];if(!e){var t=zr(pm);e=$i[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=Cs[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Cs[i],s(n)}}return e}function $o(a,e,t){return new Promise(function(r,n){var i=++_m;Cs[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},xm(a).postMessage({messageId:i,action:e,data:t})})}function Zl(){var a=function(e){function t(K,j,L,W,ee,N,B,$){var H=1-B;$.x=H*H*K+2*H*B*L+B*B*ee,$.y=H*H*j+2*H*B*W+B*B*N}function r(K,j,L,W,ee,N,B,$,H,ne){var me=1-H;ne.x=me*me*me*K+3*me*me*H*L+3*me*H*H*ee+H*H*H*B,ne.y=me*me*me*j+3*me*me*H*W+3*me*H*H*N+H*H*H*$}function n(K,j){for(var L=/([MLQCZ])([^MLQCZ]*)/g,W,ee,N,B,$;W=L.exec(K);){var H=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(W[1]){case"M":B=ee=H[0],$=N=H[1];break;case"L":(H[0]!==B||H[1]!==$)&&j("L",B,$,B=H[0],$=H[1]);break;case"Q":{j("Q",B,$,B=H[2],$=H[3],H[0],H[1]);break}case"C":{j("C",B,$,B=H[4],$=H[5],H[0],H[1],H[2],H[3]);break}case"Z":(B!==ee||$!==N)&&j("L",B,$,ee,N);break}}}function i(K,j,L){L===void 0&&(L=16);var W={x:0,y:0};n(K,function(ee,N,B,$,H,ne,me,Se,ve){switch(ee){case"L":j(N,B,$,H);break;case"Q":{for(var oe=N,Ne=B,P=1;P<L;P++)t(N,B,ne,me,$,H,P/(L-1),W),j(oe,Ne,W.x,W.y),oe=W.x,Ne=W.y;break}case"C":{for(var Oe=N,be=B,Re=1;Re<L;Re++)r(N,B,ne,me,Se,ve,$,H,Re/(L-1),W),j(Oe,be,W.x,W.y),Oe=W.x,be=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(K,j){var L=K.getContext?K.getContext("webgl",c):K,W=l.get(L);if(!W){let Oe=function(M){var x=N[M];if(!x&&(x=N[M]=L.getExtension(M),!x))throw new Error(M+" not supported");return x},be=function(M,x){var O=L.createShader(x);return L.shaderSource(O,M),L.compileShader(O),O},Re=function(M,x,O,Z){if(!B[M]){var J={},re={},he=L.createProgram();L.attachShader(he,be(x,L.VERTEX_SHADER)),L.attachShader(he,be(O,L.FRAGMENT_SHADER)),L.linkProgram(he),B[M]={program:he,transaction:function(ge){L.useProgram(he),ge({setUniform:function(ue,Me){for(var ye=[],Te=arguments.length-2;Te-- >0;)ye[Te]=arguments[Te+2];var le=re[Me]||(re[Me]=L.getUniformLocation(he,Me));L["uniform"+ue].apply(L,[le].concat(ye))},setAttribute:function(ue,Me,ye,Te,le){var Pe=J[ue];Pe||(Pe=J[ue]={buf:L.createBuffer(),loc:L.getAttribLocation(he,ue),data:null}),L.bindBuffer(L.ARRAY_BUFFER,Pe.buf),L.vertexAttribPointer(Pe.loc,Me,L.FLOAT,!1,0,0),L.enableVertexAttribArray(Pe.loc),ee?L.vertexAttribDivisor(Pe.loc,Te):Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Pe.loc,Te),le!==Pe.data&&(L.bufferData(L.ARRAY_BUFFER,le,ye),Pe.data=le)}})}}}B[M].transaction(Z)},se=function(M,x){H++;try{L.activeTexture(L.TEXTURE0+H);var O=$[M];O||(O=$[M]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,O),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,O),x(O,H)}finally{H--}},Ae=function(M,x,O){var Z=L.createFramebuffer();ne.push(Z),L.bindFramebuffer(L.FRAMEBUFFER,Z),L.activeTexture(L.TEXTURE0+x),L.bindTexture(L.TEXTURE_2D,M),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,M,0);try{O(Z)}finally{L.deleteFramebuffer(Z),L.bindFramebuffer(L.FRAMEBUFFER,ne[--ne.length-1]||null)}},de=function(){N={},B={},$={},H=-1,ne.length=0};var me=Oe,Se=be,ve=Re,oe=se,Ne=Ae,P=de,ee=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,N={},B={},$={},H=-1,ne=[];L.canvas.addEventListener("webglcontextlost",function(M){de(),M.preventDefault()},!1),l.set(L,W={gl:L,isWebGL2:ee,getExtension:Oe,withProgram:Re,withTexture:se,withTextureFramebuffer:Ae,handleContextLoss:de})}j(W)}function f(K,j,L,W,ee,N,B,$){B===void 0&&(B=15),$===void 0&&($=null),u(K,function(H){var ne=H.gl,me=H.withProgram,Se=H.withTexture;Se("copy",function(ve,oe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ee,N,0,ne.RGBA,ne.UNSIGNED_BYTE,j),me("copy",s,o,function(Ne){var P=Ne.setUniform,Oe=Ne.setAttribute;Oe("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),P("1i","image",oe),ne.bindFramebuffer(ne.FRAMEBUFFER,$||null),ne.disable(ne.BLEND),ne.colorMask(B&8,B&4,B&2,B&1),ne.viewport(L,W,ee,N),ne.scissor(L,W,ee,N),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function h(K,j,L){var W=K.width,ee=K.height;u(K,function(N){var B=N.gl,$=new Uint8Array(W*ee*4);B.readPixels(0,0,W,ee,B.RGBA,B.UNSIGNED_BYTE,$),K.width=j,K.height=L,f(B,$,0,0,W,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(K,j,L,W,ee,N){N===void 0&&(N=1);var B=new Uint8Array(K*j),$=W[2]-W[0],H=W[3]-W[1],ne=[];i(L,function(Oe,be,Re,se){ne.push({x1:Oe,y1:be,x2:Re,y2:se,minX:Math.min(Oe,Re),minY:Math.min(be,se),maxX:Math.max(Oe,Re),maxY:Math.max(be,se)})}),ne.sort(function(Oe,be){return Oe.maxX-be.maxX});for(var me=0;me<K;me++)for(var Se=0;Se<j;Se++){var ve=Ne(W[0]+$*(me+.5)/K,W[1]+H*(Se+.5)/j),oe=Math.pow(1-Math.abs(ve)/ee,N)/2;ve<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),B[Se*K+me]=oe}return B;function Ne(Oe,be){for(var Re=1/0,se=1/0,Ae=ne.length;Ae--;){var de=ne[Ae];if(de.maxX+se<=Oe)break;if(Oe+se>de.minX&&be-se<de.maxY&&be+se>de.minY){var M=p(Oe,be,de.x1,de.y1,de.x2,de.y2);M<Re&&(Re=M,se=Math.sqrt(Re))}}return P(Oe,be)&&(se=-se),se}function P(Oe,be){for(var Re=0,se=ne.length;se--;){var Ae=ne[se];if(Ae.maxX<=Oe)break;var de=Ae.y1>be!=Ae.y2>be&&Oe<(Ae.x2-Ae.x1)*(be-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;de&&(Re+=Ae.y1<Ae.y2?1:-1)}return Re!==0}}function _(K,j,L,W,ee,N,B,$,H,ne){N===void 0&&(N=1),$===void 0&&($=0),H===void 0&&(H=0),ne===void 0&&(ne=0),m(K,j,L,W,ee,N,B,null,$,H,ne)}function m(K,j,L,W,ee,N,B,$,H,ne,me){N===void 0&&(N=1),H===void 0&&(H=0),ne===void 0&&(ne=0),me===void 0&&(me=0);for(var Se=g(K,j,L,W,ee,N),ve=new Uint8Array(Se.length*4),oe=0;oe<Se.length;oe++)ve[oe*4+me]=Se[oe];f(B,ve,H,ne,K,j,1<<3-me,$)}function p(K,j,L,W,ee,N){var B=ee-L,$=N-W,H=B*B+$*$,ne=H?Math.max(0,Math.min(1,((K-L)*B+(j-W)*$)/H)):0,me=K-(L+ne*B),Se=j-(W+ne*$);return me*me+Se*Se}var A=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",w="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",R=new Float32Array([0,0,2,0,0,2]),b=null,C=!1,E={},v=new WeakMap;function D(K){if(!C&&!V(K))throw new Error("WebGL generation not supported")}function U(K,j,L,W,ee,N,B){if(N===void 0&&(N=1),B===void 0&&(B=null),!B&&(B=b,!B)){var $=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!$)throw new Error("OffscreenCanvas or DOM canvas not supported");B=b=$.getContext("webgl",{depth:!1})}D(B);var H=new Uint8Array(K*j*4);u(B,function(ve){var oe=ve.gl,Ne=ve.withTexture,P=ve.withTextureFramebuffer;Ne("readable",function(Oe,be){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,K,j,0,oe.RGBA,oe.UNSIGNED_BYTE,null),P(Oe,be,function(Re){F(K,j,L,W,ee,N,oe,Re,0,0,0),oe.readPixels(0,0,K,j,oe.RGBA,oe.UNSIGNED_BYTE,H)})})});for(var ne=new Uint8Array(K*j),me=0,Se=0;me<H.length;me+=4)ne[Se++]=H[me];return ne}function I(K,j,L,W,ee,N,B,$,H,ne){N===void 0&&(N=1),$===void 0&&($=0),H===void 0&&(H=0),ne===void 0&&(ne=0),F(K,j,L,W,ee,N,B,null,$,H,ne)}function F(K,j,L,W,ee,N,B,$,H,ne,me){N===void 0&&(N=1),H===void 0&&(H=0),ne===void 0&&(ne=0),me===void 0&&(me=0),D(B);var Se=[];i(L,function(ve,oe,Ne,P){Se.push(ve,oe,Ne,P)}),Se=new Float32Array(Se),u(B,function(ve){var oe=ve.gl,Ne=ve.isWebGL2,P=ve.getExtension,Oe=ve.withProgram,be=ve.withTexture,Re=ve.withTextureFramebuffer,se=ve.handleContextLoss;if(be("rawDistances",function(Ae,de){(K!==Ae._lastWidth||j!==Ae._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,Ae._lastWidth=K,Ae._lastHeight=j,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Oe("main",y,S,function(M){var x=M.setAttribute,O=M.setUniform,Z=!Ne&&P("ANGLE_instanced_arrays"),J=!Ne&&P("EXT_blend_minmax");x("aUV",2,oe.STATIC_DRAW,0,R),x("aLineSegment",4,oe.DYNAMIC_DRAW,1,Se),O.apply(void 0,["4f","uGlyphBounds"].concat(W)),O("1f","uMaxDistance",ee),O("1f","uExponent",N),Re(Ae,de,function(re){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,K,j),oe.scissor(0,0,K,j),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,Ne?oe.MAX:J.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),Ne?oe.drawArraysInstanced(oe.TRIANGLES,0,3,Se.length/4):Z.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,Se.length/4)})}),Oe("post",s,w,function(M){M.setAttribute("aUV",2,oe.STATIC_DRAW,0,R),M.setUniform("1i","tex",de),oe.bindFramebuffer(oe.FRAMEBUFFER,$),oe.disable(oe.BLEND),oe.colorMask(me===0,me===1,me===2,me===3),oe.viewport(H,ne,K,j),oe.scissor(H,ne,K,j),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw se(),new Error("webgl context lost")})}function V(K){var j=!K||K===b?E:K.canvas||K,L=v.get(j);if(L===void 0){C=!0;var W=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);L=N&&ee.length===N.length&&N.every(function(B,$){return B===ee[$]}),L||(W="bad trial run results",console.info(ee,N))}catch(B){L=!1,W=B.message}W&&console.warn("WebGL SDF generation not supported:",W),C=!1,v.set(j,L)}return L}var G=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:I,generateIntoFramebuffer:F,isSupported:V});function Q(K,j,L,W,ee,N){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1);try{return U.apply(G,arguments)}catch(B){return console.info("WebGL SDF generation failed, falling back to JS",B),g.apply(A,arguments)}}function q(K,j,L,W,ee,N,B,$,H,ne){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1),$===void 0&&($=0),H===void 0&&(H=0),ne===void 0&&(ne=0);try{return I.apply(G,arguments)}catch(me){return console.info("WebGL SDF generation failed, falling back to JS",me),_.apply(A,arguments)}}return e.forEachPathCommand=n,e.generate=Q,e.generateIntoCanvas=q,e.javascript=A,e.pathToLineSegments=i,e.webgl=G,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Sm(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(se,Ae){r[se]=1<<Ae+1,n[r[se]]=se}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function f(){if(!u){u=new Map;var se=function(de){if(t.hasOwnProperty(de)){var M=0;t[de].split(",").forEach(function(x){var O=x.split("+"),Z=O[0],J=O[1];Z=parseInt(Z,36),J=J?parseInt(J,36):0,u.set(M+=Z,r[de]);for(var re=0;re<J;re++)u.set(++M,r[de])})}};for(var Ae in t)se(Ae)}}function h(se){return f(),u.get(se.codePointAt(0))||r.L}function d(se){return n[h(se)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(se,Ae){var de=36,M=0,x=new Map,O=Ae&&new Map,Z;return se.split(",").forEach(function J(re){if(re.indexOf("+")!==-1)for(var he=+re;he--;)J(Z);else{Z=re;var ce=re.split(">"),ge=ce[0],De=ce[1];ge=String.fromCodePoint(M+=parseInt(ge,de)),De=String.fromCodePoint(M+=parseInt(De,de)),x.set(ge,De),Ae&&O.set(De,ge)}}),{map:x,reverseMap:O}}var m,p,A;function y(){if(!m){var se=_(g.pairs,!0),Ae=se.map,de=se.reverseMap;m=Ae,p=de,A=_(g.canonical,!1).map}}function S(se){return y(),m.get(se)||null}function w(se){return y(),p.get(se)||null}function R(se){return y(),A.get(se)||null}var b=r.L,C=r.R,E=r.EN,v=r.ES,D=r.ET,U=r.AN,I=r.CS,F=r.B,V=r.S,G=r.ON,Q=r.BN,q=r.NSM,K=r.AL,j=r.LRO,L=r.RLO,W=r.LRE,ee=r.RLE,N=r.PDF,B=r.LRI,$=r.RLI,H=r.FSI,ne=r.PDI;function me(se,Ae){for(var de=125,M=new Uint32Array(se.length),x=0;x<se.length;x++)M[x]=h(se[x]);var O=new Map;function Z(Pt,Zt){var Lt=M[Pt];M[Pt]=Zt,O.set(Lt,O.get(Lt)-1),Lt&o&&O.set(o,O.get(o)-1),O.set(Zt,(O.get(Zt)||0)+1),Zt&o&&O.set(o,(O.get(o)||0)+1)}for(var J=new Uint8Array(se.length),re=new Map,he=[],ce=null,ge=0;ge<se.length;ge++)ce||he.push(ce={start:ge,end:se.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:eo(ge,!1)}),M[ge]&F&&(ce.end=ge,ce=null);for(var De=ee|W|L|j|i|ne|N|F,ue=function(Pt){return Pt+(Pt&1?1:2)},Me=function(Pt){return Pt+(Pt&1?2:1)},ye=0;ye<he.length;ye++){ce=he[ye];var Te=[{_level:ce.level,_override:0,_isolate:0}],le=void 0,Pe=0,Ie=0,Ye=0;O.clear();for(var k=ce.start;k<=ce.end;k++){var fe=M[k];if(le=Te[Te.length-1],O.set(fe,(O.get(fe)||0)+1),fe&o&&O.set(o,(O.get(o)||0)+1),fe&De)if(fe&(ee|W)){J[k]=le._level;var te=(fe===ee?Me:ue)(le._level);te<=de&&!Pe&&!Ie?Te.push({_level:te,_override:0,_isolate:0}):Pe||Ie++}else if(fe&(L|j)){J[k]=le._level;var pe=(fe===L?Me:ue)(le._level);pe<=de&&!Pe&&!Ie?Te.push({_level:pe,_override:fe&L?C:b,_isolate:0}):Pe||Ie++}else if(fe&i){fe&H&&(fe=eo(k+1,!0)===1?$:B),J[k]=le._level,le._override&&Z(k,le._override);var xe=(fe===$?Me:ue)(le._level);xe<=de&&Pe===0&&Ie===0?(Ye++,Te.push({_level:xe,_override:0,_isolate:1,_isolInitIndex:k})):Pe++}else if(fe&ne){if(Pe>0)Pe--;else if(Ye>0){for(Ie=0;!Te[Te.length-1]._isolate;)Te.pop();var _e=Te[Te.length-1]._isolInitIndex;_e!=null&&(re.set(_e,k),re.set(k,_e)),Te.pop(),Ye--}le=Te[Te.length-1],J[k]=le._level,le._override&&Z(k,le._override)}else fe&N?(Pe===0&&(Ie>0?Ie--:!le._isolate&&Te.length>1&&(Te.pop(),le=Te[Te.length-1])),J[k]=le._level):fe&F&&(J[k]=ce.level);else J[k]=le._level,le._override&&fe!==Q&&Z(k,le._override)}for(var Fe=[],We=null,Be=ce.start;Be<=ce.end;Be++){var ze=M[Be];if(!(ze&l)){var it=J[Be],rt=ze&i,ct=ze===ne;We&&it===We._level?(We._end=Be,We._endsWithIsolInit=rt):Fe.push(We={_start:Be,_end:Be,_level:it,_startsWithPDI:ct,_endsWithIsolInit:rt})}}for(var Ut=[],yt=0;yt<Fe.length;yt++){var Ot=Fe[yt];if(!Ot._startsWithPDI||Ot._startsWithPDI&&!re.has(Ot._start)){for(var qt=[We=Ot],an=void 0;We&&We._endsWithIsolInit&&(an=re.get(We._end))!=null;)for(var Dt=yt+1;Dt<Fe.length;Dt++)if(Fe[Dt]._start===an){qt.push(We=Fe[Dt]);break}for(var gt=[],Vt=0;Vt<qt.length;Vt++)for(var Ni=qt[Vt],ei=Ni._start;ei<=Ni._end;ei++)gt.push(ei);for(var Qr=J[gt[0]],ar=ce.level,ti=gt[0]-1;ti>=0;ti--)if(!(M[ti]&l)){ar=J[ti];break}var Oi=gt[gt.length-1],$r=J[Oi],sr=ce.level;if(!(M[Oi]&i)){for(var T=Oi+1;T<=ce.end;T++)if(!(M[T]&l)){sr=J[T];break}}Ut.push({_seqIndices:gt,_sosType:Math.max(ar,Qr)%2?C:b,_eosType:Math.max(sr,$r)%2?C:b})}}for(var X=0;X<Ut.length;X++){var ie=Ut[X],z=ie._seqIndices,Y=ie._sosType,Ee=ie._eosType,we=J[z[0]]&1?C:b;if(O.get(q))for(var Ue=0;Ue<z.length;Ue++){var Le=z[Ue];if(M[Le]&q){for(var Ve=Y,He=Ue-1;He>=0;He--)if(!(M[z[He]]&l)){Ve=M[z[He]];break}Z(Le,Ve&(i|ne)?G:Ve)}}if(O.get(E))for(var ke=0;ke<z.length;ke++){var Ke=z[ke];if(M[Ke]&E)for(var Ze=ke-1;Ze>=-1;Ze--){var ot=Ze===-1?Y:M[z[Ze]];if(ot&s){ot===K&&Z(Ke,U);break}}}if(O.get(K))for(var at=0;at<z.length;at++){var Je=z[at];M[Je]&K&&Z(Je,C)}if(O.get(v)||O.get(I))for(var Ge=1;Ge<z.length-1;Ge++){var ut=z[Ge];if(M[ut]&(v|I)){for(var je=0,wt=0,sn=Ge-1;sn>=0&&(je=M[z[sn]],!!(je&l));sn--);for(var St=Ge+1;St<z.length&&(wt=M[z[St]],!!(wt&l));St++);je===wt&&(M[ut]===v?je===E:je&(E|U))&&Z(ut,je)}}if(O.get(E))for(var Tt=0;Tt<z.length;Tt++){var st=z[Tt];if(M[st]&E){for(var Mt=Tt-1;Mt>=0&&M[z[Mt]]&(D|l);Mt--)Z(z[Mt],E);for(Tt++;Tt<z.length&&M[z[Tt]]&(D|l|E);Tt++)M[z[Tt]]!==E&&Z(z[Tt],E)}}if(O.get(D)||O.get(v)||O.get(I))for(var _t=0;_t<z.length;_t++){var vt=z[_t];if(M[vt]&(D|v|I)){Z(vt,G);for(var dt=_t-1;dt>=0&&M[z[dt]]&l;dt--)Z(z[dt],G);for(var Sn=_t+1;Sn<z.length&&M[z[Sn]]&l;Sn++)Z(z[Sn],G)}}if(O.get(E))for(var jt=0,Vs=Y;jt<z.length;jt++){var Hs=z[jt],ea=M[Hs];ea&E?Vs===b&&Z(Hs,b):ea&s&&(Vs=ea)}if(O.get(o)){var Bi=C|E|U,Ws=Bi|b,or=[];{for(var ni=[],ii=0;ii<z.length;ii++)if(M[z[ii]]&o){var ki=se[z[ii]],Xs=void 0;if(S(ki)!==null)if(ni.length<63)ni.push({char:ki,seqIndex:ii});else break;else if((Xs=w(ki))!==null)for(var Gi=ni.length-1;Gi>=0;Gi--){var ta=ni[Gi].char;if(ta===Xs||ta===w(R(ki))||S(R(ta))===ki){or.push([ni[Gi].seqIndex,ii]),ni.length=Gi;break}}}or.sort(function(Pt,Zt){return Pt[0]-Zt[0]})}for(var na=0;na<or.length;na++){for(var Ys=or[na],lr=Ys[0],ia=Ys[1],qs=!1,Kt=0,ra=lr+1;ra<ia;ra++){var js=z[ra];if(M[js]&Ws){qs=!0;var Ks=M[js]&Bi?C:b;if(Ks===we){Kt=Ks;break}}}if(qs&&!Kt){Kt=Y;for(var aa=lr-1;aa>=0;aa--){var Zs=z[aa];if(M[Zs]&Ws){var Js=M[Zs]&Bi?C:b;Js!==we?Kt=Js:Kt=we;break}}}if(Kt){if(M[z[lr]]=M[z[ia]]=Kt,Kt!==we){for(var zi=lr+1;zi<z.length;zi++)if(!(M[z[zi]]&l)){h(se[z[zi]])&q&&(M[z[zi]]=Kt);break}}if(Kt!==we){for(var Vi=ia+1;Vi<z.length;Vi++)if(!(M[z[Vi]]&l)){h(se[z[Vi]])&q&&(M[z[Vi]]=Kt);break}}}}for(var Mn=0;Mn<z.length;Mn++)if(M[z[Mn]]&o){for(var Qs=Mn,sa=Mn,oa=Y,Hi=Mn-1;Hi>=0;Hi--)if(M[z[Hi]]&l)Qs=Hi;else{oa=M[z[Hi]]&Bi?C:b;break}for(var $s=Ee,Wi=Mn+1;Wi<z.length;Wi++)if(M[z[Wi]]&(o|l))sa=Wi;else{$s=M[z[Wi]]&Bi?C:b;break}for(var la=Qs;la<=sa;la++)M[z[la]]=oa===$s?oa:we;Mn=sa}}}for(var Bt=ce.start;Bt<=ce.end;Bt++){var ac=J[Bt],cr=M[Bt];if(ac&1?cr&(b|E|U)&&J[Bt]++:cr&C?J[Bt]++:cr&(U|E)&&(J[Bt]+=2),cr&l&&(J[Bt]=Bt===0?ce.level:J[Bt-1]),Bt===ce.end||h(se[Bt])&(V|F))for(var ur=Bt;ur>=0&&h(se[ur])&c;ur--)J[ur]=ce.level}}return{levels:J,paragraphs:he};function eo(Pt,Zt){for(var Lt=Pt;Lt<se.length;Lt++){var En=M[Lt];if(En&(C|K))return 1;if(En&(F|b)||Zt&&En===ne)return 0;if(En&i){var to=sc(Lt);Lt=to===-1?se.length:to}}return 0}function sc(Pt){for(var Zt=1,Lt=Pt+1;Lt<se.length;Lt++){var En=M[Lt];if(En&F)break;if(En&ne){if(--Zt===0)return Lt}else En&i&&Zt++}return-1}}var Se="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function oe(){if(!ve){var se=_(Se,!0),Ae=se.map,de=se.reverseMap;de.forEach(function(M,x){Ae.set(x,M)}),ve=Ae}}function Ne(se){return oe(),ve.get(se)||null}function P(se,Ae,de,M){var x=se.length;de=Math.max(0,de==null?0:+de),M=Math.min(x-1,M==null?x-1:+M);for(var O=new Map,Z=de;Z<=M;Z++)if(Ae[Z]&1){var J=Ne(se[Z]);J!==null&&O.set(Z,J)}return O}function Oe(se,Ae,de,M){var x=se.length;de=Math.max(0,de==null?0:+de),M=Math.min(x-1,M==null?x-1:+M);var O=[];return Ae.paragraphs.forEach(function(Z){var J=Math.max(de,Z.start),re=Math.min(M,Z.end);if(J<re){for(var he=Ae.levels.slice(J,re+1),ce=re;ce>=J&&h(se[ce])&c;ce--)he[ce]=Z.level;for(var ge=Z.level,De=1/0,ue=0;ue<he.length;ue++){var Me=he[ue];Me>ge&&(ge=Me),Me<De&&(De=Me|1)}for(var ye=ge;ye>=De;ye--)for(var Te=0;Te<he.length;Te++)if(he[Te]>=ye){for(var le=Te;Te+1<he.length&&he[Te+1]>=ye;)Te++;Te>le&&O.push([le+J,Te+J])}}}),O}function be(se,Ae,de,M){var x=Re(se,Ae,de,M),O=[].concat(se);return x.forEach(function(Z,J){O[J]=(Ae.levels[Z]&1?Ne(se[Z]):null)||se[Z]}),O.join("")}function Re(se,Ae,de,M){for(var x=Oe(se,Ae,de,M),O=[],Z=0;Z<se.length;Z++)O[Z]=Z;return x.forEach(function(J){for(var re=J[0],he=J[1],ce=O.slice(re,he+1),ge=ce.length;ge--;)O[he-ge]=ce[ge]}),O}return e.closingToOpeningBracket=w,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=R,e.getEmbeddingLevels=me,e.getMirroredCharacter=Ne,e.getMirroredCharactersMap=P,e.getReorderSegments=Oe,e.getReorderedIndices=Re,e.getReorderedString=be,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const Jl=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Us(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=qe[n];return i?Us(i):r}return a.replace(e,t)}const Et=[];for(let a=0;a<256;a++)Et[a]=(a<16?"0":"")+a.toString(16);function Mm(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Et[a&255]+Et[a>>8&255]+Et[a>>16&255]+Et[a>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]).toUpperCase()}const zn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Em=Date.now(),el=new WeakMap,tl=new Map;let ym=1e10;function Ds(a,e){const t=wm(e);let r=el.get(a);if(r||el.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=tl[f];if(!h){const d=Tm(this,c,e,t);h=tl[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,zn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Em}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:ym++}),u.uuid=Mm(),u.uniforms=zn({},c.uniforms,e.uniforms),u.defines=zn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=zn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(zn(this.extensions,c.extensions),zn(this.defines,c.defines),zn(this.uniforms,Ol.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ds(a.isDerivedMaterial?a.getDepthMaterial():new Vl({depthPacking:wl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ds(a.isDerivedMaterial?a.getDistanceMaterial():new Hl,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function Tm(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Us(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Us(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,A)=>/\battribute\s+vec[23]\s+$/.test(A.substr(0,p))?m:`troika_${m}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=nl(e,n,i,s,o),t=nl(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function nl(a,e,t,r,n){return(r||n||t)&&(a=a.replace(Jl,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function bm(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Am=0;const il=new Map;function wm(a){const e=JSON.stringify(a,bm);let t=il.get(e);return t==null&&il.set(e,t=++Am),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Rm(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var _=s.readUint(n,i);i+=4,f[d]={offset:g,length:_}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(n,f[m].offset,f[m].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+h,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(n,i);i+=2;var g=s(n,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)n>>>s&1&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(n,i)),i+=2}if(l==2){var h=s.readUshort(n,i);for(i+=2,f=0;f<h;f++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(n,i+2*f));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var d=h[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var A=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,A,_),d.FDArray.push(A)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var y=n[i];if(i++,y!=3)throw y;var S=o.readUshort(n,i);for(i+=2,u=0;u<S+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(n,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(n,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=o.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,i+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+d),i+=h}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),h=3),u==29&&(g=o.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=o.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var m=n[i+h];h++;var p=m>>4,A=15&m;if(p!=15&&_.push(p),A!=15&&_.push(A),A==15)break}for(var y="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],w=0;w<_.length;w++)y+=S[_[w]];g=parseFloat(y)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+h+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var A=o.readUshort(n,g);A==0?p=e.cmap.parse0(n,g):A==4?p=e.cmap.parse4(n,g):A==6?p=e.cmap.parse6(n,g):A==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+A,h,d,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var f=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,f),i+=2*f,i+=2,l.startCount=s.readUshorts(n,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,f),i+=2*f,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=s.readUint(n,u+0),h=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var A=0,y=0;for(u=0;u<h;u++)A+=c.xs[u],y+=c.ys[u],c.xs[u]=A,c.ys[u]=y}else{var S;c.parts=[];do{S=s.readUshort(o,l),l+=2;var w={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(w),w.glyphIndex=s.readUshort(o,l),l+=2,1&S){var R=s.readShort(o,l);l+=2;var b=s.readShort(o,l);l+=2}else R=s.readInt8(o,l),l++,b=s.readInt8(o,l),l++;2&S?(w.m.tx=R,w.m.ty=b):(w.p1=R,w.p2=b),8&S?(w.m.a=w.m.d=s.readF2dot14(o,l),l+=2):64&S?(w.m.a=s.readF2dot14(o,l),l+=2,w.m.d=s.readF2dot14(o,l),l+=2):128&S&&(w.m.a=s.readF2dot14(o,l),l+=2,w.m.b=s.readF2dot14(o,l),l+=2,w.m.c=s.readF2dot14(o,l),l+=2,w.m.d=s.readF2dot14(o,l),l+=2)}while(32&S);if(256&S){var C=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<C;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,s);s+=2;for(var p=0;p<m;p++){var A=c+l.readUshort(n,s);s+=2;var y=l.readUshort(n,A);A+=2;for(var S=[],w=0;w<y;w++){var R=l.readUshort(n,A);A+=2,h!=0&&(U=e.GPOS.readValueRecord(n,A,h),A+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,A,d),A+=2*_),S.push({gid2:R,val1:U,val2:I})}u.pairsets.push(S)}}if(u.fmt==2){var b=l.readUshort(n,s);s+=2;var C=l.readUshort(n,s);s+=2;var E=l.readUshort(n,s);s+=2;var v=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+b),u.classDef2=e._lctf.readClassDef(n,c+C),u.matrix=[],p=0;p<E;p++){var D=[];for(w=0;w<v;w++){var U=null,I=null;h!=0&&(U=e.GPOS.readValueRecord(n,s,h),s+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,s,d),s+=2*_),D.push({val1:U,val2:I})}u.matrix.push(D)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var F=l.readUshort(n,s);s+=2;var V=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);f.markClass=s.readUshort(n,i),o.push(f),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(n,s)+c;s+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,d=0;d<h;d++){var m=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var A=l.readUshort(n,s);for(s+=2,d=0;d<A;d++){var y=l.readUshort(n,s);s+=2,u.scset.push(y==0?null:e.GSUB.readSubClassSet(n,c+y))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,s),s+=2;for(var S=[],w=0;w<h;w++)S.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*w)));s+=2*h,d==0&&(u.backCvg=S),d==1&&(u.inptCvg=S),d==2&&(u.ahedCvg=S)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(i==7&&u.fmt==1){var R=l.readUshort(n,s);s+=2;var b=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=R;else if(o.ltype!=R)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var f=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,f=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,s=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2;var h=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var A=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var S,w=f[p],R=h+12*c+y;if(g==0)S=o.readUnicode(n,R,A/2);else if(g==3&&_==0)S=o.readUnicode(n,R,A/2);else if(_==0)S=o.readASCII(n,R,A);else if(_==1)S=o.readUnicode(n,R,A/2);else if(_==3)S=o.readUnicode(n,R,A/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;S=o.readASCII(n,R,A),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var b="p"+g+","+m.toString(16);l[b]==null&&(l[b]={}),l[b][w!==void 0?w:p]=S,l[b]._lang=m}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){u=C;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],m=n.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(i,_,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+m)/2);h?d&&e.U.P.lineTo(i,_,m):g?e.U.P.qcurveTo(i,_,m,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,_,m,(_+n.xs[f])/2,(m+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(s.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,A=0;A<_;A++){for(;n[i+p+(1+A)]==-1;)p++;g.chain[A]!=n[i+p+(1+A)]&&(m=!1)}if(m){for(n[i]=g.nglyph,A=0;A<_+p;A++)n[i+A+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var y=e._lctf.getInterval(f.cDef,n[i]),S=f.cDef[y+2],w=f.scset[S],R=0;R<w.length;R++){var b=w[R],C=b.input;if(!(C.length>l)){for(m=!0,A=0;A<C.length;A++){var E=e._lctf.getInterval(f.cDef,n[i+1+A]);if(y==-1&&f.cDef[E+2]!=C[A]){m=!1;break}}if(m){var v=b.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var D=f.lookupRec;for(R=0;R<D.length;R+=2){y=D[R];var U=o[D[R+1]];e.U._applySubs(n,i+y,U,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open,g=0,_=i.x,m=i.y,p=0,A=0,y=0,S=0,w=0,R=0,b=0,C=0,E=0,v=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var U=D.val;if(g+=D.size,U=="o1"||U=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(U=="o6"||U=="o7")for(var I=c.length,F=U=="o6",V=0;V<I;V++){var G=c.shift();F?_+=G:m+=G,F=!F,e.U.P.lineTo(l,_,m)}else if(U=="o8"||U=="o24"){I=c.length;for(var Q=0;Q+6<=I;)p=_+c.shift(),A=m+c.shift(),y=p+c.shift(),S=A+c.shift(),_=y+c.shift(),m=S+c.shift(),e.U.P.curveTo(l,p,A,y,S,_,m),Q+=6;U=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(A=m,y=(p=_+c.shift())+c.shift(),v=S=A+c.shift(),R=S,C=m,_=(b=(w=(E=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,A,y,S,E,v),e.U.P.curveTo(l,w,R,b,C,_,m)),U=="o1235"&&(p=_+c.shift(),A=m+c.shift(),y=p+c.shift(),S=A+c.shift(),E=y+c.shift(),v=S+c.shift(),w=E+c.shift(),R=v+c.shift(),b=w+c.shift(),C=R+c.shift(),_=b+c.shift(),m=C+c.shift(),c.shift(),e.U.P.curveTo(l,p,A,y,S,E,v),e.U.P.curveTo(l,w,R,b,C,_,m)),U=="o1236"&&(p=_+c.shift(),A=m+c.shift(),y=p+c.shift(),v=S=A+c.shift(),R=S,b=(w=(E=y+c.shift())+c.shift())+c.shift(),C=R+c.shift(),_=b+c.shift(),e.U.P.curveTo(l,p,A,y,S,E,v),e.U.P.curveTo(l,w,R,b,C,_,m)),U=="o1237"&&(p=_+c.shift(),A=m+c.shift(),y=p+c.shift(),S=A+c.shift(),E=y+c.shift(),v=S+c.shift(),w=E+c.shift(),R=v+c.shift(),b=w+c.shift(),C=R+c.shift(),Math.abs(b-_)>Math.abs(C-m)?_=b+c.shift():m=C+c.shift(),e.U.P.curveTo(l,p,A,y,S,E,v),e.U.P.curveTo(l,w,R,b,C,_,m));else if(U=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var q=c.shift(),K=c.shift(),j=c.shift(),L=c.shift(),W=e.CFF.glyphBySE(s,j),ee=e.CFF.glyphBySE(s,L);e.U._drawCFF(s.CharStrings[W],i,s,o,l),i.x=q,i.y=K,e.U._drawCFF(s.CharStrings[ee],i,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),m+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);p=_+c.shift(),A=m+c.shift(),y=p+c.shift(),S=A+c.shift(),_=y+c.shift(),m=S+c.shift(),e.U.P.curveTo(l,p,A,y,S,_,m)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,A=m+c.shift(),_=y=p+c.shift(),m=(S=A+c.shift())+c.shift(),e.U.P.curveTo(l,p,A,y,S,_,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)A=m,y=(p=_+c.shift())+c.shift(),S=A+c.shift(),_=y+c.shift(),m=S,e.U.P.curveTo(l,p,A,y,S,_,m);else if(U=="o10"||U=="o29"){var N=U=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var B=c.pop(),$=N.Subrs[B+N.Bias];i.x=_,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d,e.U._drawCFF($,i,s,o,l),_=i.x,m=i.y,u=i.nStems,f=i.haveWidth,h=i.width,d=i.open}}else if(U=="o30"||U=="o31"){var H=c.length,ne=(Q=0,U=="o31");for(Q+=H-(I=-3&H);Q<I;)ne?(A=m,y=(p=_+c.shift())+c.shift(),m=(S=A+c.shift())+c.shift(),I-Q==5?(_=y+c.shift(),Q++):_=y,ne=!1):(p=_,A=m+c.shift(),y=p+c.shift(),S=A+c.shift(),_=y+c.shift(),I-Q==5?(m=S+c.shift(),Q++):m=S,ne=!0),e.U.P.curveTo(l,p,A,y,S,_,m),Q+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}i.x=_,i.y=m,i.nStems=u,i.haveWidth=f,i.width=h,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Cm(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(U,I){for(var F=new t(31),V=0;V<31;++V)F[V]=I+=1<<U[V-1];var G=new r(F[30]);for(V=1;V<30;++V)for(var Q=F[V];Q<F[V+1];++Q)G[Q]=Q-F[V]<<5|V;return[F,G]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(i,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,I,F){for(var V=U.length,G=0,Q=new t(I);G<V;++G)++Q[U[G]-1];var q,K=new t(I);for(G=0;G<I;++G)K[G]=K[G-1]+Q[G-1]<<1;{q=new t(1<<I);var j=15-I;for(G=0;G<V;++G)if(U[G])for(var L=G<<4|U[G],W=I-U[G],ee=K[U[G]-1]++<<W,N=ee|(1<<W)-1;ee<=N;++ee)q[h[ee]>>>j]=L}return q},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var A=_(m,9),y=_(p,5),S=function(U){for(var I=U[0],F=1;F<U.length;++F)U[F]>I&&(I=U[F]);return I},w=function(U,I,F){var V=I/8|0;return(U[V]|U[V+1]<<8)>>(7&I)&F},R=function(U,I){var F=I/8|0;return(U[F]|U[F+1]<<8|U[F+2]<<16)>>(7&I)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(U,I,F){var V=new Error(I||b[U]);if(V.code=U,Error.captureStackTrace&&Error.captureStackTrace(V,C),!F)throw V;return V},E=function(U,I,F){var V=U.length;if(!V||F&&!F.l&&V<5)return I||new e(0);var G=!I||F,Q=!F||F.i;F||(F={}),I||(I=new e(3*V));var q,K=function(le){var Pe=I.length;if(le>Pe){var Ie=new e(Math.max(2*Pe,le));Ie.set(I),I=Ie}},j=F.f||0,L=F.p||0,W=F.b||0,ee=F.l,N=F.d,B=F.m,$=F.n,H=8*V;do{if(!ee){F.f=j=w(U,L,1);var ne=w(U,L+1,3);if(L+=3,!ne){var me=U[(de=((q=L)/8|0)+(7&q&&1)+4)-4]|U[de-3]<<8,Se=de+me;if(Se>V){Q&&C(0);break}G&&K(W+me),I.set(U.subarray(de,Se),W),F.b=W+=me,F.p=L=8*Se;continue}if(ne==1)ee=A,N=y,B=9,$=5;else if(ne==2){var ve=w(U,L,31)+257,oe=w(U,L+10,15)+4,Ne=ve+w(U,L+5,31)+1;L+=14;for(var P=new e(Ne),Oe=new e(19),be=0;be<oe;++be)Oe[s[be]]=w(U,L+3*be,7);L+=3*oe;var Re=S(Oe),se=(1<<Re)-1,Ae=_(Oe,Re);for(be=0;be<Ne;){var de,M=Ae[w(U,L,se)];if(L+=15&M,(de=M>>>4)<16)P[be++]=de;else{var x=0,O=0;for(de==16?(O=3+w(U,L,3),L+=2,x=P[be-1]):de==17?(O=3+w(U,L,7),L+=3):de==18&&(O=11+w(U,L,127),L+=7);O--;)P[be++]=x}}var Z=P.subarray(0,ve),J=P.subarray(ve);B=S(Z),$=S(J),ee=_(Z,B),N=_(J,$)}else C(1);if(L>H){Q&&C(0);break}}G&&K(W+131072);for(var re=(1<<B)-1,he=(1<<$)-1,ce=L;;ce=L){var ge=(x=ee[R(U,L)&re])>>>4;if((L+=15&x)>H){Q&&C(0);break}if(x||C(2),ge<256)I[W++]=ge;else{if(ge==256){ce=L,ee=null;break}var De=ge-254;if(ge>264){var ue=n[be=ge-257];De=w(U,L,(1<<ue)-1)+c[be],L+=ue}var Me=N[R(U,L)&he],ye=Me>>>4;if(Me||C(3),L+=15&Me,J=f[ye],ye>3&&(ue=i[ye],J+=R(U,L)&(1<<ue)-1,L+=ue),L>H){Q&&C(0);break}G&&K(W+131072);for(var Te=W+De;W<Te;W+=4)I[W]=I[W-J],I[W+1]=I[W+1-J],I[W+2]=I[W+2-J],I[W+3]=I[W+3-J];W=Te}}F.l=ee,F.p=ce,F.b=W,ee&&(j=1,F.m=B,F.d=N,F.n=$)}while(!j);return W==I.length?I:function(le,Pe,Ie){(Ie==null||Ie>le.length)&&(Ie=le.length);var Ye=new(le instanceof t?t:le instanceof r?r:e)(Ie-Pe);return Ye.set(le.subarray(Pe,Ie)),Ye}(I,0,W)},v=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(v,{stream:!0})}catch{}return a.convert_streams=function(U){var I=new DataView(U),F=0;function V(){var ve=I.getUint16(F);return F+=2,ve}function G(){var ve=I.getUint32(F);return F+=4,ve}function Q(ve){me.setUint16(Se,ve),Se+=2}function q(ve){me.setUint32(Se,ve),Se+=4}for(var K={signature:G(),flavor:G(),length:G(),numTables:V(),reserved:V(),totalSfntSize:G(),majorVersion:V(),minorVersion:V(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},j=0;Math.pow(2,j)<=K.numTables;)j++;j--;for(var L=16*Math.pow(2,j),W=16*K.numTables-L,ee=12,N=[],B=0;B<K.numTables;B++)N.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),ee+=16;var $,H=new Uint8Array(12+16*N.length+N.reduce(function(ve,oe){return ve+oe.origLength+4},0)),ne=H.buffer,me=new DataView(ne),Se=0;return q(K.flavor),Q(K.numTables),Q(L),Q(j),Q(W),N.forEach(function(ve){q(ve.tag),q(ve.origChecksum),q(ee),q(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)}),N.forEach(function(ve){var oe,Ne=U.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var P=new Uint8Array(ve.origLength);oe=new Uint8Array(Ne,2),E(oe,P)}else P=new Uint8Array(Ne);H.set(P,ve.outOffset);var Oe=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(Oe=4-ee%4),H.set(new Uint8Array(Oe).buffer,ve.outOffset+ve.origLength),$=ee+Oe}),ne.slice(0,$)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Um(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function f(b){if(!u){const C={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let E in r){let v=0;r[E].split(",").forEach(D=>{let[U,I]=D.split("+");U=parseInt(U,36),I=I?parseInt(I,36):0,u.set(v+=U,C[E]);for(let F=I;F--;)u.set(++v,C[E])})}}return u.get(b)||c}const h=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(b){const C=new Uint8Array(b.length);let E=c,v=h,D=-1;for(let U=0;U<b.length;U++){const I=b.codePointAt(U);let F=f(I)|0,V=h;F&o||(E&(n|s|l)?F&(i|s|l)?(V=g,(v===h||v===g)&&C[D]++):F&(n|c)&&(v===d||v===_)&&C[D]--:E&(i|c)&&(v===d||v===_)&&C[D]--,v=C[U]=V,E=F,D=U,I>65535&&U++)}return C}function A(b,C){const E=[];for(let D=0;D<C.length;D++){const U=C.codePointAt(D);U>65535&&D++,E.push(a.U.codeToGlyph(b,U))}const v=b.GSUB;if(v){const{lookupList:D,featureList:U}=v;let I;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];U.forEach(G=>{if(F.test(G.tag))for(let Q=0;Q<G.tab.length;Q++){if(V[G.tab[Q]])continue;V[G.tab[Q]]=!0;const q=D[G.tab[Q]],K=/^(isol|init|fina|medi)$/.test(G.tag);K&&!I&&(I=p(C));for(let j=0;j<E.length;j++)(!I||!K||m[I[j]]===G.tag)&&a.U._applySubs(E,j,q,D)}})}return E}function y(b,C){const E=new Int16Array(C.length*3);let v=0;for(;v<C.length;v++){const F=C[v];if(F===-1)continue;E[v*3+2]=b.hmtx.aWidth[F];const V=b.GPOS;if(V){const G=V.lookupList;for(let Q=0;Q<G.length;Q++){const q=G[Q];for(let K=0;K<q.tabs.length;K++){const j=q.tabs[K];if(q.ltype===1){if(a._lctf.coverageIndex(j.coverage,F)!==-1&&j.pos){I(j.pos,v);break}}else if(q.ltype===2){let L=null,W=D();if(W!==-1){const ee=a._lctf.coverageIndex(j.coverage,C[W]);if(ee!==-1){if(j.fmt===1){const N=j.pairsets[ee];for(let B=0;B<N.length;B++)N[B].gid2===F&&(L=N[B])}else if(j.fmt===2){const N=a.U._getGlyphClass(C[W],j.classDef1),B=a.U._getGlyphClass(F,j.classDef2);L=j.matrix[N][B]}if(L){L.val1&&I(L.val1,W),L.val2&&I(L.val2,v);break}}}}else if(q.ltype===4){const L=a._lctf.coverageIndex(j.markCoverage,F);if(L!==-1){const W=D(U),ee=W===-1?-1:a._lctf.coverageIndex(j.baseCoverage,C[W]);if(ee!==-1){const N=j.markArray[L],B=j.baseArray[ee][N.markClass];E[v*3]=B.x-N.x+E[W*3]-E[W*3+2],E[v*3+1]=B.y-N.y+E[W*3+1];break}}}else if(q.ltype===6){const L=a._lctf.coverageIndex(j.mark1Coverage,F);if(L!==-1){const W=D();if(W!==-1){const ee=C[W];if(S(b,ee)===3){const N=a._lctf.coverageIndex(j.mark2Coverage,ee);if(N!==-1){const B=j.mark1Array[L],$=j.mark2Array[N][B.markClass];E[v*3]=$.x-B.x+E[W*3]-E[W*3+2],E[v*3+1]=$.y-B.y+E[W*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const G=D();if(G!==-1){const Q=b.kern.glyph1.indexOf(C[G]);if(Q!==-1){const q=b.kern.rval[Q].glyph2.indexOf(F);q!==-1&&(E[G*3+2]+=b.kern.rval[Q].vals[q])}}}}return E;function D(F){for(let V=v-1;V>=0;V--)if(C[V]!==-1&&(!F||F(C[V])))return V;return-1}function U(F){return S(b,F)===1}function I(F,V){for(let G=0;G<3;G++)E[V*3+G]+=F[G]||0}}function S(b,C){const E=b.GDEF&&b.GDEF.glyphClassDef;return E?a.U._getGlyphClass(C,E):0}function w(...b){for(let C=0;C<b.length;C++)if(typeof b[C]=="number")return b[C]}function R(b){const C=Object.create(null),E=b["OS/2"],v=b.hhea,D=b.head.unitsPerEm,U=w(E&&E.sTypoAscender,v&&v.ascender,D),I={unitsPerEm:D,ascender:U,descender:w(E&&E.sTypoDescender,v&&v.descender,0),capHeight:w(E&&E.sCapHeight,U),xHeight:w(E&&E.sxHeight,U),lineGap:w(E&&E.sTypoLineGap,v&&v.lineGap),supportsCodePoint(F){return a.U.codeToGlyph(b,F)>0},forEachGlyph(F,V,G,Q){let q=0;const K=1/I.unitsPerEm*V,j=A(b,F);let L=0;const W=y(b,j);return j.forEach((ee,N)=>{if(ee!==-1){let B=C[ee];if(!B){const{cmds:$,crds:H}=a.U.glyphToPath(b,ee);let ne="",me=0;for(let P=0,Oe=$.length;P<Oe;P++){const be=t[$[P]];ne+=$[P];for(let Re=1;Re<=be;Re++)ne+=(Re>1?",":"")+H[me++]}let Se,ve,oe,Ne;if(H.length){Se=ve=1/0,oe=Ne=-1/0;for(let P=0,Oe=H.length;P<Oe;P+=2){let be=H[P],Re=H[P+1];be<Se&&(Se=be),Re<ve&&(ve=Re),be>oe&&(oe=be),Re>Ne&&(Ne=Re)}}else Se=oe=ve=Ne=0;B=C[ee]={index:ee,advanceWidth:b.hmtx.aWidth[ee],xMin:Se,yMin:ve,xMax:oe,yMax:Ne,path:ne}}Q.call(null,B,q+W[N*3]*K,W[N*3+1]*K,L),q+=W[N*3+2]*K,G&&(q+=G*V)}L+=F.codePointAt(L)>65535?2:1}),q}};return I}return function(C){const E=new Uint8Array(C,0,4),v=a._bin.readASCII(E,0,4);if(v==="wOFF")C=e(C);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return R(a.parse(C)[0])}}const Dm=Fi({name:"Typr Font Parser",dependencies:[Rm,Cm,Um],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function Pm(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var S=y>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&y))},e.prototype.has=function(y){var S=this.buckets.get(y>>5);return S!==void 0&&(S&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(S,w){y.push((+w).toString(36)+":"+S.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var S=this;this.buckets.clear(),y.split(",").forEach(function(w){var R=w.split(":");S.buckets.set(parseInt(R[0],36),parseInt(R[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(y){var S=function(R){return R&n}(y).toString(16),w=function(R){return(R&n)+t-1}(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+S+"-"+w+".json"}function s(y,S){var w=y&r,R=S.codePointAt(w/6|0);return((R=(R||48)-48)&1<<w%6)!=0}function o(y,S){var w;(w=y,w.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(R){return R.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(R){var b=R[0],C=R[1];C===void 0&&(C=b),S(b,C)})}function l(y,S){o(y,function(w,R){for(var b=w;b<=R;b++)S(b)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(y){var S=f.get(y);return S||(S=new e,l(y.ranges,function(w){return S.add(w)}),f.set(y,S)),S}var g,_=new Map;function m(y,S,w){return y[S]?S:y[w]?w:function(R){for(var b in R)return b}(y)}function p(y,S){var w=S;if(!y.includes(w)){w=1/0;for(var R=0;R<y.length;R++)Math.abs(y[R]-S)<Math.abs(w-S)&&(w=y[R])}return w}function A(y){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(S){g.add(S)})),g.has(y)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(y,S){S===void 0&&(S={});var w,R=S.lang;R===void 0&&(R=new RegExp("\\p{Script=Hangul}","u").test(w=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(w)?"ja":"en");var b=S.category;b===void 0&&(b="sans-serif");var C=S.style;C===void 0&&(C="normal");var E=S.weight;E===void 0&&(E=400);var v=(S.dataUrl||h).replace(/\/$/g,""),D=new Map,U=new Uint8Array(y.length),I={},F={},V=new Array(y.length),G=new Map,Q=!1;function q(L){var W=_.get(L);return W||(W=fetch(v+"/"+L).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(ee){if(v!==h)return Q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+ee.message),Q=!0),v=h,_.delete(L),q(L);throw ee}),_.set(L,W)),W}for(var K=function(L){var W=y.codePointAt(L),ee=i(W);V[L]=ee,c[ee]||G.has(ee)||G.set(ee,q(ee).then(function(N){c[ee]=N})),W>65535&&(L++,j=L)},j=0;j<y.length;j++)K(j);return Promise.all(G.values()).then(function(){G.clear();for(var L=function(ee){var N=y.codePointAt(ee),B=null,$=c[V[ee]],H=void 0;for(var ne in $){var me=F[ne];if(me===void 0&&(me=F[ne]=new RegExp(ne).test(R||"en")),me){for(var Se in H=ne,$[ne])if(s(N,$[ne][Se])){B=Se;break}break}}if(!B){e:for(var ve in $)if(ve!==H){for(var oe in $[ve])if(s(N,$[ve][oe])){B=oe;break e}}}B||(console.debug("No font coverage for U+"+N.toString(16)),B="latin"),V[ee]=B,u[B]||G.has(B)||G.set(B,q("font-meta/"+B+".json").then(function(Ne){u[B]=Ne})),N>65535&&(ee++,W=ee)},W=0;W<y.length;W++)L(W);return Promise.all(G.values())}).then(function(){for(var L,W=null,ee=0;ee<y.length;ee++){var N=y.codePointAt(ee);if(W&&(A(N)||d(W).has(N)))U[ee]=U[ee-1];else{W=u[V[ee]];var B=I[W.id];if(!B){var $=W.typeforms,H=m($,b,"sans-serif"),ne=m($[H],C,"normal"),me=p((L=$[H])===null||L===void 0?void 0:L[ne],E);B=I[W.id]=v+"/font-files/"+W.id+"/"+H+"."+ne+"."+me+".woff"}var Se=D.get(B);Se==null&&(Se=D.size,D.set(B,Se)),U[ee]=Se}N>65535&&(ee++,U[ee]=U[ee-1])}return{fontUrls:Array.from(D.keys()),chars:U}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function Lm(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(u=>u(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),g=[];s.length||A();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(S=>!S.lang||S.lang.test(l)).reverse(),c.length){let b=0;(function C(E=0){for(let v=E,D=s.length;v<D;v++){const U=s.codePointAt(v);if(b===1&&g[d[v-1]].supportsCodePoint(U)||v>0&&/\s/.test(s[v]))d[v]=d[v-1],b===2&&(m[m.length-1][1]=v);else for(let I=d[v],F=c.length;I<=F;I++)if(I===F){const V=b===2?m[m.length-1]:m[m.length]=[v,v];V[1]=v,b=2}else{d[v]=I;const{src:V,unicodeRange:G}=c[I];if(!G||y(U,G)){const Q=t[V];if(!Q){i(V,()=>{C(v)});return}if(Q.supportsCodePoint(U)){let q=_.get(Q);typeof q!="number"&&(q=g.length,g.push(Q),_.set(Q,q)),d[v]=q,b=1;break}}}U>65535&&v+1<D&&(d[v+1]=d[v],v++,b===2&&(m[m.length-1][1]=v))}p()})()}else m.push([0,s.length-1]),p();function p(){if(m.length){const S=m.map(w=>s.substring(w[0],w[1]+1)).join(`
`);e.getFontsForString(S,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:w,chars:R})=>{const b=g.length;let C=0;m.forEach(v=>{for(let D=0,U=v[1]-v[0];D<=U;D++)d[v[0]+D]=R[C++]+b;C++});let E=0;w.forEach((v,D)=>{i(v,U=>{g[D+b]=U,++E===w.length&&A()})})})}else A()}function A(){o({chars:d,fonts:g})}function y(S,w){for(let R=0;R<w.length;R++){const[b,C=b]=w[R];if(b<=S&&S<=C)return!0}return!1}}}const Im=Fi({name:"FontResolver",dependencies:[Lm,Dm,Pm],init(a,e,t){return a(e,t())}});function Fm(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:_,fonts:m,style:p,weight:A,preResolvedFonts:y,unicodeFontsURL:S},w){const R=({chars:b,fonts:C})=>{let E,v;const D=[];for(let U=0;U<b.length;U++)b[U]!==v?(v=b[U],D.push(E={start:U,end:U,fontObj:C[b[U]]})):E.end=U;w(D)};y?R(y):a(g,R,{lang:_,fonts:m,style:p,weight:A,unicodeFontsURL:S})}function o({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:A=400,fontWeight:y=1,fontStyle:S="normal",letterSpacing:w=0,lineHeight:R="normal",maxWidth:b=1/0,direction:C,textAlign:E="left",textIndent:v=0,whiteSpace:D="normal",overflowWrap:U="normal",anchorX:I=0,anchorY:F=0,metricsOnly:V=!1,unicodeFontsURL:G,preResolvedFonts:Q=null,includeCaretPositions:q=!1,chunkedBoundsSize:K=8192,colorRanges:j=null},L){const W=f(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),A=+A,w=+w,b=+b,R=R||"normal",v=+v,s({text:g,lang:m,style:S,weight:y,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:G,preResolvedFonts:Q},N=>{ee.fontLoad=f()-W;const B=isFinite(b);let $=null,H=null,ne=null,me=null,Se=null,ve=null,oe=null,Ne=null,P=0,Oe=0,be=D!=="nowrap";const Re=new Map,se=f();let Ae=v,de=0,M=new h;const x=[M];N.forEach(he=>{const{fontObj:ce}=he,{ascender:ge,descender:De,unitsPerEm:ue,lineGap:Me,capHeight:ye,xHeight:Te}=ce;let le=Re.get(ce);if(!le){const fe=A/ue,te=R==="normal"?(ge-De+Me)*fe:R*A,pe=(te-(ge-De)*fe)/2,xe=Math.min(te,(ge-De)*fe),_e=(ge+De)/2*fe+xe/2;le={index:Re.size,src:ce.src,fontObj:ce,fontSizeMult:fe,unitsPerEm:ue,ascender:ge*fe,descender:De*fe,capHeight:ye*fe,xHeight:Te*fe,lineHeight:te,baseline:-pe-ge*fe,caretTop:_e,caretBottom:_e-xe},Re.set(ce,le)}const{fontSizeMult:Pe}=le,Ie=g.slice(he.start,he.end+1);let Ye,k;ce.forEachGlyph(Ie,A,w,(fe,te,pe,xe)=>{te+=de,xe+=he.start,Ye=te,k=fe;const _e=g.charAt(xe),Fe=fe.advanceWidth*Pe,We=M.count;let Be;if("isEmpty"in fe||(fe.isWhitespace=!!_e&&new RegExp(n).test(_e),fe.canBreakAfter=!!_e&&i.test(_e),fe.isEmpty=fe.xMin===fe.xMax||fe.yMin===fe.yMax||r.test(_e)),!fe.isWhitespace&&!fe.isEmpty&&Oe++,be&&B&&!fe.isWhitespace&&te+Fe+Ae>b&&We){if(M.glyphAt(We-1).glyphObj.canBreakAfter)Be=new h,Ae=-te;else for(let it=We;it--;)if(it===0&&U==="break-word"){Be=new h,Ae=-te;break}else if(M.glyphAt(it).glyphObj.canBreakAfter){Be=M.splitAt(it+1);const rt=Be.glyphAt(0).x;Ae-=rt;for(let ct=Be.count;ct--;)Be.glyphAt(ct).x-=rt;break}Be&&(M.isSoftWrapped=!0,M=Be,x.push(M),P=b)}let ze=M.glyphAt(M.count);ze.glyphObj=fe,ze.x=te+Ae,ze.y=pe,ze.width=Fe,ze.charIndex=xe,ze.fontData=le,_e===`
`&&(M=new h,x.push(M),Ae=-(te+Fe+w*A)+v)}),de=Ye+k.advanceWidth*Pe+w*A});let O=0;x.forEach(he=>{let ce=!0;for(let ge=he.count;ge--;){const De=he.glyphAt(ge);ce&&!De.glyphObj.isWhitespace&&(he.width=De.x+De.width,he.width>P&&(P=he.width),ce=!1);let{lineHeight:ue,capHeight:Me,xHeight:ye,baseline:Te}=De.fontData;ue>he.lineHeight&&(he.lineHeight=ue);const le=Te-he.baseline;le<0&&(he.baseline+=le,he.cap+=le,he.ex+=le),he.cap=Math.max(he.cap,he.baseline+Me),he.ex=Math.max(he.ex,he.baseline+ye)}he.baseline-=O,he.cap-=O,he.ex-=O,O+=he.lineHeight});let Z=0,J=0;if(I&&(typeof I=="number"?Z=-I:typeof I=="string"&&(Z=-P*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),F&&(typeof F=="number"?J=-F:typeof F=="string"&&(J=F==="top"?0:F==="top-baseline"?-x[0].baseline:F==="top-cap"?-x[0].cap:F==="top-ex"?-x[0].ex:F==="middle"?O/2:F==="bottom"?O:F==="bottom-baseline"?-x[x.length-1].baseline:c(F)*O)),!V){const he=e.getEmbeddingLevels(g,C);$=new Uint16Array(Oe),H=new Uint8Array(Oe),ne=new Float32Array(Oe*2),me={},oe=[1/0,1/0,-1/0,-1/0],Ne=[],q&&(ve=new Float32Array(g.length*4)),j&&(Se=new Uint8Array(Oe*3));let ce=0,ge=-1,De=-1,ue,Me;if(x.forEach((ye,Te)=>{let{count:le,width:Pe}=ye;if(le>0){let Ie=0;for(let xe=le;xe--&&ye.glyphAt(xe).glyphObj.isWhitespace;)Ie++;let Ye=0,k=0;if(E==="center")Ye=(P-Pe)/2;else if(E==="right")Ye=P-Pe;else if(E==="justify"&&ye.isSoftWrapped){let xe=0;for(let _e=le-Ie;_e--;)ye.glyphAt(_e).glyphObj.isWhitespace&&xe++;k=(P-Pe)/xe}if(k||Ye){let xe=0;for(let _e=0;_e<le;_e++){let Fe=ye.glyphAt(_e);const We=Fe.glyphObj;Fe.x+=Ye+xe,k!==0&&We.isWhitespace&&_e<le-Ie&&(xe+=k,Fe.width+=k)}}const fe=e.getReorderSegments(g,he,ye.glyphAt(0).charIndex,ye.glyphAt(ye.count-1).charIndex);for(let xe=0;xe<fe.length;xe++){const[_e,Fe]=fe[xe];let We=1/0,Be=-1/0;for(let ze=0;ze<le;ze++)if(ye.glyphAt(ze).charIndex>=_e){let it=ze,rt=ze;for(;rt<le;rt++){let ct=ye.glyphAt(rt);if(ct.charIndex>Fe)break;rt<le-Ie&&(We=Math.min(We,ct.x),Be=Math.max(Be,ct.x+ct.width))}for(let ct=it;ct<rt;ct++){const Ut=ye.glyphAt(ct);Ut.x=Be-(Ut.x+Ut.width-We)}break}}let te;const pe=xe=>te=xe;for(let xe=0;xe<le;xe++){const _e=ye.glyphAt(xe);te=_e.glyphObj;const Fe=te.index,We=he.levels[_e.charIndex]&1;if(We){const Be=e.getMirroredCharacter(g[_e.charIndex]);Be&&_e.fontData.fontObj.forEachGlyph(Be,0,0,pe)}if(q){const{charIndex:Be,fontData:ze}=_e,it=_e.x+Z,rt=_e.x+_e.width+Z;ve[Be*4]=We?rt:it,ve[Be*4+1]=We?it:rt,ve[Be*4+2]=ye.baseline+ze.caretBottom+J,ve[Be*4+3]=ye.baseline+ze.caretTop+J;const ct=Be-ge;ct>1&&u(ve,ge,ct),ge=Be}if(j){const{charIndex:Be}=_e;for(;Be>De;)De++,j.hasOwnProperty(De)&&(Me=j[De])}if(!te.isWhitespace&&!te.isEmpty){const Be=ce++,{fontSizeMult:ze,src:it,index:rt}=_e.fontData,ct=me[it]||(me[it]={});ct[Fe]||(ct[Fe]={path:te.path,pathBounds:[te.xMin,te.yMin,te.xMax,te.yMax]});const Ut=_e.x+Z,yt=_e.y+ye.baseline+J;ne[Be*2]=Ut,ne[Be*2+1]=yt;const Ot=Ut+te.xMin*ze,qt=yt+te.yMin*ze,an=Ut+te.xMax*ze,Dt=yt+te.yMax*ze;Ot<oe[0]&&(oe[0]=Ot),qt<oe[1]&&(oe[1]=qt),an>oe[2]&&(oe[2]=an),Dt>oe[3]&&(oe[3]=Dt),Be%K===0&&(ue={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},Ne.push(ue)),ue.end++;const gt=ue.rect;if(Ot<gt[0]&&(gt[0]=Ot),qt<gt[1]&&(gt[1]=qt),an>gt[2]&&(gt[2]=an),Dt>gt[3]&&(gt[3]=Dt),$[Be]=Fe,H[Be]=rt,j){const Vt=Be*3;Se[Vt]=Me>>16&255,Se[Vt+1]=Me>>8&255,Se[Vt+2]=Me&255}}}}}),ve){const ye=g.length-ge;ye>1&&u(ve,ge,ye)}}const re=[];Re.forEach(({index:he,src:ce,unitsPerEm:ge,ascender:De,descender:ue,lineHeight:Me,capHeight:ye,xHeight:Te})=>{re[he]={src:ce,unitsPerEm:ge,ascender:De,descender:ue,lineHeight:Me,capHeight:ye,xHeight:Te}}),ee.typesetting=f()-se,L({glyphIds:$,glyphFontIndices:H,glyphPositions:ne,glyphData:me,fontData:re,caretPositions:ve,glyphColors:Se,chunkedBounds:Ne,fontSize:A,topBaseline:J+x[0].baseline,blockBounds:[Z,J-O,Z+P,J],visibleBounds:oe,timings:ee})})}function l(g,_){o({...g,metricsOnly:!0},m=>{const[p,A,y,S]=m.blockBounds;_({width:y-p,height:S-A})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const p=g[_*4],A=g[_*4+1],y=g[_*4+2],S=g[_*4+3],w=(A-p)/m;for(let R=0;R<m;R++){const b=(_+R)*4;g[b]=p+w*R,g[b+1]=p+w*(R+1),g[b+2]=y,g[b+3]=S}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(A){this.data[this.index*d.length+m]=A}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Kn=()=>(self.performance||Date).now(),Jr=Zl();let rl;function Nm(a,e,t,r,n,i,s,o,l,c,u=!0){return u?Bm(a,e,t,r,n,i,s,o,l,c).then(null,f=>(rl||(console.warn("WebGL SDF generation failed, falling back to JS",f),rl=!0),sl(a,e,t,r,n,i,s,o,l,c))):sl(a,e,t,r,n,i,s,o,l,c)}const Vr=[],Om=5;let Ps=0;function Ql(){const a=Kn();for(;Vr.length&&Kn()-a<Om;)Vr.shift()();Ps=Vr.length?setTimeout(Ql,0):0}const Bm=(...a)=>new Promise((e,t)=>{Vr.push(()=>{const r=Kn();try{Jr.webgl.generateIntoCanvas(...a),e({timing:Kn()-r})}catch(n){t(n)}}),Ps||(Ps=setTimeout(Ql,0))}),km=4,Gm=2e3,al={};let zm=0;function sl(a,e,t,r,n,i,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+zm++%km;let f=al[u];return f||(f=al[u]={workerModule:Fi({name:u,workerId:u,dependencies:[Zl,Kn],init(h,d){const g=h().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:d})=>{const g=Kn(),_=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)_[m*4+c]=h[m];return Jr.webglUtils.renderImageData(s,_,o,l,a,e,1<<3-c),d+=Kn()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{vm(u)},Gm)),{timing:d}})}function Vm(a){a._warm||(Jr.webgl.isSupported(a),a._warm=!0)}const Hm=Jr.webglUtils.resizeWebGLCanvasWithoutClearing,Si={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},Wm=new $e;function vi(){return(self.performance||Date).now()}const ol=Object.create(null);function Xm(a,e){a=qm({},a);const t=vi(),{defaultFontURL:r}=Si,n=[];if(r&&n.push({label:"default",src:ll(r)}),a.font&&n.push({label:"user",src:ll(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Si.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Si.unicodeFontsURL,a.colorRanges!=null){let d={};for(let g in a.colorRanges)if(a.colorRanges.hasOwnProperty(g)){let _=a.colorRanges[g];typeof _!="number"&&(_=Wm.set(_).getHex()),d[g]=_}a.colorRanges=d}Object.freeze(a);const{textureWidth:i,sdfExponent:s}=Si,{sdfGlyphSize:o}=a,l=i/o*4;let c=ol[o];if(!c){const d=document.createElement("canvas");d.width=i,d.height=o*256/l,c=ol[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:d,sdfTexture:new Ct(d,void 0,void 0,void 0,Yt,Yt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,Ym(c)}const{sdfTexture:u,sdfCanvas:f}=c;tc(a).then(d=>{const{glyphIds:g,glyphFontIndices:_,fontData:m,glyphPositions:p,fontSize:A,timings:y}=d,S=[],w=new Float32Array(g.length*4);let R=0,b=0;const C=vi(),E=m.map(F=>{let V=c.glyphsByFont.get(F.src);return V||c.glyphsByFont.set(F.src,V=new Map),V});g.forEach((F,V)=>{const G=_[V],{src:Q,unitsPerEm:q}=m[G];let K=E[G].get(F);if(!K){const{path:N,pathBounds:B}=d.glyphData[Q][F],$=Math.max(B[2]-B[0],B[3]-B[1])/o*(Si.sdfMargin*o+.5),H=c.glyphCount++,ne=[B[0]-$,B[1]-$,B[2]+$,B[3]+$];E[G].set(F,K={path:N,atlasIndex:H,sdfViewBox:ne}),S.push(K)}const{sdfViewBox:j}=K,L=p[b++],W=p[b++],ee=A/q;w[R++]=L+j[0]*ee,w[R++]=W+j[1]*ee,w[R++]=L+j[2]*ee,w[R++]=W+j[3]*ee,g[V]=K.atlasIndex}),y.quads=(y.quads||0)+(vi()-C);const v=vi();y.sdf={};const D=f.height,U=Math.ceil(c.glyphCount/l),I=Math.pow(2,Math.ceil(Math.log2(U*o)));I>D&&(console.info(`Increasing SDF texture size ${D}->${I}`),Hm(f,i,I),u.dispose()),Promise.all(S.map(F=>$l(F,c,a.gpuAccelerateSDF).then(({timing:V})=>{y.sdf[F.atlasIndex]=V}))).then(()=>{S.length&&!c.contextLost&&(ec(c),u.needsUpdate=!0),y.sdfTotal=vi()-v,y.total=vi()-t,e(Object.freeze({parameters:a,sdfTexture:u,sdfGlyphSize:o,sdfExponent:s,glyphBounds:w,glyphAtlasIndices:g,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||Vm(f)})}function $l({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Si,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/r)*r,h=Math.floor(u/(o/r))*r,d=e%4;return Nm(r,r,a,t,c,l,n,f,h,d,s)}function Ym(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push($l(i,a,!0))})}),Promise.all(r).then(()=>{ec(a),a.sdfTexture.needsUpdate=!0})})}function qm(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Lr;function ll(a){return Lr||(Lr=typeof document>"u"?{}:document.createElement("a")),Lr.href=a,Lr.href}function ec(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const jm=Fi({name:"Typesetter",dependencies:[Fm,Im,Sm],init(a,e,t){return a(e,t())}}),tc=Fi({name:"Typesetter",dependencies:[jm],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});tc.onMainThread;const cl={};function Km(a){let e=cl[a];return e||(e=cl[a]=new $n(1,1,a,a).translate(.5,.5,0)),e}const Zm="aTroikaGlyphBounds",ul="aTroikaGlyphIndex",Jm="aTroikaGlyphColor";class Qm extends Ru{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new qr,this.boundingBox=new Qn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Km(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(Zm,e,4),this.updateAttributeData(ul,t,1),this.updateAttributeData(Jm,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,_=i((d+u)/f)!==i((g+u)/f)?-h:s(l(d)*h,l(g)*h),m=i((d-u)/f)!==i((g-u)/f)?h:o(l(d)*h,l(g)*h),p=i((d+n)/f)!==i((g+n)/f)?h*2:o(h-c(d)*h,h-c(g)*h);r.min.set(_,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(ul).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Eu(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const $m=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,eg=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,tg=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,ng=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ig(a){const e=Ds(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new tt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new lt(0,0,0,0)},uTroikaClipRect:{value:new lt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new tt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new $e},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Xe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:$m,vertexTransform:eg,fragmentDefs:tg,fragmentColorTransform:ng,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Jl,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const zs=new Kr({color:16777215,side:ln,transparent:!0}),fl=8421504,hl=new ft,Ir=new ae,Ga=new ae,Zi=[],rg=new ae,za="+x+y";function dl(a){return Array.isArray(a)?a[0]:a}let nc=()=>{const a=new zt(new $n(1,1),zs);return nc=()=>a,a},ic=()=>{const a=new zt(new $n(1,1,32,1),zs);return ic=()=>a,a};const ag={type:"syncstart"},sg={type:"synccomplete"},rc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],og=rc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Qi extends zt{constructor(){const e=new Qm;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=fl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=za,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(ag),Xm({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(sg),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return ig(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=zs.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return dl(this.material).getDepthMaterial()}get customDistanceMaterial(){return dl(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,_=0,m=0;if(t){let{outlineWidth:A,outlineOffsetX:y,outlineOffsetY:S,outlineBlur:w,outlineOpacity:R}=this;c=this._parsePercent(A)||0,u=Math.max(0,this._parsePercent(w)||0),h=R,_=this._parsePercent(y)||0,m=this._parsePercent(S)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??fl),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(_,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const A=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-A,l[1]-A,l[2]+A,l[3]+A)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new $e;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||za;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==za&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Ir.set(0,0,0)[u]=c==="-"?1:-1,Ga.set(0,0,0)[h]=f==="-"?-1:1,hl.lookAt(rg,Ir.cross(Ga),Ga),o.setFromMatrix4(hl)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new tt){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new tt){return Ir.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ir),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?ic():nc(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Zi.length=0,s.raycast(e,Zi);for(let u=0;u<Zi.length;u++)Zi[u].object=this,t.push(Zi[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,og.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}rc.forEach(a=>{const e="_private_"+a;Object.defineProperty(Qi.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Qn;new $e;if(no.isWebGL2Available()){let f=function(){s.rotation.x+=.01,r.render(a,e)};var lg=f;const a=new Mu,e=new Xt(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,0,100),e.lookAt(0,0,0);const t=new wu(13421772,1.5);a.add(t);const r=new dm;r.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r.domElement);const n=new Li(100,20,20),i=new Kr({color:65280}),s=new zt(n,i);a.add(s),s.position.x=0,s.position.y=0,s.position.z=0;const o=new Qi,l=new Qi,c=new Qi,u=new Qi;s.add(o),s.add(l),s.add(c),s.add(u),o.font="./public/Catfont-Regular.ttf.otf",o.text="tinbug.cool",o.fontSize=20,o.position.x=-45,o.position.y=7,o.position.z=11,o.color=68,l.font="./public/Catfont-Regular.ttf.otf",l.text="tinbug.cool",l.fontSize=20,l.rotation.x=1.6,l.position.x=-45,l.position.y=-16,l.position.z=9,l.color=4456448,c.font="./public/Catfont-Regular.ttf.otf",c.text="tinbug.cool",c.fontSize=20,c.rotation.x=3.2,c.position.x=-45,c.position.y=-8,c.position.z=-11.1,c.color=17408,u.font="./public/Catfont-Regular.ttf.otf",u.text="tinbug.cool",u.fontSize=20,u.rotation.x=4.8,u.position.x=-45,u.position.y=17,u.position.z=-9,u.color=2228258,o.sync(),r.setAnimationLoop(f)}else{const a=no.getWebGL2ErrorMessage();document.getElementById("container").appendChild(a)}
