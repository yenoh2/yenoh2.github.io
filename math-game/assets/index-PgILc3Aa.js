(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="170",Id=0,pc=1,Nd=2,nu=1,Od=2,Wn=3,mi=0,$e=1,vn=2,ci=0,Ms=1,Ui=2,mc=3,Ua=4,Fd=5,Li=100,Bd=101,zd=102,Hd=103,Gd=104,Vd=200,Wd=201,Xd=202,qd=203,Ia=204,Na=205,Kd=206,$d=207,Yd=208,jd=209,Zd=210,Jd=211,Qd=212,tf=213,ef=214,Oa=0,Fa=1,Ba=2,As=3,za=4,Ha=5,Ga=6,Va=7,iu=0,nf=1,sf=2,hi=0,rf=1,of=2,af=3,lf=4,cf=5,hf=6,uf=7,su=300,Rs=301,Cs=302,Wa=303,Xa=304,Ao=306,sr=1e3,Ii=1001,qa=1002,Ae=1003,df=1004,mr=1005,kn=1006,zo=1007,Ni=1008,Yn=1009,ru=1010,ou=1011,rr=1012,Ll=1013,Wi=1014,Ln=1015,hr=1016,Dl=1017,Ul=1018,Ps=1020,au=35902,lu=1021,cu=1022,on=1023,hu=1024,uu=1025,Ss=1026,ks=1027,Il=1028,Nl=1029,du=1030,Ol=1031,Fl=1033,no=33776,io=33777,so=33778,ro=33779,Ka=35840,$a=35841,Ya=35842,ja=35843,Za=36196,Ja=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,oo=36492,pl=36494,ml=36495,fu=36283,gl=36284,vl=36285,_l=36286,ff=3200,pf=3201,mf=0,gf=1,Cn="",Fe="srgb",Ds="srgb-linear",Ro="linear",ue="srgb",ji=7680,gc=519,vf=512,_f=513,yf=514,pu=515,xf=516,Mf=517,Sf=518,wf=519,yl=35044,bf=35048,vc="300 es",qn=2e3,po=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,xl=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Ef(i,t){return(i%t+t)%t}function Ho(i,t,e){return(1-e)*i+e*t}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],M=s[1],b=s[4],x=s[7],L=s[2],A=s[5],R=s[8];return r[0]=o*v+a*M+l*L,r[3]=o*m+a*b+l*A,r[6]=o*f+a*x+l*R,r[1]=c*v+h*M+d*L,r[4]=c*m+h*b+d*A,r[7]=c*f+h*x+d*R,r[2]=u*v+p*M+g*L,r[5]=u*m+p*b+g*A,r[8]=u*f+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Go.makeScale(t,e)),this}rotate(t){return this.premultiply(Go.makeRotation(-t)),this}translate(t,e){return this.premultiply(Go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Ot;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tf(){const i=mo("canvas");return i.style.display="block",i}const _c={};function Js(i){i in _c||(_c[i]=!0,console.warn(i))}function Af(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?Ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yc=[.64,.33,.3,.6,.15,.06],xc=[.2126,.7152,.0722],Mc=[.3127,.329],Sc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ds]:{primaries:yc,whitePoint:Mc,transfer:Ro,toXYZ:Sc,fromXYZ:wc,luminanceCoefficients:xc,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:yc,whitePoint:Mc,transfer:ue,toXYZ:Sc,fromXYZ:wc,luminanceCoefficients:xc,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let Zi;class Pf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=mo("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kf=0;class gu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vo(s[o].image)):r.push(Vo(s[o]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class We extends Us{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ii,s=Ii,r=kn,o=Ni,a=on,l=Yn,c=We.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ui(),this.name="",this.source=new gu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=su;We.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(p+1)/2,L=(f+1)/2,A=(h+u)/4,R=(d+v)/4,k=(g+m)/4;return b>x&&b>L?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=R/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=k/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=k/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends Us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Df{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vu extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let m=1-a;const f=l*u+c*p+h*g+d*v,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,f*M);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const x=a*M;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+v*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new N,bc=new Is;class qi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),vr.subVectors(this.max,zs),Ji.subVectors(t.a,zs),Qi.subVectors(t.b,zs),ts.subVectors(t.c,zs),ei.subVectors(Qi,Ji),ni.subVectors(ts,Qi),Si.subVectors(Ji,ts);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Si.z,Si.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Si.z,0,-Si.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Si.y,Si.x,0];return!Xo(e,Ji,Qi,ts,vr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Ji,Qi,ts,vr))?!1:(_r.crossVectors(ei,ni),e=[_r.x,_r.y,_r.z],Xo(e,Ji,Qi,ts,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new N,new N,new N,new N,new N,new N,new N,new N],xn=new N,gr=new qi,Ji=new N,Qi=new N,ts=new N,ei=new N,ni=new N,Si=new N,zs=new N,vr=new N,_r=new N,wi=new N;function Xo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const If=new qi,Hs=new N,qo=new N;class Ki{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);const e=Hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(qo)),this.expandByPoint(Hs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new N,Ko=new N,yr=new N,ii=new N,$o=new N,xr=new N,Yo=new N;class _u{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ko.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Ko);const r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=ii.dot(this.direction),l=-ii.dot(yr),c=ii.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ko).addScaledVector(yr,u),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){$o.subVectors(e,t),xr.subVectors(n,t),Yo.crossVectors($o,xr);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(xr.crossVectors(ii,xr));if(l<0)return null;const c=a*this.direction.dot($o.cross(ii));if(c<0||l+c>o)return null;const h=-a*ii.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,g,v,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Of)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),si.crossVectors(n,tn),si.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),si.crossVectors(n,tn)),si.normalize(),Mr.crossVectors(tn,si),s[0]=si.x,s[4]=Mr.x,s[8]=tn.x,s[1]=si.y,s[5]=Mr.y,s[9]=tn.y,s[2]=si.z,s[6]=Mr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],M=n[3],b=n[7],x=n[11],L=n[15],A=s[0],R=s[4],k=s[8],S=s[12],y=s[1],C=s[5],z=s[9],F=s[13],X=s[2],j=s[6],$=s[10],J=s[14],q=s[3],rt=s[7],ht=s[11],mt=s[15];return r[0]=o*A+a*y+l*X+c*q,r[4]=o*R+a*C+l*j+c*rt,r[8]=o*k+a*z+l*$+c*ht,r[12]=o*S+a*F+l*J+c*mt,r[1]=h*A+d*y+u*X+p*q,r[5]=h*R+d*C+u*j+p*rt,r[9]=h*k+d*z+u*$+p*ht,r[13]=h*S+d*F+u*J+p*mt,r[2]=g*A+v*y+m*X+f*q,r[6]=g*R+v*C+m*j+f*rt,r[10]=g*k+v*z+m*$+f*ht,r[14]=g*S+v*F+m*J+f*mt,r[3]=M*A+b*y+x*X+L*q,r[7]=M*R+b*C+x*j+L*rt,r[11]=M*k+b*z+x*$+L*ht,r[15]=M*S+b*F+x*J+L*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*p-n*l*p)+v*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],M=d*m*c-v*u*c+v*l*p-a*m*p-d*l*f+a*u*f,b=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,x=h*v*c-g*d*c+g*a*p-o*v*p-h*a*f+o*d*f,L=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,A=e*M+n*b+s*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=M*R,t[1]=(v*u*r-d*m*r-v*s*p+n*m*p+d*s*f-n*u*f)*R,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*R,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*p-n*l*p)*R,t[4]=b*R,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*R,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*R,t[8]=x*R,t[9]=(g*d*r-h*v*r-g*n*p+e*v*p+h*n*f-e*d*f)*R,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*R,t[12]=L*R,t[13]=(h*v*s-g*d*s+g*n*u-e*v*u-h*n*m+e*d*m)*R,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*R,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,v=o*h,m=o*d,f=a*d,M=l*c,b=l*h,x=l*d,L=n.x,A=n.y,R=n.z;return s[0]=(1-(v+f))*L,s[1]=(p+x)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(u+f))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+b)*R,s[9]=(m-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/r,h=1/o,d=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(a===qn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===po)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,p=(n+s)*h;let g,v;if(a===qn)g=(o+r)*d,v=-2*d;else if(a===po)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const es=new N,Mn=new ge,Nf=new N(0,0,0),Of=new N(1,1,1),si=new N,Mr=new N,tn=new N,Ec=new ge,Tc=new Is;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const Ac=new N,ns=new Is,zn=new ge,Sr=new N,Gs=new N,Bf=new N,zf=new Is,Rc=new N(1,0,0),Cc=new N(0,1,0),Pc=new N(0,0,1),kc={type:"added"},Hf={type:"removed"},is={type:"childadded",child:null},jo={type:"childremoved",child:null};class Oe extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new N,e=new Un,n=new Is,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ot}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Rc,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rc,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Gs,Sr,this.up):zn.lookAt(Sr,Gs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(zn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new N(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new N,Hn=new N,Zo=new N,Gn=new N,ss=new N,rs=new N,Lc=new N,Jo=new N,Qo=new N,ta=new N,ea=new we,na=new we,ia=new we;class sn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Hn.subVectors(n,e),Zo.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(Hn),l=Sn.dot(Zo),c=Hn.dot(Hn),h=Hn.dot(Zo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Hn.subVectors(t,e),Sn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ss.subVectors(s,n),rs.subVectors(r,n),Jo.subVectors(t,n);const l=ss.dot(Jo),c=rs.dot(Jo);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,s);const h=ss.dot(Qo),d=rs.dot(Qo);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ss,o);ta.subVectors(t,r);const p=ss.dot(ta),g=rs.dot(ta);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(rs,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Lc.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Lc,a);const f=1/(m+v+u);return o=v*f,a=u*f,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},wr={h:0,s:0,l:0};function sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Ef(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return jt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ze(Ve.r*255,0,255))*65536+Math.round(Ze(Ve.g*255,0,255))*256+Math.round(Ze(Ve.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Fe){jt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(wr);const n=Ho(ri.h,wr.h,e),s=Ho(ri.s,wr.s,e),r=Ho(ri.l,wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Zt;Zt.NAMES=xu;let Gf=0;class Ns extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ui(),this.name="",this.blending=Ms,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Na,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ie extends Ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new N,br=new Vt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}}class Mu extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Su extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vf=0;const un=new ge,ra=new Oe,os=new N,en=new qi,Vs=new qi,De=new N;class Ye extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?Su:Mu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(en.min,Vs.min),en.expandByPoint(De),De.addVectors(en.max,Vs.max),en.expandByPoint(De)):(en.expandByPoint(Vs.min),en.expandByPoint(Vs.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),De.add(os)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<n.count;k++)a[k]=new N,l[k]=new N;const c=new N,h=new N,d=new N,u=new Vt,p=new Vt,g=new Vt,v=new N,m=new N;function f(k,S,y){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,k),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[k].add(v),a[S].add(v),a[y].add(v),l[k].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let k=0,S=M.length;k<S;++k){const y=M[k],C=y.start,z=y.count;for(let F=C,X=C+z;F<X;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new N,x=new N,L=new N,A=new N;function R(k){L.fromBufferAttribute(s,k),A.copy(L);const S=a[k];b.copy(S),b.sub(L.multiplyScalar(L.dot(S))).normalize(),x.crossVectors(A,S);const C=x.dot(l[k])<0?-1:1;o.setXYZW(k,b.x,b.y,b.z,C)}for(let k=0,S=M.length;k<S;++k){const y=M[k],C=y.start,z=y.count;for(let F=C,X=C+z;F<X;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new ze(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new ge,bi=new _u,Er=new Ki,Uc=new N,Tr=new N,Ar=new N,Rr=new N,oa=new N,Cr=new N,Ic=new N,Pr=new N;class Ht extends Oe{constructor(t=new Ye,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(oa.fromBufferAttribute(d,t),o?Cr.addScaledVector(oa,h):Cr.addScaledVector(oa.sub(e),h))}e.add(Cr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Er.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Er,Uc)===null||bi.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,L=b;x<L;x+=3){const A=a.getX(x),R=a.getX(x+1),k=a.getX(x+2);s=kr(this,f,t,n,c,h,d,A,R,k),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const M=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=kr(this,o,t,n,c,h,d,M,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,L=b;x<L;x+=3){const A=x,R=x+1,k=x+2;s=kr(this,f,t,n,c,h,d,A,R,k),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const M=m,b=m+1,x=m+2;s=kr(this,o,t,n,c,h,d,M,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wf(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:i}}function kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Tr),i.getVertexPosition(l,Ar),i.getVertexPosition(c,Rr);const h=Wf(i,t,e,n,Tr,Ar,Rr,Ic);if(h){const d=new N;sn.getBarycoord(Ic,Tr,Ar,Rr,d),s&&(h.uv=sn.getInterpolatedAttribute(s,a,l,c,d,new Vt)),r&&(h.uv1=sn.getInterpolatedAttribute(r,a,l,c,d,new Vt)),o&&(h.normal=sn.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};sn.getNormal(Tr,Ar,Rr,u.normal),h.face=u,h.barycoord=d}return h}class ce extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2));function g(v,m,f,M,b,x,L,A,R,k,S){const y=x/R,C=L/k,z=x/2,F=L/2,X=A/2,j=R+1,$=k+1;let J=0,q=0;const rt=new N;for(let ht=0;ht<$;ht++){const mt=ht*C-F;for(let Dt=0;Dt<j;Dt++){const ee=Dt*y-z;rt[v]=ee*M,rt[m]=mt*b,rt[f]=X,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[f]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Dt/R),d.push(1-ht/k),J+=1}}for(let ht=0;ht<k;ht++)for(let mt=0;mt<R;mt++){const Dt=u+mt+j*ht,ee=u+mt+j*(ht+1),Y=u+(mt+1)+j*(ht+1),nt=u+(mt+1)+j*ht;l.push(Dt,ee,nt),l.push(ee,Y,nt),q+=6}a.addGroup(p,q,S),p+=q,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Xf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const qf={clone:Ls,merge:qe};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new N,Nc=new Vt,Oc=new Vt;class nn extends bu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Nc,Oc),e.subVectors(Oc,Nc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,ls=1;class Yf extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(as,ls,t,e);s.layers=this.layers,this.add(s);const r=new nn(as,ls,t,e);r.layers=this.layers,this.add(r);const o=new nn(as,ls,t,e);o.layers=this.layers,this.add(o);const a=new nn(as,ls,t,e);a.layers=this.layers,this.add(a);const l=new nn(as,ls,t,e);l.layers=this.layers,this.add(l);const c=new nn(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends We{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jf extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ci});r.uniforms.tEquirect.value=e;const o=new Ht(s,r),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=kn),new Yf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const aa=new N,Zf=new N,Jf=new Ot;class Pi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=aa.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jf.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ki,Lr=new N;class Tu{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],M=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,u-c,m-p,x-f).normalize(),n[1].setComponents(l+r,u+c,m+p,x+f).normalize(),n[2].setComponents(l+o,u+h,m+g,x+M).normalize(),n[3].setComponents(l-o,u-h,m-g,x-M).normalize(),n[4].setComponents(l-a,u-d,m-v,x-b).normalize(),e===qn)n[5].setComponents(l+a,u+d,m+v,x+b).normalize();else if(e===po)n[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class di extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const M=f*u-o;for(let b=0;b<c;b++){const x=b*d-r;g.push(x,-M,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const b=M+c*f,x=M+c*(f+1),L=M+1+c*(f+1),A=M+1+c*f;p.push(b,x,A),p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,Qp=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fm=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,ag=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,_g=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Eg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,kg=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:op,aomap_pars_fragment:ap,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:_p,color_fragment:yp,color_pars_fragment:xp,color_pars_vertex:Mp,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ap,emissivemap_fragment:Rp,emissivemap_pars_fragment:Cp,colorspace_fragment:Pp,colorspace_pars_fragment:kp,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Up,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:qp,envmap_vertex:Np,fog_vertex:Op,fog_pars_vertex:Fp,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:Kp,lights_toon_pars_fragment:$p,lights_phong_fragment:Yp,lights_phong_pars_fragment:jp,lights_physical_fragment:Zp,lights_physical_pars_fragment:Jp,lights_fragment_begin:Qp,lights_fragment_maps:tm,lights_fragment_end:em,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:om,map_pars_fragment:am,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:vm,normal_fragment_maps:_m,normal_pars_fragment:ym,normal_pars_vertex:xm,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:Pm,dithering_fragment:km,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Nm,shadowmap_vertex:Om,shadowmask_pars_fragment:Fm,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:Hm,skinnormal_vertex:Gm,specularmap_fragment:Vm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Km,transmission_pars_fragment:$m,uv_pars_fragment:Ym,uv_pars_vertex:jm,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Qm,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:og,distanceRGBA_vert:ag,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:vg,meshmatcap_frag:_g,meshnormal_vert:yg,meshnormal_frag:xg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:bg,meshtoon_vert:Eg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:kg,sprite_frag:Lg},ot={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Rn={basic:{uniforms:qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:qe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:qe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:qe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:qe([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:qe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:qe([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:qe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:qe([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:qe([ot.common,ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:qe([ot.lights,ot.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Rn.physical={uniforms:qe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Dr={r:0,b:0,g:0},Ti=new Un,Dg=new ge;function Ug(i,t,e,n,s,r,o){const a=new Zt(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function v(M){let b=!1;const x=g(M);x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Ao)?(h===void 0&&(h=new Ht(new ce(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ls(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(b.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(Ti)),h.material.toneMapped=jt.getTransfer(x.colorSpace)!==ue,(d!==x||u!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ht(new di(2,2),new En({name:"BackgroundMaterial",uniforms:Ls(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=jt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,b){M.getRGB(Dr,wu(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:v,addToRenderList:m}}function Ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(y,C,z,F,X){let j=!1;const $=d(F,z,C);r!==$&&(r=$,c(r.object)),j=p(y,F,z,X),j&&g(y,F,z,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(y,C,z,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,C,z){const F=z.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let j=X[C.id];j===void 0&&(j={},X[C.id]=j);let $=j[F];return $===void 0&&($=u(l()),j[F]=$),$}function u(y){const C=[],z=[],F=[];for(let X=0;X<e;X++)C[X]=0,z[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,C,z,F){const X=r.attributes,j=C.attributes;let $=0;const J=z.getAttributes();for(const q in J)if(J[q].location>=0){const ht=X[q];let mt=j[q];if(mt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),ht===void 0||ht.attribute!==mt||mt&&ht.data!==mt.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function g(y,C,z,F){const X={},j=C.attributes;let $=0;const J=z.getAttributes();for(const q in J)if(J[q].location>=0){let ht=j[q];ht===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const mt={};mt.attribute=ht,ht&&ht.data&&(mt.data=ht.data),X[q]=mt,$++}r.attributes=X,r.attributesNum=$,r.index=F}function v(){const y=r.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const z=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;z[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),X[y]!==C&&(i.vertexAttribDivisor(y,C),X[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let z=0,F=C.length;z<F;z++)C[z]!==y[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function b(y,C,z,F,X,j,$){$===!0?i.vertexAttribIPointer(y,C,z,X,j):i.vertexAttribPointer(y,C,z,F,X,j)}function x(y,C,z,F){v();const X=F.attributes,j=z.getAttributes(),$=C.defaultAttributeValues;for(const J in j){const q=j[J];if(q.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const ht=rt.normalized,mt=rt.itemSize,Dt=t.get(rt);if(Dt===void 0)continue;const ee=Dt.buffer,Y=Dt.type,nt=Dt.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===Ll;if(rt.isInterleavedBufferAttribute){const at=rt.data,Rt=at.stride,Ut=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Gt=0;Gt<q.locationSize;Gt++)f(q.location+Gt,at.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Gt=0;Gt<q.locationSize;Gt++)m(q.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Gt=0;Gt<q.locationSize;Gt++)b(q.location+Gt,mt/q.locationSize,Y,ht,Rt*nt,(Ut+mt/q.locationSize*Gt)*nt,_t)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)f(q.location+at,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<q.locationSize;at++)m(q.location+at);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let at=0;at<q.locationSize;at++)b(q.location+at,mt/q.locationSize,Y,ht,mt*nt,mt/q.locationSize*at*nt,_t)}}else if($!==void 0){const ht=$[J];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(q.location,ht);break;case 3:i.vertexAttrib3fv(q.location,ht);break;case 4:i.vertexAttrib4fv(q.location,ht);break;default:i.vertexAttrib1fv(q.location,ht)}}}}M()}function L(){k();for(const y in n){const C=n[y];for(const z in C){const F=C[z];for(const X in F)h(F[X].object),delete F[X];delete C[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const z in C){const F=C[z];for(const X in F)h(F[X].object),delete F[X];delete C[z]}delete n[y.id]}function R(y){for(const C in n){const z=n[C];if(z[y.id]===void 0)continue;const F=z[y.id];for(const X in F)h(F[X].object),delete F[X];delete z[y.id]}}function k(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Ng(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Og(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const k=R===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!k)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function Fg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Pi,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,b=M*4;let x=f.clippingState||null;l.value=x,x=h(g,u,b,p);for(let L=0;L!==b;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==v;++b,x+=4)o.copy(d[b]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Bg(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Rs:a===Xa&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zg extends bu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=4,Fc=[.125,.215,.35,.446,.526,.582],Di=20,la=new zg,Bc=new Zt;let ca=null,ha=0,ua=0,da=!1;const ki=(1+Math.sqrt(5))/2,cs=1/ki,zc=[new N(-ki,cs,0),new N(ki,cs,0),new N(-cs,0,ki),new N(cs,0,ki),new N(0,ki,-cs),new N(0,ki,cs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=da,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:hr,format:on,colorSpace:Ds,depthBuffer:!1},s=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Gg(r,t,e)}return s}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Bc),h.toneMapping=hi,h.autoClear=!1;const p=new ie({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new Ht(new ce,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Bc),v=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Ur(s,M*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zc[(s-r-1)%zc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ht(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Di-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const f=[];let M=0;for(let R=0;R<Di;++R){const k=R/v,S=Math.exp(-k*k/2);f.push(S),R===0?M+=S:R<m&&(M+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const x=this._sizeLods[s],L=3*x*(s>b-_s?s-b+_s:0),A=4*(this._cubeSize-x);Ur(e,L,A,3*x,2*x),l.setRenderTarget(e),l.render(d,la)}}function Hg(i){const t=[],e=[],n=[];let s=i;const r=i-_s+1+Fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-_s?l=Fc[o-i+_s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,k=A>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];M.set(S,v*g*A),b.set(u,m*g*A);const y=[A,A,A,A,A,A];x.set(y,f*g*A)}const L=new Ye;L.setAttribute("position",new ze(M,v)),L.setAttribute("uv",new ze(b,m)),L.setAttribute("faceIndex",new ze(x,f)),t.push(L),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gc(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gg(i,t,e){const n=new Float32Array(Di),s=new N(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Vc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Wc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function Vg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===Xa,h=l===Rs||l===Cs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Hc(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Hc(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let b=0,x=M.length;b<x;b+=3){const L=M[b+0],A=M[b+1],R=M[b+2];u.push(L,A,A,R,R,L)}}else if(g!==void 0){const M=g.array;v=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const L=b+0,A=b+1,R=b+2;u.push(L,A,A,R,R,L)}}else return;const m=new(mu(u)?Su:Mu)(u,1);m.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function qg(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*v[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Kg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t,e){const n=new WeakMap,s=new we;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*A*4*d),k=new vu(R,L,A,d);k.type=Ln,k.needsUpdate=!0;const S=x*4;for(let C=0;C<d;C++){const z=f[C],F=M[C],X=b[C],j=L*A*4*C;for(let $=0;$<z.count;$++){const J=$*S;g===!0&&(s.fromBufferAttribute(z,$),R[j+J+0]=s.x,R[j+J+1]=s.y,R[j+J+2]=s.z,R[j+J+3]=0),v===!0&&(s.fromBufferAttribute(F,$),R[j+J+4]=s.x,R[j+J+5]=s.y,R[j+J+6]=s.z,R[j+J+7]=0),m===!0&&(s.fromBufferAttribute(X,$),R[j+J+8]=s.x,R[j+J+9]=s.y,R[j+J+10]=s.z,R[j+J+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:k,size:new Vt(L,A)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Yg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ru extends We{constructor(t,e,n,s,r,o,a,l,c,h=Ss){if(h!==Ss&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Wi),n===void 0&&h===ks&&(n=Ps),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cu=new We,Xc=new Ru(1,1),Pu=new vu,ku=new Uf,Lu=new Eu,qc=[],Kc=[],$c=new Float32Array(16),Yc=new Float32Array(9),jc=new Float32Array(4);function Os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Co(i,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(ke(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),Le(e,n)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(ke(e,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),Le(e,n)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(ke(e,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),Le(e,n)}}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=pu,r=Xc):r=Cu,e.setTexture2D(t||r,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lu,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function m0(i){switch(i){case 5126:return jg;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function _0(i,t){const e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function y0(i,t){const e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function x0(i,t){const e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M0(i,t){const e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){const e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function E0(i,t){i.uniform3iv(this.addr,t)}function T0(i,t){i.uniform4iv(this.addr,t)}function A0(i,t){i.uniform1uiv(this.addr,t)}function R0(i,t){i.uniform2uiv(this.addr,t)}function C0(i,t){i.uniform3uiv(this.addr,t)}function P0(i,t){i.uniform4uiv(this.addr,t)}function k0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cu,r[o])}function L0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ku,r[o])}function D0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lu,r[o])}function U0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function I0(i){switch(i){case 5126:return g0;case 35664:return v0;case 35665:return _0;case 35666:return y0;case 35674:return x0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return b0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}}class O0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}}class F0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Zc(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){const n=i.name,s=n.length;for(fa.lastIndex=0;;){const r=fa.exec(n),o=fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zc(e,c===void 0?new N0(a,i,t):new O0(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new F0(a),Zc(e,d)),e=d}}}class lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);B0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const z0=37297;let H0=0;function G0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qc=new Ot;function V0(i){jt._getMatrix(Qc,jt.workingColorSpace,i);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Ro:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function th(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+G0(i.getShaderSource(t),o)}else return s}function W0(i,t){const e=V0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,t){let e;switch(t){case rf:e="Linear";break;case of:e="Reinhard";break;case af:e="Cineon";break;case lf:e="ACESFilmic";break;case hf:e="AgX";break;case uf:e="Neutral";break;case cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new N;function q0(){jt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function $0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(j0,J0)}const Z0=new Map;function J0(i,t){let e=zt[t];if(e===void 0){const n=Z0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(Q0,tv)}function tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ev(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Od?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function nv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function sv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case nf:t="ENVMAP_BLENDING_MIX";break;case sf:t="ENVMAP_BLENDING_ADD";break}return t}function rv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ov(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ev(e),c=nv(e),h=iv(e),d=sv(e),u=rv(e),p=K0(e),g=$0(r),v=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?zt.tonemapping_pars_fragment:"",e.toneMapping!==hi?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Ml(o),o=eh(o,e),o=nh(o,e),a=Ml(a),a=eh(a,e),a=nh(a,e),o=ih(o),a=ih(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+o,x=M+f+a,L=Jc(s,s.VERTEX_SHADER,b),A=Jc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,L),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(A).trim();let j=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,A);else{const J=th(s,L,"vertex"),q=th(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+J+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||X==="")&&($=!1);$&&(C.diagnostics={runnable:j,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(L),s.deleteShader(A),k=new lo(s,v),S=Y0(s,v)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,z0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let av=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cv(t),e.set(t,n)),n}}class cv{constructor(t){this.id=av++,this.code=t,this.usedTimes=0}}function hv(i,t,e,n,s,r,o){const a=new yu,l=new lv,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,z,F){const X=z.fog,j=F.geometry,$=S.isMeshStandardMaterial?z.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),q=J&&J.mapping===Ao?J.image.height:null,rt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=ht!==void 0?ht.length:0;let Dt=0;j.morphAttributes.position!==void 0&&(Dt=1),j.morphAttributes.normal!==void 0&&(Dt=2),j.morphAttributes.color!==void 0&&(Dt=3);let ee,Y,nt,_t;if(rt){const ae=Rn[rt];ee=ae.vertexShader,Y=ae.fragmentShader}else ee=S.vertexShader,Y=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const at=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,xe=!!S.map,$t=!!S.matcap,be=!!J,O=!!S.aoMap,cn=!!S.lightMap,Xt=!!S.bumpMap,qt=!!S.normalMap,Tt=!!S.displacementMap,ve=!!S.emissiveMap,Et=!!S.metalnessMap,T=!!S.roughnessMap,_=S.anisotropy>0,B=S.clearcoat>0,Q=S.dispersion>0,et=S.iridescence>0,Z=S.sheen>0,St=S.transmission>0,ct=_&&!!S.anisotropyMap,pt=B&&!!S.clearcoatMap,Yt=B&&!!S.clearcoatNormalMap,it=B&&!!S.clearcoatRoughnessMap,gt=et&&!!S.iridescenceMap,At=et&&!!S.iridescenceThicknessMap,Ct=Z&&!!S.sheenColorMap,vt=Z&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Bt=!!S.specularColorMap,pe=!!S.specularIntensityMap,D=St&&!!S.transmissionMap,lt=St&&!!S.thicknessMap,K=!!S.gradientMap,tt=!!S.alphaMap,ft=S.alphaTest>0,ut=!!S.alphaHash,It=!!S.extensions;let Me=hi;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Me=i.toneMapping);const He={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:Y,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ds,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:$t,envMap:be,envMapMode:be&&J.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:cn,bumpMap:Xt,normalMap:qt,displacementMap:u&&Tt,emissiveMap:ve,normalMapObjectSpace:qt&&S.normalMapType===gf,normalMapTangentSpace:qt&&S.normalMapType===mf,metalnessMap:Et,roughnessMap:T,anisotropy:_,anisotropyMap:ct,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:et,iridescenceMap:gt,iridescenceThicknessMap:At,sheen:Z,sheenColorMap:Ct,sheenRoughnessMap:vt,specularMap:Kt,specularColorMap:Bt,specularIntensityMap:pe,transmission:St,transmissionMap:D,thicknessMap:lt,gradientMap:K,opaque:S.transparent===!1&&S.blending===Ms&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:ut,combine:S.combine,mapUv:xe&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:cn&&v(S.lightMap.channel),bumpMapUv:Xt&&v(S.bumpMap.channel),normalMapUv:qt&&v(S.normalMap.channel),displacementMapUv:Tt&&v(S.displacementMap.channel),emissiveMapUv:ve&&v(S.emissiveMap.channel),metalnessMapUv:Et&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:ct&&v(S.anisotropyMap.channel),clearcoatMapUv:pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(S.sheenRoughnessMap.channel),specularMapUv:Kt&&v(S.specularMap.channel),specularColorMapUv:Bt&&v(S.specularColorMap.channel),specularIntensityMapUv:pe&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:lt&&v(S.thicknessMap.channel),alphaMapUv:tt&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(qt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(xe||tt),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:It&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&S.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const y=g[S.type];let C;if(y){const z=Rn[y];C=qf.clone(z.uniforms)}else C=S.uniforms;return C}function L(S,y){let C;for(let z=0,F=h.length;z<F;z++){const X=h[z];if(X.cacheKey===y){C=X,++C.usedTimes;break}}return C===void 0&&(C=new ov(i,y,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:k}}function uv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,v,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function a(d,u,p,g,v,m){const f=o(d,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,v,m){const f=o(d,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||dv),n.length>1&&n.sort(u||rh),s.length>1&&s.sort(u||rh)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new oh,i.set(n,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function mv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gv=0;function vv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _v(i){const t=new pv,e=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ge,o=new ge;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,M=0,b=0,x=0,L=0,A=0,R=0;c.sort(vv);for(let S=0,y=c.length;S<y;S++){const C=c[S],z=C.color,F=C.intensity,X=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*F,d+=z.g*F,u+=z.b*F;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],F);R++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,q=e.get(C);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=$,p++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(z).multiplyScalar(F),$.distance=X,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[v]=$;const J=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,C.castShadow){const q=e.get(C);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=j,x++}v++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(z).multiplyScalar(F),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const J=C.shadow,q=e.get(C);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(F),$.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const k=n.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==f||k.numDirectionalShadows!==M||k.numPointShadows!==b||k.numSpotShadows!==x||k.numSpotMaps!==L||k.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,k.directionalLength=p,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=f,k.numDirectionalShadows=M,k.numPointShadows=b,k.numSpotShadows=x,k.numSpotMaps=L,k.numLightProbes=R,n.version=gv++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ah(i){const t=new _v(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ah(i),t.set(s,[a])):r>=o.length?(a=new ah(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class xv extends Ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mv extends Ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
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
}`;function bv(i,t,e){let n=new Tu;const s=new Vt,r=new Vt,o=new we,a=new xv({depthPacking:pf}),l=new Mv,c={},h=e.maxTextureSize,d={[mi]:$e,[$e]:mi,[vn]:vn},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Sv,fragmentShader:wv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let f=this.type;this.render=function(A,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ci),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==Wn&&this.type===Wn,X=f===Wn&&this.type!==Wn;for(let j=0,$=A.length;j<$;j++){const J=A[j],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const rt=q.getFrameExtents();if(s.multiply(rt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,q.mapSize.y=r.y)),q.map===null||F===!0||X===!0){const mt=this.type!==Wn?{minFilter:Ae,magFilter:Ae}:{};q.map!==null&&q.map.dispose(),q.map=new Xi(s.x,s.y,mt),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ht=q.getViewportCount();for(let mt=0;mt<ht;mt++){const Dt=q.getViewport(mt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),z.viewport(o),q.updateMatrices(J,mt),n=q.getFrustum(),x(R,k,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Wn&&M(q,k),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,C)};function M(A,R){const k=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xi(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,k,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,k,p,v,null)}function b(A,R,k,S){let y=null;const C=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=k.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=y.uuid,F=R.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let j=X[F];j===void 0&&(j=y.clone(),X[F]=j,R.addEventListener("dispose",L)),y=j}if(y.visible=R.visible,y.wireframe=R.wireframe,S===Wn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=k}return y}function x(A,R,k,S,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const F=t.update(A),X=A.material;if(Array.isArray(X)){const j=F.groups;for(let $=0,J=j.length;$<J;$++){const q=j[$],rt=X[q.materialIndex];if(rt&&rt.visible){const ht=b(A,rt,S,y);A.onBeforeShadow(i,A,R,k,F,ht,q),i.renderBufferDirect(k,null,F,ht,A,q),A.onAfterShadow(i,A,R,k,F,ht,q)}}}else if(X.visible){const j=b(A,X,S,y);A.onBeforeShadow(i,A,R,k,F,j,null),i.renderBufferDirect(k,null,F,j,A,null),A.onAfterShadow(i,A,R,k,F,j,null)}}const z=A.children;for(let F=0,X=z.length;F<X;F++)x(z[F],R,k,S,y)}function L(A){A.target.removeEventListener("dispose",L);for(const k in c){const S=c[k],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Ev={[Oa]:Fa,[Ba]:Ga,[za]:Va,[As]:Ha,[Fa]:Oa,[Ga]:Ba,[Va]:za,[Ha]:As};function Tv(i,t){function e(){let D=!1;const lt=new we;let K=null;const tt=new we(0,0,0,0);return{setMask:function(ft){K!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,It,Me,He){He===!0&&(ft*=Me,ut*=Me,It*=Me),lt.set(ft,ut,It,Me),tt.equals(lt)===!1&&(i.clearColor(ft,ut,It,Me),tt.copy(lt))},reset:function(){D=!1,K=null,tt.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,K=null,tt=null,ft=null;return{setReversed:function(ut){if(lt!==ut){const It=t.get("EXT_clip_control");lt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const Me=ft;ft=null,this.setClear(Me)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?at(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ut){K!==ut&&!D&&(i.depthMask(ut),K=ut)},setFunc:function(ut){if(lt&&(ut=Ev[ut]),tt!==ut){switch(ut){case Oa:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(lt&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){D=!1,K=null,tt=null,ft=null,lt=!1}}}function s(){let D=!1,lt=null,K=null,tt=null,ft=null,ut=null,It=null,Me=null,He=null;return{setTest:function(ae){D||(ae?at(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!D&&(i.stencilMask(ae),lt=ae)},setFunc:function(ae,_n,Nn){(K!==ae||tt!==_n||ft!==Nn)&&(i.stencilFunc(ae,_n,Nn),K=ae,tt=_n,ft=Nn)},setOp:function(ae,_n,Nn){(ut!==ae||It!==_n||Me!==Nn)&&(i.stencilOp(ae,_n,Nn),ut=ae,It=_n,Me=Nn)},setLocked:function(ae){D=ae},setClear:function(ae){He!==ae&&(i.clearStencil(ae),He=ae)},reset:function(){D=!1,lt=null,K=null,tt=null,ft=null,ut=null,It=null,Me=null,He=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,M=null,b=null,x=null,L=null,A=null,R=new Zt(0,0,0),k=0,S=!1,y=null,C=null,z=null,F=null,X=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=J>=2);let rt=null,ht={};const mt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),ee=new we().fromArray(mt),Y=new we().fromArray(Dt);function nt(D,lt,K,tt){const ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<K;It++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(lt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}const _t={};_t[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(As),Xt(!1),qt(pc),at(i.CULL_FACE),O(ci);function at(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ut(D,lt){return d[D]!==lt?(i.bindFramebuffer(D,lt),d[D]=lt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Gt(D,lt){let K=p,tt=!1;if(D){K=u.get(lt),K===void 0&&(K=[],u.set(lt,K));const ft=D.textures;if(K.length!==ft.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,It=ft.length;ut<It;ut++)K[ut]=i.COLOR_ATTACHMENT0+ut;K.length=ft.length,tt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,tt=!0);tt&&i.drawBuffers(K)}function xe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const $t={[Li]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[zd]:i.FUNC_REVERSE_SUBTRACT};$t[Hd]=i.MIN,$t[Gd]=i.MAX;const be={[Vd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[Kd]:i.DST_ALPHA,[qd]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[jd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function O(D,lt,K,tt,ft,ut,It,Me,He,ae){if(D===ci){v===!0&&(Rt(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),D!==Fd){if(D!==m||ae!==S){if((f!==Li||x!==Li)&&(i.blendEquation(i.FUNC_ADD),f=Li,x=Li),ae)switch(D){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,b=null,L=null,A=null,R.set(0,0,0),k=0,m=D,S=ae}return}ft=ft||lt,ut=ut||K,It=It||tt,(lt!==f||ft!==x)&&(i.blendEquationSeparate($t[lt],$t[ft]),f=lt,x=ft),(K!==M||tt!==b||ut!==L||It!==A)&&(i.blendFuncSeparate(be[K],be[tt],be[ut],be[It]),M=K,b=tt,L=ut,A=It),(Me.equals(R)===!1||He!==k)&&(i.blendColor(Me.r,Me.g,Me.b,He),R.copy(Me),k=He),m=D,S=!1}function cn(D,lt){D.side===vn?Rt(i.CULL_FACE):at(i.CULL_FACE);let K=D.side===$e;lt&&(K=!K),Xt(K),D.blending===Ms&&D.transparent===!1?O(ci):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const tt=D.stencilWrite;a.setTest(tt),tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function qt(D){D!==Id?(at(i.CULL_FACE),D!==C&&(D===pc?i.cullFace(i.BACK):D===Nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),C=D}function Tt(D){D!==z&&($&&i.lineWidth(D),z=D)}function ve(D,lt,K){D?(at(i.POLYGON_OFFSET_FILL),(F!==lt||X!==K)&&(i.polygonOffset(lt,K),F=lt,X=K)):Rt(i.POLYGON_OFFSET_FILL)}function Et(D){D?at(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+j-1),rt!==D&&(i.activeTexture(D),rt=D)}function _(D,lt,K){K===void 0&&(rt===null?K=i.TEXTURE0+j-1:K=rt);let tt=ht[K];tt===void 0&&(tt={type:void 0,texture:void 0},ht[K]=tt),(tt.type!==D||tt.texture!==lt)&&(rt!==K&&(i.activeTexture(K),rt=K),i.bindTexture(D,lt||_t[D]),tt.type=D,tt.texture=lt)}function B(){const D=ht[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){ee.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function vt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Kt(D,lt){let K=c.get(lt);K===void 0&&(K=new WeakMap,c.set(lt,K));let tt=K.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(lt,D.name),K.set(D,tt))}function Bt(D,lt){const tt=c.get(lt).get(D);l.get(lt)!==tt&&(i.uniformBlockBinding(lt,tt,D.__bindingPointIndex),l.set(lt,tt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ht={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,M=null,b=null,x=null,L=null,A=null,R=new Zt(0,0,0),k=0,S=!1,y=null,C=null,z=null,F=null,X=null,ee.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Rt,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:xe,setBlending:O,setMaterial:cn,setFlipSided:Xt,setCullFace:qt,setLineWidth:Tt,setPolygonOffset:ve,setScissorTest:Et,activeTexture:T,bindTexture:_,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:gt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:Bt,texStorage2D:Yt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Ct,viewport:vt,reset:pe}}function lh(i,t,e,n){const s=Av(n);switch(e){case lu:return i*t;case hu:return i*t;case uu:return i*t*2;case Il:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case du:return i*t*2/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case cu:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case ja:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oo:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fu:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Av(i){switch(i){case Yn:case ru:return{byteLength:1,components:1};case rr:case ou:case hr:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case Wi:case Ll:case Ln:return{byteLength:4,components:1};case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):mo("canvas")}function v(T,_,B){let Q=1;const et=Et(T);if((et.width>B||et.height>B)&&(Q=B/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(Q*et.width),St=Math.floor(Q*et.height);d===void 0&&(d=g(Z,St));const ct=_?g(Z,St):d;return ct.width=Z,ct.height=St,ct.getContext("2d").drawImage(T,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+St+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,B,Q,et=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=_;if(_===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),_===i.RGBA){const St=et?Ro:jt.getTransfer(Q);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=St===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(T,_){let B;return T?_===null||_===Wi||_===Ps?B=i.DEPTH24_STENCIL8:_===Ln?B=i.DEPTH32F_STENCIL8:_===rr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wi||_===Ps?B=i.DEPTH_COMPONENT24:_===Ln?B=i.DEPTH_COMPONENT32F:_===rr&&(B=i.DEPTH_COMPONENT16),B}function L(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ae&&T.minFilter!==kn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),k(_),_.isVideoTexture&&h.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),y(_)}function k(T){const _=n.get(T);if(_.__webglInit===void 0)return;const B=T.source,Q=u.get(B);if(Q){const et=Q[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(T),Object.keys(Q).length===0&&u.delete(B)}n.remove(T)}function S(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const B=T.source,Q=u.get(B);delete Q[_.__cacheKey],o.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let et=0;et<_.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=T.textures;for(let Q=0,et=B.length;Q<et;Q++){const Z=n.get(B[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(B[Q])}n.remove(T)}let C=0;function z(){C=0}function F(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function X(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){const B=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,T,_);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function $(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Y(B,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function J(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Y(B,T,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function q(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){nt(B,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const rt={[sr]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},ht={[Ae]:i.NEAREST,[df]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},mt={[vf]:i.NEVER,[wf]:i.ALWAYS,[_f]:i.LESS,[pu]:i.LEQUAL,[yf]:i.EQUAL,[Sf]:i.GEQUAL,[xf]:i.GREATER,[Mf]:i.NOTEQUAL};function Dt(T,_){if(_.type===Ln&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===kn||_.magFilter===zo||_.magFilter===mr||_.magFilter===Ni||_.minFilter===kn||_.minFilter===zo||_.minFilter===mr||_.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,rt[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,rt[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,rt[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ae||_.minFilter!==mr&&_.minFilter!==Ni||_.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const Q=_.source;let et=u.get(Q);et===void 0&&(et={},u.set(Q,et));const Z=X(_);if(Z!==T.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[Z].usedTimes++;const St=et[T.__cacheKey];St!==void 0&&(et[T.__cacheKey].usedTimes--,St.usedTimes===0&&S(_)),T.__cacheKey=Z,T.__webglTexture=et[Z].texture}return B}function Y(T,_,B){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const et=ee(T,_),Z=_.source;e.bindTexture(Q,T.__webglTexture,i.TEXTURE0+B);const St=n.get(Z);if(Z.version!==St.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const ct=jt.getPrimaries(jt.workingColorSpace),pt=_.colorSpace===Cn?null:jt.getPrimaries(_.colorSpace),Yt=_.colorSpace===Cn||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=v(_.image,!1,s.maxTextureSize);it=ve(_,it);const gt=r.convert(_.format,_.colorSpace),At=r.convert(_.type);let Ct=b(_.internalFormat,gt,At,_.colorSpace,_.isVideoTexture);Dt(Q,_);let vt;const Kt=_.mipmaps,Bt=_.isVideoTexture!==!0,pe=St.__version===void 0||et===!0,D=Z.dataReady,lt=L(_,it);if(_.isDepthTexture)Ct=x(_.format===ks,_.type),pe&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ct,it.width,it.height,0,gt,At,null));else if(_.isDataTexture)if(Kt.length>0){Bt&&pe&&e.texStorage2D(i.TEXTURE_2D,lt,Ct,Kt[0].width,Kt[0].height);for(let K=0,tt=Kt.length;K<tt;K++)vt=Kt[K],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,gt,At,vt.data):e.texImage2D(i.TEXTURE_2D,K,Ct,vt.width,vt.height,0,gt,At,vt.data);_.generateMipmaps=!1}else Bt?(pe&&e.texStorage2D(i.TEXTURE_2D,lt,Ct,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,At,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,it.width,it.height,0,gt,At,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ct,Kt[0].width,Kt[0].height,it.depth);for(let K=0,tt=Kt.length;K<tt;K++)if(vt=Kt[K],_.format!==on)if(gt!==null)if(Bt){if(D)if(_.layerUpdates.size>0){const ft=lh(vt.width,vt.height,_.format,_.type);for(const ut of _.layerUpdates){const It=vt.data.subarray(ut*ft/vt.data.BYTES_PER_ELEMENT,(ut+1)*ft/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ut,vt.width,vt.height,1,gt,It)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,it.depth,gt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ct,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,it.depth,gt,At,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ct,vt.width,vt.height,it.depth,0,gt,At,vt.data)}else{Bt&&pe&&e.texStorage2D(i.TEXTURE_2D,lt,Ct,Kt[0].width,Kt[0].height);for(let K=0,tt=Kt.length;K<tt;K++)vt=Kt[K],_.format!==on?gt!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ct,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,gt,At,vt.data):e.texImage2D(i.TEXTURE_2D,K,Ct,vt.width,vt.height,0,gt,At,vt.data)}else if(_.isDataArrayTexture)if(Bt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ct,it.width,it.height,it.depth),D)if(_.layerUpdates.size>0){const K=lh(it.width,it.height,_.format,_.type);for(const tt of _.layerUpdates){const ft=it.data.subarray(tt*K/it.data.BYTES_PER_ELEMENT,(tt+1)*K/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,gt,At,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,At,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,gt,At,it.data);else if(_.isData3DTexture)Bt?(pe&&e.texStorage3D(i.TEXTURE_3D,lt,Ct,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,At,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,gt,At,it.data);else if(_.isFramebufferTexture){if(pe)if(Bt)e.texStorage2D(i.TEXTURE_2D,lt,Ct,it.width,it.height);else{let K=it.width,tt=it.height;for(let ft=0;ft<lt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ct,K,tt,0,gt,At,null),K>>=1,tt>>=1}}else if(Kt.length>0){if(Bt&&pe){const K=Et(Kt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Ct,K.width,K.height)}for(let K=0,tt=Kt.length;K<tt;K++)vt=Kt[K],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,gt,At,vt):e.texImage2D(i.TEXTURE_2D,K,Ct,gt,At,vt);_.generateMipmaps=!1}else if(Bt){if(pe){const K=Et(it);e.texStorage2D(i.TEXTURE_2D,lt,Ct,K.width,K.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,At,it)}else e.texImage2D(i.TEXTURE_2D,0,Ct,gt,At,it);m(_)&&f(Q),St.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function nt(T,_,B){if(_.image.length!==6)return;const Q=ee(T,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const Z=n.get(et);if(et.version!==Z.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const St=jt.getPrimaries(jt.workingColorSpace),ct=_.colorSpace===Cn?null:jt.getPrimaries(_.colorSpace),pt=_.colorSpace===Cn||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let tt=0;tt<6;tt++)!Yt&&!it?gt[tt]=v(_.image[tt],!0,s.maxCubemapSize):gt[tt]=it?_.image[tt].image:_.image[tt],gt[tt]=ve(_,gt[tt]);const At=gt[0],Ct=r.convert(_.format,_.colorSpace),vt=r.convert(_.type),Kt=b(_.internalFormat,Ct,vt,_.colorSpace),Bt=_.isVideoTexture!==!0,pe=Z.__version===void 0||Q===!0,D=et.dataReady;let lt=L(_,At);Dt(i.TEXTURE_CUBE_MAP,_);let K;if(Yt){Bt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Kt,At.width,At.height);for(let tt=0;tt<6;tt++){K=gt[tt].mipmaps;for(let ft=0;ft<K.length;ft++){const ut=K[ft];_.format!==on?Ct!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,Ct,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ut.width,ut.height,Ct,vt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Kt,ut.width,ut.height,0,Ct,vt,ut.data)}}}else{if(K=_.mipmaps,Bt&&pe){K.length>0&&lt++;const tt=Et(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,gt[tt].width,gt[tt].height,Ct,vt,gt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,gt[tt].width,gt[tt].height,0,Ct,vt,gt[tt].data);for(let ft=0;ft<K.length;ft++){const It=K[ft].image[tt].image;Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,It.width,It.height,Ct,vt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Kt,It.width,It.height,0,Ct,vt,It.data)}}else{Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct,vt,gt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Ct,vt,gt[tt]);for(let ft=0;ft<K.length;ft++){const ut=K[ft];Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Ct,vt,ut.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Kt,Ct,vt,ut.image[tt])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Z.__version=et.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function _t(T,_,B,Q,et,Z){const St=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),pt=b(B.internalFormat,St,ct,B.colorSpace),Yt=n.get(_),it=n.get(B);if(it.__renderTarget=_,!Yt.__hasExternalTextures){const gt=Math.max(1,_.width>>Z),At=Math.max(1,_.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,pt,gt,At,_.depth,0,St,ct,null):e.texImage2D(et,Z,pt,gt,At,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),qt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,it.__webglTexture,0,Xt(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Q=_.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,Z=x(_.stencilBuffer,et),St=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Xt(_);qt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Z,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{const Q=_.textures;for(let et=0;et<Q.length;et++){const Z=Q[et],St=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),pt=b(Z.internalFormat,St,ct,Z.colorSpace),Yt=Xt(_);B&&qt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,pt,_.width,_.height):qt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,pt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const et=Q.__webglTexture,Z=Xt(_);if(_.depthTexture.format===Ss)qt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(_.depthTexture.format===ks)qt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ut(T){const _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=Q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),at(_.__webglDepthbuffer[Q],T,!1);else{const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),at(_.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,_,B){const Q=n.get(T);_!==void 0&&_t(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(T)}function xe(T){const _=T.texture,B=n.get(T),Q=n.get(_);T.addEventListener("dispose",R);const et=T.textures,Z=T.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let pt=0;pt<_.mipmaps.length;pt++)B.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,pt=et.length;ct<pt;ct++){const Yt=n.get(et[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&qt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const pt=et[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Yt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),gt=b(pt.internalFormat,Yt,it,pt.colorSpace,T.isXRRenderTarget===!0),At=Xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),at(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)_t(B.__webglFramebuffer[ct][pt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else _t(B.__webglFramebuffer[ct],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,pt=et.length;ct<pt;ct++){const Yt=et[ct],it=n.get(Yt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Dt(i.TEXTURE_2D,Yt),_t(B.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Dt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)_t(B.__webglFramebuffer[pt],T,_,i.COLOR_ATTACHMENT0,ct,pt);else _t(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ct,0);m(_)&&f(ct),e.unbindTexture()}T.depthBuffer&&Ut(T)}function $t(T){const _=T.textures;for(let B=0,Q=_.length;B<Q;B++){const et=_[B];if(m(et)){const Z=M(T),St=n.get(et).__webglTexture;e.bindTexture(Z,St),f(Z),e.unbindTexture()}}}const be=[],O=[];function cn(T){if(T.samples>0){if(qt(T)===!1){const _=T.textures,B=T.width,Q=T.height;let et=i.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),ct=_.length>1;if(ct)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const Yt=n.get(_[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,et,i.NEAREST),l===!0&&(be.length=0,O.length=0,be.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(Z),O.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const Yt=n.get(_[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Xt(T){return Math.min(s.maxSamples,T.samples)}function qt(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Tt(T){const _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ve(T,_){const B=T.colorSpace,Q=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ds&&B!==Cn&&(jt.getTransfer(B)===ue?(Q!==on||et!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Et(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Gt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=qt}function Cv(i,t){function e(n,s=Cn){let r;const o=jt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.BYTE;if(n===ou)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===cu)return i.RGB;if(n===on)return i.RGBA;if(n===hu)return i.LUMINANCE;if(n===uu)return i.LUMINANCE_ALPHA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===du)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===$a||n===Ya||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===gl||n===vl||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Pv extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`;class Uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iv extends Us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new Uv,m=e.getContextAttributes();let f=null,M=null;const b=[],x=[],L=new Vt;let A=null;const R=new nn;R.viewport=new we;const k=new nn;k.viewport=new we;const S=[R,k],y=new Pv;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=b[Y];return nt===void 0&&(nt=new pa,b[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=b[Y];return nt===void 0&&(nt=new pa,b[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=b[Y];return nt===void 0&&(nt=new pa,b[Y]=nt),nt.getHandSpace()};function F(Y){const nt=x.indexOf(Y.inputSource);if(nt===-1)return;const _t=b[nt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<b.length;Y++){const nt=x[Y];nt!==null&&(x[Y]=null,b[Y].disconnect(nt))}C=null,z=null,v.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Xi(p.framebufferWidth,p.framebufferHeight,{format:on,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,_t=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ks:Ss,_t=m.stencil?Ps:Wi);const Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Xi(u.textureWidth,u.textureHeight,{format:on,type:Yn,depthTexture:new Ru(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(Y){for(let nt=0;nt<Y.removed.length;nt++){const _t=Y.removed[nt],at=x.indexOf(_t);at>=0&&(x[at]=null,b[at].disconnect(_t))}for(let nt=0;nt<Y.added.length;nt++){const _t=Y.added[nt];let at=x.indexOf(_t);if(at===-1){for(let Ut=0;Ut<b.length;Ut++)if(Ut>=x.length){x.push(_t),at=Ut;break}else if(x[Ut]===null){x[Ut]=_t,at=Ut;break}if(at===-1)break}const Rt=b[at];Rt&&Rt.connect(_t)}}const $=new N,J=new N;function q(Y,nt,_t){$.setFromMatrixPosition(nt.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);const at=$.distanceTo(J),Rt=nt.projectionMatrix.elements,Ut=_t.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),xe=Rt[14]/(Rt[10]+1),$t=(Rt[9]+1)/Rt[5],be=(Rt[9]-1)/Rt[5],O=(Rt[8]-1)/Rt[0],cn=(Ut[8]+1)/Ut[0],Xt=Gt*O,qt=Gt*cn,Tt=at/(-O+cn),ve=Tt*-O;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ve),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Et=Gt+Tt,T=xe+Tt,_=Xt-ve,B=qt+(at-ve),Q=$t*xe/T*Et,et=be*xe/T*Et;Y.projectionMatrix.makePerspective(_,B,Q,et,Et,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,_t=Y.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),y.near=k.near=R.near=nt,y.far=k.far=R.far=_t,(C!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,z=y.far),R.layers.mask=Y.layers.mask|2,k.layers.mask=Y.layers.mask|4,y.layers.mask=R.layers.mask|k.layers.mask;const at=Y.parent,Rt=y.cameras;rt(y,at);for(let Ut=0;Ut<Rt.length;Ut++)rt(Rt[Ut],at);Rt.length===2?q(y,R,k):y.projectionMatrix.copy(R.projectionMatrix),ht(Y,y,at)};function ht(Y,nt,_t){_t===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let mt=null;function Dt(Y,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let at=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Ut=0;Ut<_t.length;Ut++){const Gt=_t[Ut];let xe=null;if(p!==null)xe=p.getViewport(Gt);else{const be=d.getViewSubImage(u,Gt);xe=be.viewport,Ut===0&&(t.setRenderTargetTextures(M,be.colorTexture,u.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(M))}let $t=S[Ut];$t===void 0&&($t=new nn,$t.layers.enable(Ut),$t.viewport=new we,S[Ut]=$t),$t.matrix.fromArray(Gt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Gt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(xe.x,xe.y,xe.width,xe.height),Ut===0&&(y.matrix.copy($t.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push($t)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Ut=d.getDepthInformation(_t[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let _t=0;_t<b.length;_t++){const at=x[_t],Rt=b[_t];at!==null&&Rt!==void 0&&Rt.update(at,nt,c||o)}mt&&mt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ee=new Au;ee.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const Ai=new Un,Nv=new ge;function Ov(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===$e&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===$e&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,Ai.copy(x),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(Ai)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$e&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const x=b.program;n.uniformBlockBinding(M,x)}function c(M,b){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(M,L);const A=t.render.frame;r[M.id]!==A&&(u(M),r[M.id]=A)}function h(M){const b=d();M.__bindingPointIndex=b;const x=i.createBuffer(),L=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=s[M.id],x=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,R=x.length;A<R;A++){const k=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,y=k.length;S<y;S++){const C=k[S];if(p(C,A,S,L)===!0){const z=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let j=0;j<F.length;j++){const $=F[j],J=v($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,z+X,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,x,L){const A=M.value,R=b+"_"+x;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const k=L[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return L[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(M){const b=M.uniforms;let x=0;const L=16;for(let R=0,k=b.length;R<k;R++){const S=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,C=S.length;y<C;y++){const z=S[y],F=Array.isArray(z.value)?z.value:[z.value];for(let X=0,j=F.length;X<j;X++){const $=F[X],J=v($),q=x%L,rt=q%J.boundary,ht=q+rt;x+=rt,ht!==0&&L-ht<J.storage&&(x+=L-ht),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=J.storage}}}const A=x%L;return A>0&&(x+=L-A),M.__size=x,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Bv{constructor(t={}){const{canvas:e=Tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=hi,this.toneMappingExposure=1;const x=this;let L=!1,A=0,R=0,k=null,S=-1,y=null;const C=new we,z=new we;let F=null;const X=new Zt(0);let j=0,$=e.width,J=e.height,q=1,rt=null,ht=null;const mt=new we(0,0,$,J),Dt=new we(0,0,$,J);let ee=!1;const Y=new Tu;let nt=!1,_t=!1;const at=new ge,Rt=new ge,Ut=new N,Gt=new we,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function be(){return k===null?q:1}let O=n;function cn(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),O===null){const U="webgl2";if(O=cn(U,w),O===null)throw cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xt,qt,Tt,ve,Et,T,_,B,Q,et,Z,St,ct,pt,Yt,it,gt,At,Ct,vt,Kt,Bt,pe,D;function lt(){Xt=new Wg(O),Xt.init(),Bt=new Cv(O,Xt),qt=new Og(O,Xt,t,Bt),Tt=new Tv(O,Xt),qt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),ve=new Kg(O),Et=new uv,T=new Rv(O,Xt,Tt,Et,qt,Bt,ve),_=new Bg(x),B=new Vg(x),Q=new Qf(O),pe=new Ig(O,Q),et=new Xg(O,Q,ve,pe),Z=new Yg(O,et,Q,ve),Ct=new $g(O,qt,T),it=new Fg(Et),St=new hv(x,_,B,Xt,qt,pe,it),ct=new Ov(x,Et),pt=new fv,Yt=new yv(Xt),At=new Ug(x,_,B,Tt,Z,p,l),gt=new bv(x,Z,qt),D=new Fv(O,ve,qt,Tt),vt=new Ng(O,Xt,ve),Kt=new qg(O,Xt,ve),ve.programs=St.programs,x.capabilities=qt,x.extensions=Xt,x.properties=Et,x.renderLists=pt,x.shadowMap=gt,x.state=Tt,x.info=ve}lt();const K=new Iv(x,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize($,J,!1))},this.getSize=function(w){return w.set($,J)},this.setSize=function(w,U,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,J=U,e.width=Math.floor(w*q),e.height=Math.floor(U*q),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set($*q,J*q).floor()},this.setDrawingBufferSize=function(w,U,H){$=w,J=U,q=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,U,H,G){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,U,H,G),Tt.viewport(C.copy(mt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,U,H,G){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,U,H,G),Tt.scissor(z.copy(Dt).multiplyScalar(q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){Tt.setScissorTest(ee=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let I=!1;if(k!==null){const st=k.texture.format;I=st===Fl||st===Ol||st===Nl}if(I){const st=k.texture.type,dt=st===Yn||st===Wi||st===rr||st===Ps||st===Dl||st===Ul,yt=At.getClearColor(),xt=At.getClearAlpha(),Lt=yt.r,Nt=yt.g,Mt=yt.b;dt?(g[0]=Lt,g[1]=Nt,g[2]=Mt,g[3]=xt,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Lt,v[1]=Nt,v[2]=Mt,v[3]=xt,O.clearBufferiv(O.COLOR,0,v))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Yt.dispose(),Et.dispose(),_.dispose(),B.dispose(),Z.dispose(),pe.dispose(),D.dispose(),St.dispose(),K.dispose(),K.removeEventListener("sessionstart",oc),K.removeEventListener("sessionend",ac),Mi.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=ve.autoReset,U=gt.enabled,H=gt.autoUpdate,G=gt.needsUpdate,I=gt.type;lt(),ve.autoReset=w,gt.enabled=U,gt.autoUpdate=H,gt.needsUpdate=G,gt.type=I}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function It(w){const U=w.target;U.removeEventListener("dispose",It),Me(U)}function Me(w){He(w),Et.remove(w)}function He(w){const U=Et.get(w).programs;U!==void 0&&(U.forEach(function(H){St.releaseProgram(H)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,I,st){U===null&&(U=xe);const dt=I.isMesh&&I.matrixWorld.determinant()<0,yt=Ld(w,U,H,G,I);Tt.setMaterial(G,dt);let xt=H.index,Lt=1;if(G.wireframe===!0){if(xt=et.getWireframeAttribute(H),xt===void 0)return;Lt=2}const Nt=H.drawRange,Mt=H.attributes.position;let ne=Nt.start*Lt,me=(Nt.start+Nt.count)*Lt;st!==null&&(ne=Math.max(ne,st.start*Lt),me=Math.min(me,(st.start+st.count)*Lt)),xt!==null?(ne=Math.max(ne,0),me=Math.min(me,xt.count)):Mt!=null&&(ne=Math.max(ne,0),me=Math.min(me,Mt.count));const _e=me-ne;if(_e<0||_e===1/0)return;pe.setup(I,G,yt,H,xt);let je,se=vt;if(xt!==null&&(je=Q.get(xt),se=Kt,se.setIndex(je)),I.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*be()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(I.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*be()),I.isLineSegments?se.setMode(O.LINES):I.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else I.isPoints?se.setMode(O.POINTS):I.isSprite&&se.setMode(O.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)se.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))se.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const wt=I._multiDrawStarts,On=I._multiDrawCounts,re=I._multiDrawCount,yn=xt?Q.get(xt).bytesPerElement:1,Yi=Et.get(G).currentProgram.getUniforms();for(let Qe=0;Qe<re;Qe++)Yi.setValue(O,"_gl_DrawID",Qe),se.render(wt[Qe]/yn,On[Qe])}else if(I.isInstancedMesh)se.renderInstances(ne,_e,I.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,On=Math.min(H.instanceCount,wt);se.renderInstances(ne,_e,On)}else se.render(ne,_e)};function ae(w,U,H){w.transparent===!0&&w.side===vn&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,pr(w,U,H),w.side=mi,w.needsUpdate=!0,pr(w,U,H),w.side=vn):pr(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),f=Yt.get(H),f.init(U),b.push(f),H.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),w!==H&&w.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const G=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const st=I.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const yt=st[dt];ae(yt,H,I),G.add(yt)}else ae(st,H,I),G.add(st)}),b.pop(),f=null,G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(I=>{function st(){if(G.forEach(function(dt){Et.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){I(w);return}setTimeout(st,10)}Xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let _n=null;function Nn(w){_n&&_n(w)}function oc(){Mi.stop()}function ac(){Mi.start()}const Mi=new Au;Mi.setAnimationLoop(Nn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){_n=w,K.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},K.addEventListener("sessionstart",oc),K.addEventListener("sessionend",ac),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,k),f=Yt.get(w,b.length),f.init(U),b.push(f),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),_t=this.localClippingEnabled,nt=it.init(this.clippingPlanes,_t),m=pt.get(w,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Bo(st,U,-1/0,x.sortObjects)}Bo(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,ht),$t=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$t&&At.addToRenderList(m,w),this.info.render.frame++,nt===!0&&it.beginShadows();const H=f.state.shadowsArray;gt.render(H,w,U),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,I=m.transmissive;if(f.setupLights(),U.isArrayCamera){const st=U.cameras;if(I.length>0)for(let dt=0,yt=st.length;dt<yt;dt++){const xt=st[dt];cc(G,I,w,xt)}$t&&At.render(w);for(let dt=0,yt=st.length;dt<yt;dt++){const xt=st[dt];lc(m,w,xt,xt.viewport)}}else I.length>0&&cc(G,I,w,U),$t&&At.render(w),lc(m,w,U);k!==null&&(T.updateMultisampleRenderTarget(k),T.updateRenderTargetMipmap(k)),w.isScene===!0&&w.onAfterRender(x,w,U),pe.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],nt===!0&&it.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Bo(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){G&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const dt=Z.update(w),yt=w.material;yt.visible&&m.push(w,dt,yt,H,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const dt=Z.update(w),yt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Gt.copy(dt.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(yt)){const xt=dt.groups;for(let Lt=0,Nt=xt.length;Lt<Nt;Lt++){const Mt=xt[Lt],ne=yt[Mt.materialIndex];ne&&ne.visible&&m.push(w,dt,ne,H,Gt.z,Mt)}}else yt.visible&&m.push(w,dt,yt,H,Gt.z,null)}}const st=w.children;for(let dt=0,yt=st.length;dt<yt;dt++)Bo(st[dt],U,H,G)}function lc(w,U,H,G){const I=w.opaque,st=w.transmissive,dt=w.transparent;f.setupLightsView(H),nt===!0&&it.setGlobalState(x.clippingPlanes,H),G&&Tt.viewport(C.copy(G)),I.length>0&&fr(I,U,H),st.length>0&&fr(st,U,H),dt.length>0&&fr(dt,U,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function cc(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Xi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?hr:Yn,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const st=f.state.transmissionRenderTarget[G.id],dt=G.viewport||C;st.setSize(dt.z,dt.w);const yt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(X),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),$t&&At.render(H);const xt=x.toneMapping;x.toneMapping=hi;const Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),nt===!0&&it.setGlobalState(x.clippingPlanes,G),fr(w,H,G),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,ne=U.length;Mt<ne;Mt++){const me=U[Mt],_e=me.object,je=me.geometry,se=me.material,wt=me.group;if(se.side===vn&&_e.layers.test(G.layers)){const On=se.side;se.side=$e,se.needsUpdate=!0,hc(_e,H,G,je,se,wt),se.side=On,se.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}x.setRenderTarget(yt),x.setClearColor(X,j),Lt!==void 0&&(G.viewport=Lt),x.toneMapping=xt}function fr(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let I=0,st=w.length;I<st;I++){const dt=w[I],yt=dt.object,xt=dt.geometry,Lt=G===null?dt.material:G,Nt=dt.group;yt.layers.test(H.layers)&&hc(yt,U,H,xt,Lt,Nt)}}function hc(w,U,H,G,I,st){w.onBeforeRender(x,U,H,G,I,st),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(x,U,H,G,w,st),I.transparent===!0&&I.side===vn&&I.forceSinglePass===!1?(I.side=$e,I.needsUpdate=!0,x.renderBufferDirect(H,U,G,I,w,st),I.side=mi,I.needsUpdate=!0,x.renderBufferDirect(H,U,G,I,w,st),I.side=vn):x.renderBufferDirect(H,U,G,I,w,st),w.onAfterRender(x,U,H,G,I,st)}function pr(w,U,H){U.isScene!==!0&&(U=xe);const G=Et.get(w),I=f.state.lights,st=f.state.shadowsArray,dt=I.state.version,yt=St.getParameters(w,I.state,st,U,H),xt=St.getProgramCacheKey(yt);let Lt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?B:_).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",It),Lt=new Map,G.programs=Lt);let Nt=Lt.get(xt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===dt)return dc(w,yt),Nt}else yt.uniforms=St.getUniforms(w),w.onBeforeCompile(yt,x),Nt=St.acquireProgram(yt,xt),Lt.set(xt,Nt),G.uniforms=yt.uniforms;const Mt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=it.uniform),dc(w,yt),G.needsLights=Ud(w),G.lightsStateVersion=dt,G.needsLights&&(Mt.ambientLightColor.value=I.state.ambient,Mt.lightProbe.value=I.state.probe,Mt.directionalLights.value=I.state.directional,Mt.directionalLightShadows.value=I.state.directionalShadow,Mt.spotLights.value=I.state.spot,Mt.spotLightShadows.value=I.state.spotShadow,Mt.rectAreaLights.value=I.state.rectArea,Mt.ltc_1.value=I.state.rectAreaLTC1,Mt.ltc_2.value=I.state.rectAreaLTC2,Mt.pointLights.value=I.state.point,Mt.pointLightShadows.value=I.state.pointShadow,Mt.hemisphereLights.value=I.state.hemi,Mt.directionalShadowMap.value=I.state.directionalShadowMap,Mt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Mt.spotShadowMap.value=I.state.spotShadowMap,Mt.spotLightMatrix.value=I.state.spotLightMatrix,Mt.spotLightMap.value=I.state.spotLightMap,Mt.pointShadowMap.value=I.state.pointShadowMap,Mt.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function uc(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=lo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function dc(w,U){const H=Et.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ld(w,U,H,G,I){U.isScene!==!0&&(U=xe),T.resetTextureUnits();const st=U.fog,dt=G.isMeshStandardMaterial?U.environment:null,yt=k===null?x.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ds,xt=(G.isMeshStandardMaterial?B:_).get(G.envMap||dt),Lt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Mt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let _e=hi;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_e=x.toneMapping);const je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=je!==void 0?je.length:0,wt=Et.get(G),On=f.state.lights;if(nt===!0&&(_t===!0||w!==y)){const hn=w===y&&G.id===S;it.setState(G,w,hn)}let re=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==On.state.version||wt.outputColorSpace!==yt||I.isBatchedMesh&&wt.batching===!1||!I.isBatchedMesh&&wt.batching===!0||I.isBatchedMesh&&wt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&wt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&wt.instancing===!1||!I.isInstancedMesh&&wt.instancing===!0||I.isSkinnedMesh&&wt.skinning===!1||!I.isSkinnedMesh&&wt.skinning===!0||I.isInstancedMesh&&wt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&wt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&wt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&wt.instancingMorph===!1&&I.morphTexture!==null||wt.envMap!==xt||G.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==it.numPlanes||wt.numIntersection!==it.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==Nt||wt.morphTargets!==Mt||wt.morphNormals!==ne||wt.morphColors!==me||wt.toneMapping!==_e||wt.morphTargetsCount!==se)&&(re=!0):(re=!0,wt.__version=G.version);let yn=wt.currentProgram;re===!0&&(yn=pr(G,U,I));let Yi=!1,Qe=!1,Fs=!1;const ye=yn.getUniforms(),An=wt.uniforms;if(Tt.useProgram(yn.program)&&(Yi=!0,Qe=!0,Fs=!0),G.id!==S&&(S=G.id,Qe=!0),Yi||y!==w){Tt.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),Rf(at),Cf(at),ye.setValue(O,"projectionMatrix",at)):ye.setValue(O,"projectionMatrix",w.projectionMatrix),ye.setValue(O,"viewMatrix",w.matrixWorldInverse);const Qn=ye.map.cameraPosition;Qn!==void 0&&Qn.setValue(O,Ut.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Qe=!0,Fs=!0)}if(I.isSkinnedMesh){ye.setOptional(O,I,"bindMatrix"),ye.setOptional(O,I,"bindMatrixInverse");const hn=I.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ye.setValue(O,"boneTexture",hn.boneTexture,T))}I.isBatchedMesh&&(ye.setOptional(O,I,"batchingTexture"),ye.setValue(O,"batchingTexture",I._matricesTexture,T),ye.setOptional(O,I,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",I._indirectTexture,T),ye.setOptional(O,I,"batchingColorTexture"),I._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",I._colorsTexture,T));const Bs=H.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&Ct.update(I,H,yn),(Qe||wt.receiveShadow!==I.receiveShadow)&&(wt.receiveShadow=I.receiveShadow,ye.setValue(O,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=xt,An.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),Qe&&(ye.setValue(O,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&Dd(An,Fs),st&&G.fog===!0&&ct.refreshFogUniforms(An,st),ct.refreshMaterialUniforms(An,G,q,J,f.state.transmissionRenderTarget[w.id]),lo.upload(O,uc(wt),An,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lo.upload(O,uc(wt),An,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(O,"center",I.center),ye.setValue(O,"modelViewMatrix",I.modelViewMatrix),ye.setValue(O,"normalMatrix",I.normalMatrix),ye.setValue(O,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const hn=G.uniformsGroups;for(let Qn=0,ti=hn.length;Qn<ti;Qn++){const fc=hn[Qn];D.update(fc,yn),D.bind(fc,yn)}}return yn}function Dd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ud(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,U,H){Et.get(w.texture).__webglTexture=U,Et.get(w.depthTexture).__webglTexture=H;const G=Et.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=Et.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){k=w,A=U,R=H;let G=!0,I=null,st=!1,dt=!1;if(w){const xt=Et.get(w);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(xt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(xt.__hasExternalTextures)T.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&Et.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Nt=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?I=Nt[U][H]:I=Nt[U],st=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?I=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?I=Nt[H]:I=Nt,C.copy(w.viewport),z.copy(w.scissor),F=w.scissorTest}else C.copy(mt).multiplyScalar(q).floor(),z.copy(Dt).multiplyScalar(q).floor(),F=ee;if(Tt.bindFramebuffer(O.FRAMEBUFFER,I)&&G&&Tt.drawBuffers(w,I),Tt.viewport(C),Tt.scissor(z),Tt.setScissorTest(F),st){const xt=Et.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,H)}else if(dt){const xt=Et.get(w.texture),Lt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,Lt)}S=-1},this.readRenderTargetPixels=function(w,U,H,G,I,st,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Tt.bindFramebuffer(O.FRAMEBUFFER,yt);try{const xt=w.texture,Lt=xt.format,Nt=xt.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-I&&O.readPixels(U,H,G,I,Bt.convert(Lt),Bt.convert(Nt),st)}finally{const xt=k!==null?Et.get(k).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,G,I,st,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){const xt=w.texture,Lt=xt.format,Nt=xt.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&H>=0&&H<=w.height-I){Tt.bindFramebuffer(O.FRAMEBUFFER,yt);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,st.byteLength,O.STREAM_READ),O.readPixels(U,H,G,I,Bt.convert(Lt),Bt.convert(Nt),0);const ne=k!==null?Et.get(k).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,ne);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Af(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,st),O.deleteBuffer(Mt),O.deleteSync(me),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),I=Math.floor(w.image.width*G),st=Math.floor(w.image.height*G),dt=U!==null?U.x:0,yt=U!==null?U.y:0;T.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,dt,yt,I,st),Tt.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,G=null,I=0){w.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],I=arguments[3]||0,H=null);let st,dt,yt,xt,Lt,Nt,Mt,ne,me;const _e=w.isCompressedTexture?w.mipmaps[I]:w.image;H!==null?(st=H.max.x-H.min.x,dt=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,xt=H.min.x,Lt=H.min.y,Nt=H.isBox3?H.min.z:0):(st=_e.width,dt=_e.height,yt=_e.depth||1,xt=0,Lt=0,Nt=0),G!==null?(Mt=G.x,ne=G.y,me=G.z):(Mt=0,ne=0,me=0);const je=Bt.convert(U.format),se=Bt.convert(U.type);let wt;U.isData3DTexture?(T.setTexture3D(U,0),wt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),wt=O.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),wt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const On=O.getParameter(O.UNPACK_ROW_LENGTH),re=O.getParameter(O.UNPACK_IMAGE_HEIGHT),yn=O.getParameter(O.UNPACK_SKIP_PIXELS),Yi=O.getParameter(O.UNPACK_SKIP_ROWS),Qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Nt);const Fs=w.isDataArrayTexture||w.isData3DTexture,ye=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const An=Et.get(w),Bs=Et.get(U),hn=Et.get(An.__renderTarget),Qn=Et.get(Bs.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,hn.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<yt;ti++)Fs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,I,Nt+ti),w.isDepthTexture?(ye&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,I,me+ti),O.blitFramebuffer(xt,Lt,st,dt,Mt,ne,st,dt,O.DEPTH_BUFFER_BIT,O.NEAREST)):ye?O.copyTexSubImage3D(wt,I,Mt,ne,me+ti,xt,Lt,st,dt):O.copyTexSubImage2D(wt,I,Mt,ne,me+ti,xt,Lt,st,dt);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(wt,I,Mt,ne,me,st,dt,yt,je,se,_e.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,I,Mt,ne,me,st,dt,yt,je,_e.data):O.texSubImage3D(wt,I,Mt,ne,me,st,dt,yt,je,se,_e):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,I,Mt,ne,st,dt,je,se,_e.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,I,Mt,ne,_e.width,_e.height,je,_e.data):O.texSubImage2D(O.TEXTURE_2D,I,Mt,ne,st,dt,je,se,_e);O.pixelStorei(O.UNPACK_ROW_LENGTH,On),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),I===0&&U.generateMipmaps&&O.generateMipmap(wt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,G=null,I=0){return w.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],I=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,G,I)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){A=0,R=0,k=null,Tt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Du extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yl,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new N;class go{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tr extends Ns{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hs;const Ws=new N,us=new N,ds=new N,fs=new Vt,Xs=new Vt,Uu=new ge,Nr=new N,qs=new N,Or=new N,ch=new Vt,ma=new Vt,hh=new Vt;class Fr extends Oe{constructor(t=new tr){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zv(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new go(n,3,0,!1)),hs.setAttribute("uv",new go(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Br(Nr.set(-.5,-.5,0),ds,o,us,s,r),Br(qs.set(.5,-.5,0),ds,o,us,s,r),Br(Or.set(.5,.5,0),ds,o,us,s,r),ch.set(0,0),ma.set(1,0),hh.set(1,1);let a=t.ray.intersectTriangle(Nr,qs,Or,!1,Ws);if(a===null&&(Br(qs.set(-.5,.5,0),ds,o,us,s,r),ma.set(0,1),a=t.ray.intersectTriangle(Nr,Or,qs,!1,Ws),a===null))return;const l=t.ray.origin.distanceTo(Ws);l<t.near||l>t.far||e.push({distance:l,point:Ws.clone(),uv:sn.getInterpolation(Ws,Nr,qs,Or,ch,ma,hh,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Br(i,t,e,n,s,r){fs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Xs.x=r*fs.x-s*fs.y,Xs.y=s*fs.x+r*fs.y):Xs.copy(fs),i.copy(t),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(Uu)}class zl extends We{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ae,h=Ae,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ps=new ge,uh=new ge,zr=[],dh=new qi,Hv=new ge,Ks=new Ht,$s=new Ki;class zi extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),dh.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(dh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),$s.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),uh.multiplyMatrices(n,ps),Ks.matrixWorld=uh,Ks.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){const l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zl(new Float32Array(s*this.count),s,this.count,Il,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ur extends Ns{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new N,_o=new N,fh=new ge,Ys=new _u,Hr=new Ki,ga=new N,ph=new N;class Gv extends Oe{constructor(t=new Ye,e=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vo.fromBufferAttribute(e,s-1),_o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vo.distanceTo(_o);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;fh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),M=h.getX(v+1),b=Gr(this,t,Ys,l,f,M);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Gr(this,t,Ys,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=Gr(this,t,Ys,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Gr(this,t,Ys,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(vo.fromBufferAttribute(o,s),_o.fromBufferAttribute(o,r),e.distanceSqToSegment(vo,_o,ga,ph)>n)return;ga.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ga);if(!(l<t.near||l>t.far))return{distance:l,point:ph.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const mh=new N,gh=new N;class Po extends Gv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mh.fromBufferAttribute(e,s),gh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mh.distanceTo(gh);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xn extends We{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(p,2));function M(){const x=new N,L=new N;let A=0;const R=(e-t)/n;for(let k=0;k<=r;k++){const S=[],y=k/r,C=y*(e-t)+t;for(let z=0;z<=s;z++){const F=z/s,X=F*l+a,j=Math.sin(X),$=Math.cos(X);L.x=C*j,L.y=-y*n+m,L.z=C*$,d.push(L.x,L.y,L.z),x.set(j,R,$).normalize(),u.push(x.x,x.y,x.z),p.push(F,1-y),S.push(g++)}v.push(S)}for(let k=0;k<s;k++)for(let S=0;S<r;S++){const y=v[S][k],C=v[S+1][k],z=v[S+1][k+1],F=v[S][k+1];(t>0||S!==0)&&(h.push(y,C,F),A+=3),(e>0||S!==r-1)&&(h.push(C,z,F),A+=3)}c.addGroup(f,A,0),f+=A}function b(x){const L=g,A=new Vt,R=new N;let k=0;const S=x===!0?t:e,y=x===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let z=0;z<=s;z++){const X=z/s*l+a,j=Math.cos(X),$=Math.sin(X);R.x=S*$,R.y=m*y,R.z=S*j,d.push(R.x,R.y,R.z),u.push(0,y,0),A.x=j*.5+.5,A.y=$*.5*y+.5,p.push(A.x,A.y),g++}for(let z=0;z<s;z++){const F=L+z,X=C+z;x===!0?h.push(X,X+1,F):h.push(X+1,X,F),k+=3}c.addGroup(f,k,x===!0?1:2),f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Vr=new N,Wr=new N,va=new N,Xr=new sn;class ko extends Ye{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ao*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=Xr;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Xr.getNormal(va),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const b=(M+1)%3,x=d[M],L=d[b],A=Xr[h[M]],R=Xr[h[b]],k=`${x}_${L}`,S=`${L}_${x}`;S in u&&u[S]?(va.dot(u[S].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(R.x,R.y,R.z)),u[S]=null):k in u||(u[k]={index0:c[M],index1:c[b],normal:va.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Vr.fromBufferAttribute(a,v),Wr.fromBufferAttribute(a,m),p.push(Vr.x,Vr.y,Vr.z),p.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new Pe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Hl extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,p=new N,g=new Vt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const M=f+m,b=M,x=M+n+1,L=M+n+2,A=M+1;a.push(b,x,A),a.push(x,L,A)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class or extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,u=new N,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const M=[],b=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+x,1-b),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const b=h[f][M+1],x=h[f][M],L=h[f+1][M],A=h[f+1][M+1];(f!==0||o>0)&&p.push(b,x,A),(f!==n-1||l<Math.PI)&&p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);const Vv={relation:"review_and_readiness",standardCodes:["6.NS.5","6.NS.6","7.NS.1"],summary:"Grade 6 6.NS.5 and 6.NS.6 review; readiness for 7.NS.1"},Wv={relation:"supports",standardCodes:["7.NS.1b"],summary:"7.NS.1b"},Iu={signed_position:{id:"signed_position",title:"Signed position",alignment:Vv},integer_addition:{id:"integer_addition",title:"Integer addition",alignment:Wv}},Xv=["signed_position","integer_addition"];function vh(i){const t=Iu[i];if(!t)throw new Error(`Unknown skill id: ${String(i)}`);return t}function bs(i,t){if(!Number.isSafeInteger(t))throw new RangeError(`${i} must be a safe integer, got ${t}`)}function Nu(i){bs("start",i.start),bs("change",i.change);const t=i.start+i.change;return bs("destination",t),t}function qv(i){return i.skill==="signed_position"?(bs("targetElevation",i.targetElevation),i.targetElevation):(i.distractorQuantity!==void 0&&bs("distractorQuantity",i.distractorQuantity),Nu(i))}function Kv(i){return i.skill==="signed_position"?(bs("targetElevation",i.targetElevation),[{name:"target",value:i.targetElevation}]):[{name:"start",value:i.start},{name:"change",value:i.change},{name:"destination",value:Nu(i)}]}function $v(i){if(!Number.isSafeInteger(i.min)||!Number.isSafeInteger(i.max)||i.min>i.max)throw new RangeError("Teacher range must be integers with min <= max.")}function Yv(i,t){$v(t);const e=Kv(i).filter(n=>n.value<t.min||n.value>t.max).map(n=>n.name);return{status:e.length===0?"eligible":"deferred, out of range",outOfRange:e}}function jv(i,t){return Math.min(i,t)<=0&&0<=Math.max(i,t)}function Zv(i,t){return Math.abs(i-t)===1&&jv(i,t)}function Jv(i,t,e){const n=[],s=t===-e&&e!==0;if(i.skill==="signed_position")s&&e<0&&n.push("sign_ignored"),s&&e>0&&n.push("sign_reversed");else{const r=i.start<0&&e>0||i.start>0&&e<0;s&&r&&e<0&&n.push("sign_ignored"),s&&r&&e>0&&n.push("sign_reversed"),s&&!r&&n.push("wrong_sign_no_crossing");const o=Math.abs(i.start)+Math.abs(i.change);t===o&&o!==Math.abs(e)&&n.push("distance_from_zero");const a=Math.abs(Math.abs(i.start)-Math.abs(i.change));i.start<0&&i.change<0&&t>0&&t===a&&n.push("two_negatives_positive");const l=i.distractorQuantity;l!==void 0&&l!==0&&t===e+l&&n.push("extra_quantity_added")}return Zv(t,e)&&n.push("off_by_one_at_zero"),n}function Qv(i,t){if(!Number.isSafeInteger(t))throw new RangeError("answer must be a safe integer");const e=qv(i),n=t===e;let s=null,r=[];if(!n){const o=Jv(i,t,e);s=o.length===1?o[0]:"unknown",o.length>1&&(r=o),o.length===1&&o[0]==="sign_ignored"&&(r=["distance_from_zero"])}return{skill:i.skill,expected:e,answer:t,correct:n,signedError:t-e,misconception:s,consistentWith:r}}function t_(i,t,e){return{eligibility:Yv(i,t),evaluation:Qv(i,e)}}const wl=Xv,Ou=["signed_position"],Gl={schemaVersion:1,activeSkills:["signed_position"],numberRange:{min:-5,max:5},allowedRepresentations:["integer"],scaffold:{level:"none",elevationReadout:!1},advancement:{policy:"manual"}},_h=i=>typeof i=="number"&&Number.isInteger(i);function Vl(i){const t=[];if(typeof i!="object"||i===null||Array.isArray(i))return{ok:!1,errors:["Configuration must be a JSON object."]};const e=i;e.schemaVersion!==1&&t.push("schemaVersion must be 1.");const n=e.activeSkills;if(!Array.isArray(n)||!n.every(l=>typeof l=="string"))t.push("activeSkills must be a list of skill ids.");else{const l=n.filter(h=>!wl.includes(h));l.length&&t.push(`Unknown skill id: ${l.join(", ")}.`);const c=n.filter(h=>wl.includes(h)&&!Ou.includes(h));c.length&&t.push(`${c.join(", ")} has no activity in this slice yet (its card is still in review), so it cannot be switched on.`)}const s=e.numberRange;!s||!_h(s.min)||!_h(s.max)?t.push("numberRange needs whole-number min and max."):(s.min>s.max&&t.push("numberRange.min must not exceed max."),(s.min<-100||s.max>100)&&t.push("numberRange must stay within -100 to 100."));const r=e.allowedRepresentations;(!Array.isArray(r)||!r.every(l=>typeof l=="string")||r.length===0)&&t.push("allowedRepresentations must be a non-empty list.");const o=e.scaffold;(!o||!["none","light","full"].includes(o.level))&&t.push("scaffold.level must be none, light or full."),(!o||typeof o.elevationReadout!="boolean")&&t.push("scaffold.elevationReadout must be true or false.");const a=e.advancement;return(!a||!["manual","automatic"].includes(a.policy))&&t.push("advancement.policy must be manual or automatic."),t.length?{ok:!1,errors:t}:{ok:!0,config:{schemaVersion:1,activeSkills:[...new Set(n)],numberRange:{min:s.min,max:s.max},allowedRepresentations:[...r],scaffold:{level:o.level,elevationReadout:o.elevationReadout},advancement:{policy:a.policy}}}}const Fu="plumbline.teacher.v1";function e_(i){try{const t=i?.getItem(Fu);if(t){const e=Vl(JSON.parse(t));if(e.ok)return e.config}}catch{}return structuredClone(Gl)}function n_(i,t){if(!i)return!1;try{return i.setItem(Fu,JSON.stringify(t)),!0}catch{return!1}}const Bu=["id","time_iso","stream","kind","skill_id","standard_component","data_json"],i_=["run_id",...Bu];function s_(i){const t=i==null?"":String(i);return/[",\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function zu(i,t){const e=[(t!==void 0?i_:Bu).join(",")];for(const n of i){const s=[n.id,new Date(n.t).toISOString(),n.stream,n.kind,n.skillId,n.standardComponent,JSON.stringify(n.data)];e.push((t!==void 0?[n.run??t??"",...s]:s).map(s_).join(","))}return e.join(`\r
`)+`\r
`}function Hu(i,t,e,n=new Date,s){const r={format:"plumbline-export",version:1,exportedAt:n.toISOString(),stream:i,note:i==="bot"?"Scripted test play. Never student data.":"Play and tool-use events. A completed build or one correct attempt is not evidence of mastery.",config:e,...s?{run:s}:{},events:t};return JSON.stringify(r,null,2)}function _a(i,t,e){const n=new Blob([t],{type:e}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=i,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}const E={AIR:0,BLUEROCK:1,TURF:2,LOAM:3,DUNE:4,WATER:5,STALK:6,FERN:7,BOARD:8,CUTSTONE:9,GLASS:10,LANTERN:11,POST:12,TICK:13,ZERO:14,PLUS5:15,MINUS5:16,PRESS:17,RAIL:19,RAIL_UPPER:24,SHINGLE:25,HEARTH:56,HEARTH_OUT:57,DOCK:20,LADDER:21,STONE_PANEL:22,PLAN:23,DISPATCH:52,RETURN:53,MOUNT:54,PRESS_BUTTON:55},gi=-11,Wl=10,co=30,Gu=i=>co+(i-gi),Vu=i=>i>=co&&i<=co+(Wl-gi)?i-co+gi:null,W={BLUEROCK:0,TURF_TOP:1,TURF_SIDE:2,LOAM:3,DUNE:4,WATER:5,STALK_SIDE:6,STALK_TOP:7,FERN:8,BOARD:9,CUTSTONE:10,GLASS:11,LANTERN:12,POST:13,TICK:14,ZERO:15,PLUS5:16,MINUS5:17,POST_CAP:18,PRESS_TOP:19,PRESS_SIDE:20,PANEL:21,RAIL:22,DOCK_TOP:23,DOCK_SIDE:24,LADDER:25,GHOST:26,STONE_PANEL:37,SHINGLE:65,HEARTH_SIDE:66,HEARTH_TOP:67,HEARTH_OUT_SIDE:68,HEARTH_OUT_TOP:69,NOTCH0:38,DISPATCH:60,RETURN:61,MOUNT:62,PRESS_BUTTON:63,PLAN:64},Qt=(i,t,e,n,s,r,o,a,l,c={})=>({id:i,name:t,kind:e,solid:n,hardness:s,tiles:{top:r,side:o,bottom:a},emissive:!1,drop:i,chip:l,...c}),Jt=[],te=i=>{Jt[i.id]=i};te(Qt(0,"Air","none",!1,0,0,0,0,[0,0,0]));te(Qt(1,"Bluerock","opaque",!0,2,W.BLUEROCK,W.BLUEROCK,W.BLUEROCK,[.35,.42,.55]));te(Qt(2,"Turf","opaque",!0,.6,W.TURF_TOP,W.TURF_SIDE,W.LOAM,[.25,.6,.4],{drop:E.LOAM}));te(Qt(3,"Loam","opaque",!0,.5,W.LOAM,W.LOAM,W.LOAM,[.6,.35,.22]));te(Qt(4,"Dune","opaque",!0,.4,W.DUNE,W.DUNE,W.DUNE,[.9,.82,.55]));te(Qt(5,"Water","translucent",!1,1/0,W.WATER,W.WATER,W.WATER,[.2,.45,.8]));te(Qt(6,"Stalk","opaque",!0,1.5,W.STALK_TOP,W.STALK_SIDE,W.STALK_TOP,[.5,.25,.35]));te(Qt(7,"Fernleaf","cutout",!0,.2,W.FERN,W.FERN,W.FERN,[.2,.5,.25]));te(Qt(8,"Board","opaque",!0,1,W.BOARD,W.BOARD,W.BOARD,[.85,.65,.3]));te(Qt(9,"Cutstone","opaque",!0,2.5,W.CUTSTONE,W.CUTSTONE,W.CUTSTONE,[.6,.58,.7]));te(Qt(10,"Glass","translucent",!0,.4,W.GLASS,W.GLASS,W.GLASS,[.7,.9,.95]));te(Qt(11,"Lantern","opaque",!0,.5,W.LANTERN,W.LANTERN,W.LANTERN,[1,.8,.3],{emissive:!0}));te(Qt(12,"Gauge post","opaque",!0,1/0,W.POST_CAP,W.POST,W.POST_CAP,[.6,.6,.65],{glow:.5}));te(Qt(13,"Gauge mark","opaque",!0,1/0,W.POST_CAP,W.TICK,W.POST_CAP,[.6,.6,.65],{glow:.5}));te(Qt(14,"Gauge zero","opaque",!0,1/0,W.POST_CAP,W.ZERO,W.POST_CAP,[.84,.86,.9],{glow:.5}));te(Qt(15,"Gauge +5","opaque",!0,1/0,W.POST_CAP,W.PLUS5,W.POST_CAP,[.3,.6,.9],{glow:.5}));te(Qt(16,"Gauge -5","opaque",!0,1/0,W.POST_CAP,W.MINUS5,W.POST_CAP,[.9,.7,.2],{glow:.5}));te(Qt(17,"Stone press","opaque",!0,1/0,W.PRESS_TOP,W.PRESS_SIDE,W.PRESS_TOP,[.4,.42,.5],{device:"press",glow:.4}));te(Qt(18,"Hoist panel","opaque",!0,1/0,W.PRESS_TOP,W.PANEL,W.PRESS_TOP,[.4,.42,.5],{device:"hoist"}));te(Qt(19,"Guide rail","opaque",!0,1/0,W.RAIL,W.RAIL,W.RAIL,[.35,.37,.45]));te(Qt(20,"Receiving dock","opaque",!0,.5,W.DOCK_TOP,W.DOCK_SIDE,W.DOCK_SIDE,[.9,.75,.2],{device:"dock",glow:.5}));te(Qt(24,"Guide rail (upper)","translucent",!0,1/0,W.GHOST,W.GHOST,W.GHOST,[.35,.37,.45]));te(Qt(21,"Rungs","cutout",!1,.2,W.LADDER,W.LADDER,W.LADDER,[.6,.4,.2],{climbable:!0}));te(Qt(22,"Quarry panel","opaque",!0,.5,W.STONE_PANEL,W.STONE_PANEL,W.STONE_PANEL,[.82,.8,.9],{drop:0,glow:.62}));te(Qt(23,"Plan marker","translucent",!1,.12,W.PLAN,W.PLAN,W.PLAN,[.4,.9,.95],{drop:0}));for(let i=gi;i<=Wl;i++){const t=W.NOTCH0+(i-gi);te(Qt(Gu(i),`Stop button ${i>0?"+":""}${i}`,"opaque",!0,1/0,t,t,t,[.6,.6,.65],{device:"control",glow:.55}))}te(Qt(52,"Dispatch button","opaque",!0,1/0,W.DISPATCH,W.DISPATCH,W.DISPATCH,[.3,.8,.4],{device:"control",glow:.55}));te(Qt(53,"Return button","opaque",!0,1/0,W.RETURN,W.RETURN,W.RETURN,[.38,.33,.77],{device:"control",glow:.55}));te(Qt(54,"Mount button","opaque",!0,1/0,W.MOUNT,W.MOUNT,W.MOUNT,[.3,.7,.4],{device:"control",glow:.55}));te(Qt(55,"Press button","opaque",!0,1/0,W.PRESS_BUTTON,W.PRESS_BUTTON,W.PRESS_BUTTON,[.6,.6,.7],{device:"control",glow:.55}));te(Qt(25,"Shingle","opaque",!0,.6,W.SHINGLE,W.SHINGLE,W.SHINGLE,[.62,.58,.5],{drop:E.BLUEROCK}));te(Qt(56,"Hearth","opaque",!0,1.2,W.HEARTH_TOP,W.HEARTH_SIDE,W.HEARTH_TOP,[.9,.5,.2],{glow:.95,drop:56}));te(Qt(57,"Hearth (out)","opaque",!0,1.2,W.HEARTH_OUT_TOP,W.HEARTH_OUT_SIDE,W.HEARTH_OUT_TOP,[.4,.38,.42],{drop:56}));const xo=i=>Jt[i]?.solid===!0,ar=i=>i===E.AIR||i===E.WATER||i===E.PLAN,Ie=i=>Jt[i]?.name??"?",dn=.3,ya=1.8,r_=1.62,fn=1e-5,o_=30,a_=9.2,oe=1/60,yh=2,In={forward:0,right:0,jump:!1,sprint:!1};class Lo{constructor(t){this.world=t}x=0;y=60;z=0;vx=0;vy=0;vz=0;yaw=0;pitch=0;onGround=!1;inWater=!1;onLadder=!1;stepPop=0;solidAt(t,e,n){return e<0?!0:(this.world.isColumnLoaded(t,n)||this.world.ensureColumn(t>>4,n>>4),xo(this.world.getBlock(t,e,n)))}collides(t,e,n){const s=Math.floor(t-dn+fn),r=Math.floor(t+dn-fn),o=Math.floor(e+fn),a=Math.floor(e+ya-fn),l=Math.floor(n-dn+fn),c=Math.floor(n+dn-fn);for(let h=o;h<=a;h++)for(let d=l;d<=c;d++)for(let u=s;u<=r;u++)if(this.solidAt(u,h,d))return!0;return!1}teleport(t,e,n){this.x=t,this.y=e,this.z=n,this.vx=this.vy=this.vz=0;for(let s=0;s<128&&this.collides(this.x,this.y,this.z);s++)this.y+=1;this.onGround=!1,this.stepPop=0}eye(){return[this.x,this.y+r_,this.z]}forwardVec(){const t=Math.cos(this.pitch);return[-Math.sin(this.yaw)*t,Math.sin(this.pitch),-Math.cos(this.yaw)*t]}moveX(t){return this.x+=t,this.collides(this.x,this.y,this.z)?(this.x=t>0?Math.floor(this.x+dn-fn)-dn:Math.floor(this.x-dn+fn)+1+dn,!0):!1}moveZ(t){return this.z+=t,this.collides(this.x,this.y,this.z)?(this.z=t>0?Math.floor(this.z+dn-fn)-dn:Math.floor(this.z-dn+fn)+1+dn,!0):!1}moveY(t){return this.y+=t,this.collides(this.x,this.y,this.z)?(this.y=t>0?Math.floor(this.y+ya-fn)-ya:Math.floor(this.y+fn)+1,!0):!1}step(t,e){for(;e>oe*1.001;)this.step(t,oe),e-=oe;const n=this.world,s=b=>n.getBlock(Math.floor(this.x),Math.floor(this.y+b),Math.floor(this.z));this.inWater=s(.4)===E.WATER||n.isWaterAt(Math.floor(this.x),Math.floor(this.y+.4),Math.floor(this.z));const r=b=>Jt[n.getBlock(Math.floor(this.x),Math.floor(this.y+b),Math.floor(this.z))]?.climbable===!0;this.onLadder=r(.01)||r(1)||r(-.4);const o=(t.sprint?6:4.3)*(this.inWater?.55:1)*(this.onLadder?.5:1);let a=t.right,l=t.forward;const c=Math.hypot(a,l);c>1&&(a/=c,l/=c);const h=Math.sin(this.yaw),d=Math.cos(this.yaw),u=(a*d-l*h)*o,p=(-a*h-l*d)*o,g=this.onGround||this.inWater?22:5,v=Math.min(1,g*e);this.vx+=(u-this.vx)*v,this.vz+=(p-this.vz)*v,this.onLadder?this.vy=t.jump?yh:t.descend?-yh:0:this.inWater?(this.vy-=8*e,t.jump&&(this.vy+=(3.6-this.vy)*Math.min(1,6*e)),this.vy<-3&&(this.vy=-3)):(this.vy-=o_*e,this.vy<-50&&(this.vy=-50),t.jump&&this.onGround&&(this.vy=a_));const m=this.onGround,f=Math.max(1,Math.ceil(Math.max(Math.abs(this.vx),Math.abs(this.vz))*e/.4));for(let b=0;b<f;b++){const x=this.vx*e/f,L=this.vz*e/f;this.moveX(x)&&(this.tryStep(x,0,m)||(this.vx=0)),this.moveZ(L)&&(this.tryStep(0,L,m)||(this.vz=0))}this.onGround=!1;const M=Math.max(1,Math.ceil(Math.abs(this.vy)*e/.4));for(let b=0;b<M;b++)if(this.moveY(this.vy*e/M)){this.vy<0&&(this.onGround=!0),this.vy=0;break}!this.onGround&&this.vy<=0&&this.collides(this.x,this.y-.02,this.z)&&(this.onGround=!0),this.stepPop*=Math.max(0,1-12*e)}tryStep(t,e,n){if(!n||this.vy>.5)return!1;const s=this.y+1.0001,r=this.x+Math.sign(t)*.02,o=this.z+Math.sign(e)*.02;return this.collides(r,s,o)||this.collides(this.x,s,this.z)?!1:(this.y=s,this.x=r,this.z=o,this.stepPop-=1,!0)}}const Ft=16,Hi=128,Mo=Hi/Ft,Ce=4,kt=48,l_=-11,xa=kt+Ce*l_,c_=-5;function ho(i){return(i-kt)/Ce}function h_(i){return kt+i*Ce}function u_(i,t,e=1){const n=i.world.terrain.features,s=n.quarry,r=[[n.spawn.x-3,n.spawn.z+4],[(n.ridge.x0+n.ridge.x1)/2,n.ridge.zc],[n.harbor.ax+4,-10],[s.x,s.z-s.half-3],[s.x+.5,s.z],[s.x+.5,s.z+30],[n.spawn.x,n.spawn.z]],o=i.player,a=(()=>{let y=e>>>0||1;return()=>(y=Math.imul(y,1664525)+1013904223>>>0)/4294967296})(),l=Math.round(t/oe);let c=0,h=0,d=0,u=0,p=null,g=1/0,v=-1/0,m=0,f=0,M=0,b=o.x,x=o.z,L=o.x,A=o.z,R=0,k=1,S=1.2;for(let y=0;y<l;y++){const[C,z]=r[c%r.length],F=C-o.x,X=z-o.z;if(Math.hypot(F,X)<1.5){c++,h++;continue}let j=Math.atan2(-F,-X);R>0&&(j+=k*S,R--);let $=j-o.yaw;$=Math.atan2(Math.sin($),Math.cos($)),o.yaw+=Math.max(-.12,Math.min(.12,$));const J={forward:1,right:0,jump:o.inWater||y%45===0&&a()<.5,sprint:!1};J.jump&&!o.inWater&&m++;const q=Math.hypot(o.vx,o.vz);o.onGround&&q<.8&&(J.jump=!0,m++),i.tick(J,!1);const rt=Math.hypot(o.x-b,o.z-x);if(d+=rt,b=o.x,x=o.z,o.collides(o.x,o.y,o.z)&&(u++,p??=`step ${y} at (${o.x.toFixed(2)}, ${o.y.toFixed(2)}, ${o.z.toFixed(2)})`),g=Math.min(g,o.y),v=Math.max(v,o.y),y%30===29){const ht=Math.hypot(o.x-L,o.z-A);ht<.4&&R===0?(f++,M=Math.max(M,f/2),R=75+15*f,f%2===1&&(k=a()<.5?-1:1),S=.9+.25*Math.min(f,6)):ht>=.4&&(f=0),L=o.x,A=o.z}}return{seconds:t,steps:l,distance:Math.round(d*100)/100,waypointsReached:h,waypoints:r.length,overlapSteps:u,firstOverlap:p,fellBelowWorld:g<.5,minFeetY:Math.round(g*100)/100,maxFeetY:Math.round(v*100)/100,longestStuckSeconds:M,jumps:m,endedOnGround:o.onGround}}const So=[-5,0,5],Wu=[-4,-3,-2,-1,1,2,3,4];class d_{constructor(t){this.env=t}id="quarry_hoist";skillId="signed_position";pending=null;learningChecks=[];handle(t,e){t.type==="dispatch"?this.onDispatch(t):t.type==="arrived"&&this.onArrived(t,e)}onDispatch(t){const e=this.env.visible(),n=this.env.now(),s=this.env.setupStartedAt();this.pending={stop:t.stop,staged:t.staged,startedAt:n,setupMs:s===null?0:Math.max(0,n-s),actionsAtDispatch:this.env.hoist.actions,readoutShown:e.readoutShown,readoutValue:e.readoutValue}}onArrived(t,e){const n=this.pending;this.pending=null;const s=t.dock;if(!n||!s)return;const r=e.world.planeToUnits(s.plane),o=(b,x,L={})=>this.emit(e,b,n,s,r,{status:x,...L});if(t.outcome==="obstructed")return o("hoist_obstructed","shaft blocked; not a math error",{stoppedAtPlane:t.plane});if(t.outcome==="unmounted")return o("hoist_unmounted","the dock was not mounted yet; not a math observation",{stoppedAtPlane:t.plane});if(!Number.isInteger(r))return o("dock_between_marks","this dock sits between gauge marks, so the tray can never level with it; integer positions only in this slice");const a=[],l=["gauge_labels_-5_0_+5","physical_stop_selector (the control)","vertical_gauge_ruler (a reasoning aid)"];So.includes(r)&&a.push(`gauge_label_${r}`),n.readoutShown&&(l.push("hud_elevation_readout"),a.push("hud_readout_available"));const c={skill:"signed_position",zeroReference:"Harbor gauge post, zero mark (declared zero; the tide moves past it)",targetElevation:r,unit:"gauge units"},h=t_(c,e.config.numberRange,n.stop),d=h.eligibility.status,u=t.priorRuns.length>0;let p,g;if(d!=="eligible")g="deferred, out of range";else{const x=!So.includes(r)&&a.length===0&&!u&&!t.ambiguous;p=x?"learning_check":"tool_use",g=x?"first independent observation":t.ambiguous?"several docks stand and none aligned; which one was meant is unknown (tool use)":u?"supported repair or later run (not independent)":"tool use (a matching number was visible)"}p==="learning_check"&&this.learningChecks.push(r);const v=this.learningChecks.some(b=>b!==0&&Math.sign(b)!==Math.sign(this.learningChecks[0])),m=e.world.planeToUnits(this.env.hoist.homePlane),f=[];n.stop!==r&&n.stop===r-m&&f.push("possible displacement entered as position: the setting equals the climb from the press");const M={skillId:"signed_position",alignment:vh("signed_position").alignment,context:c,visibleScaffolds:l,response:{kind:"setting",value:n.stop},evaluation:h.evaluation,eligibility:d,hintsUsed:0,elapsedMs:Math.max(0,n.setupMs+(this.env.now()-n.startedAt)),source:this.env.source(),evidenceKind:p};this.emit(e,"learning_event",n,s,r,{learning:M,status:g,outcome:t.outcome,firstSettingForThisDock:t.priorRuns[0]??n.stop,attemptNo:t.priorRuns.length+1,repair:u,visibleMatchingTokens:a,ambiguousDock:t.ambiguous,freshContextCheck:this.learningChecks.length===0?"none yet":v?"recorded (opposite side of zero)":"pending (needs a project on the other side of zero)",actionsInRun:Math.max(0,this.env.hoist.actions-n.actionsAtDispatch),untaggedNotes:f,cargoStillStrapped:t.outcome==="missed"||t.outcome==="empty_run"})}emit(t,e,n,s,r,o){const a={kind:e,skillId:"signed_position",standardComponent:vh("signed_position").alignment.summary,data:{project:{...this.env.project(s.key),dockPlaneY:s.plane,dockUnits:r,zeroPlaneY:t.world.zero.planeY,unitVoxels:t.world.zero.unitVoxels},setting:n.stop,staged:n.staged,...o}};t.emit(a)}snapshot(){return{pending:this.pending?{...this.pending}:null,checks:[...this.learningChecks]}}restore(t){if(!t)return;const e=t.pending,n=e&&Number.isInteger(e.stop)&&Number.isFinite(e.startedAt)&&Number.isFinite(e.setupMs)&&Number.isFinite(e.staged)&&Number.isFinite(e.actionsAtDispatch);this.pending=n?e:null,this.learningChecks=Array.isArray(t.checks)?t.checks.filter(s=>Number.isInteger(s)):[]}}function dr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ys(i,t,e){let n=Math.imul(t|0,374761393)^Math.imul(e|0,668265263)^Math.imul(i|0,2246822519);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function xh(i){return i*i*(3-2*i)}function nr(i,t,e){const n=Math.floor(t),s=Math.floor(e),r=xh(t-n),o=xh(e-s),a=ys(i,n,s),l=ys(i,n+1,s),c=ys(i,n,s+1),h=ys(i,n+1,s+1);return a+(l-a)*r+(c-a)*o+(a-l-c+h)*r*o}function f_(i,t,e){return nr(i,t,e)*.62+nr(i+101,t*2.1,e*2.1)*.28+nr(i+202,t*4.3,e*4.3)*.1}function vs(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}const Mh=3,p_=-11,Ma=10,ln=4,qr=12,Xl=3,Kn=2,ql=8,Xu=2,Sh=.35,m_=1,g_=(i,t,e)=>`${i},${t},${e}`;class Do{constructor(t,e,n){this.world=t,this.tray=e,this.homePlane=n,this.plane=n}state="home";plane;stop=null;runStop=null;staged=0;bay=0;carrying=!1;stageLimit=()=>null;pendingOutput=0;obstructed=!1;active=null;docks=new Map;actions=0;clock=0;history=new Map;targetPlane=0;listener=()=>{};dockSides(){const t=this.tray;return[{x:t.x+1,z:t.z},{x:t.x,z:t.z+1},{x:t.x,z:t.z-1}]}syncDocks(){const t=new Set,e=kt+Ce*(Ma+2);for(const n of this.dockSides())for(let s=this.homePlane;s<e;s++){if(this.world.getBlock(n.x,s,n.z)!==E.DOCK)continue;const r=g_(n.x,s,n.z);if(t.add(r),!this.docks.has(r)){let o=this.history.get(r);o||(o=[],this.history.set(r,o)),this.docks.set(r,{key:r,x:n.x,y:s,z:n.z,plane:s+1,mounted:!1,stock:0,mounting:0,runs:o}),this.active=r}}for(const n of[...this.docks.keys()])t.has(n)||(this.docks.delete(n),this.active===n&&(this.active=[...this.docks.keys()].pop()??null))}canPlaceDock(t,e,n){return!this.dockSides().some(s=>s.x===t&&s.z===n)||e+1<kt+Ce*c_||e>=kt+Ce*Ma?!1:xo(this.world.getBlock(t,e-1,n))}activeDock(){return this.active?this.docks.get(this.active)??null:null}mountDock(t){const e=this.docks.get(t);return!e||e.mounted||e.mounting>0?!1:(e.mounting=ql,this.actions++,!0)}setStop(t){return this.state!=="home"||!Number.isInteger(t)||t<p_||t>Ma?!1:(this.stop=t,this.actions++,!0)}canDispatch(){return this.state==="home"&&this.stop!==null}dispatch(){return this.canDispatch()?(this.runStop=this.stop,this.targetPlane=kt+Ce*this.stop,this.state="outbound",this.obstructed=!1,this.actions++,this.listener({type:"dispatch",stop:this.stop,staged:this.staged,dock:this.activeDock(),targetPlane:this.targetPlane}),this.targetPlane<=this.plane&&this.arrive(),!0):!1}returnTray(){return this.state!=="held"?!1:(this.state="returning",this.actions++,!0)}pickupFromTray(){return this.state!=="home"||this.carrying||this.staged<1?!1:(this.staged--,this.carrying=!0,this.actions++,!0)}pickupFromBay(){return this.carrying||this.bay<1?!1:(this.bay--,this.carrying=!0,this.actions++,!0)}depositToBay(){return!this.carrying||this.bay>=qr?!1:(this.bay++,this.carrying=!1,this.actions++,!0)}putOnTray(){return this.state!=="home"||!this.carrying||this.staged>=ln?!1:(this.staged++,this.carrying=!1,this.actions++,!0)}pickupFromRack(t){const e=this.docks.get(t);return!e||this.carrying||e.stock<1?!1:(e.stock--,this.carrying=!0,this.actions++,!0)}deliverToDock(t){const e=this.docks.get(t);return!e||!this.carrying?!1:(e.stock++,this.carrying=!1,this.actions++,!0)}placeOutput(){const t=this.stageLimit();if(this.state==="home"&&this.staged<ln&&(t===null||this.staged<t))this.staged++;else if(this.bay<qr)this.bay++;else return!1;return!0}canStartPress(){if((this.state==="home"?ln-this.staged:0)+(qr-this.bay)-this.pendingOutput<=0)return!1;const e=this.stageLimit();return!(e!==null&&this.state==="home"&&this.staged>=e)}dockForStop(t){if(t===null)return null;const e=kt+Ce*t;for(const n of this.docks.values())if(n.plane===e)return n;return null}pressOutputToBay(){this.bay<qr?this.bay++:this.pendingOutput++}pressOutput(){this.placeOutput()||this.pendingOutput++}setDown(t){return!this.carrying||!t()?!1:(this.carrying=!1,this.actions++,!0)}pickUpFromWorld(){return this.carrying?!1:(this.carrying=!0,this.actions++,!0)}trayCellSolid(t){return xo(this.world.getBlock(this.tray.x,t,this.tray.z))}arrive(){const t=Math.round(this.plane),e=[...this.docks.values()].filter(h=>h.plane===t),n=e.find(h=>h.mounted)??null;let s;const r=this.staged;this.obstructed?s="obstructed":n?s=r>0?"delivered":"empty_run":e.length>0?s="unmounted":s="missed";const o=n??e[0]??this.activeDock(),a=!n&&e.length===0&&this.docks.size>1,l=o?[...o.runs]:[];o&&(s==="delivered"||s==="empty_run"||s==="missed")&&o.runs.push(this.runStop),this.listener({type:"arrived",stop:this.runStop,staged:r,outcome:s,plane:this.plane,targetPlane:this.targetPlane,dock:o,ambiguous:a,priorRuns:l}),s==="delivered"&&n?(n.stock+=this.staged,this.staged=0,this.state="returning"):this.state="held"}update(t){for(this.clock+=t;this.pendingOutput>0&&this.placeOutput();)this.pendingOutput--;for(const e of this.docks.values())e.mounting>0&&(e.mounting=Math.max(0,e.mounting-t),e.mounting===0&&(e.mounted=!0,this.listener({type:"dock_mounted",dock:e})));if(this.state==="outbound"){const e=Math.min(this.plane+Mh*t,this.targetPlane),n=Math.floor(e+1-1e-9);if(n>Math.floor(this.plane+1-1e-9)&&this.trayCellSolid(n)){this.plane=n-1,this.obstructed=!0,this.arrive();return}this.plane=e,this.plane>=this.targetPlane&&this.arrive()}else this.state==="returning"&&(this.plane=Math.max(this.homePlane,this.plane-Mh*t),this.plane<=this.homePlane&&(this.state="home",this.runStop=null,this.listener({type:"returned"})))}isBusy(){return this.state==="outbound"||this.state==="returning"}serialize(){return{state:this.state,plane:this.plane,stop:this.stop,runStop:this.runStop,staged:this.staged,bay:this.bay,carrying:this.carrying,pendingOutput:this.pendingOutput,active:this.active,actions:this.actions,history:[...this.history.entries()],docks:[...this.docks.values()]}}restore(t){if(t){this.plane=t.plane,this.state=t.state,this.stop=t.stop,this.runStop=t.runStop,this.staged=t.staged,this.bay=t.bay,this.carrying=t.carrying,this.pendingOutput=t.pendingOutput??0,this.active=t.active,this.actions=Number.isFinite(t.actions)?t.actions:0,this.history=new Map;for(const e of Array.isArray(t.history)?t.history:[])Array.isArray(e)&&typeof e[0]=="string"&&Array.isArray(e[1])&&this.history.set(e[0],e[1].filter(n=>Number.isInteger(n)));this.docks=new Map(t.docks.map(e=>{const n=this.history.get(e.key)??(Array.isArray(e.runs)?e.runs:[]);return this.history.set(e.key,n),[e.key,{...e,runs:n}]})),this.state==="outbound"&&(this.targetPlane=kt+Ce*(this.runStop??this.homePlane))}}}const Sa=Ft*Ft*Ft,Kr=(i,t,e)=>(t*Ft+e)*Ft+i;class v_{palette=[0];data=null;get(t){return this.data===null?this.palette[0]:this.palette[this.data[t]]}set(t,e){let n=this.palette.indexOf(e);if(this.data===null){if(n===0)return;this.data=new Uint8Array(Sa)}n===-1&&(this.palette.length>=256&&this.repalette(),n=this.palette.length,this.palette.push(e)),this.data[t]=n}isUniform(t){return this.data===null?t===void 0||this.palette[0]===t:!1}repalette(){if(this.data===null)return;const t=new Map,e=[];for(let n=0;n<Sa;n++){const s=this.palette[this.data[n]];let r=t.get(s);r===void 0&&(r=e.length,e.push(s),t.set(s,r)),this.data[n]=r}this.palette=e}tryCollapse(){if(this.data===null)return;const t=this.data[0];for(let e=1;e<Sa;e++)if(this.data[e]!==t)return;this.palette=[this.palette[t]],this.data=null}}const wh=kt-20;class __{constructor(t,e=!1){this.seed=t,this.arena=e;const n=dr(t^2654435769),s=o=>Math.round((n()-.5)*2*o);this.features={harbor:{x:0,z:0,ax:26+s(3),az:20+s(2)},ridge:{zc:-14+s(5),x0:48+s(6),x1:104+s(8)},quarry:{x:s(8),z:62+s(6),half:18,floorY:wh},gauge:{x:21,z:0,bottomY:kt-20,topY:kt+20},spawn:{x:53,z:6},pocket:{x0:17,x1:21,z0:3,z1:7},supplies:{outcrop:[[55,2],[56,2],[55,3],[56,3]],stalks:[[56,11],[58,11]]},tide:{rect:{x0:-40,x1:80,z0:-34,z1:44},pile:{x:45,z:5},area:{x0:10,x1:58,z0:-6,z1:18},flats:{x0:14,x1:23,z0:0,z1:12}},hoist:{rail:{x:0,z:0},tray:{x:0,z:0},press:{x:0,z:0},homePlane:xa,railTopY:kt+40,controls:{x:0,z0:0},shaft:{x0:0,x1:-1,z0:0,z1:-1},ladder:{x:0,z:0}}};const r=this.features.quarry;if(this.features.hoist.rail={x:r.x-4,z:r.z-4},this.features.hoist.tray={x:r.x-3,z:r.z-4},this.features.hoist.press={x:r.x-3,z:r.z-5},this.features.hoist.shaft={x0:r.x-9,x1:r.x+2,z0:r.z-9,z1:r.z+2},this.features.hoist.ladder={x:r.x+2,z:r.z-5},this.features.hoist.controls={x:r.x-7,z0:r.z-7},e){this.features.tide.rect=null,this.features.pocket={x0:0,x1:-1,z0:0,z1:-1},this.features.supplies={outcrop:[],stalks:[]};const o=this.features.hoist;o.rail={x:0,z:0},o.tray={x:1,z:0},o.press={x:1,z:-1},o.controls={x:-3,z0:-3},this.features.gauge.x=-8,this.features.gauge.z=0}}features;harborR(t,e){const n=this.features.harbor,s=(t-n.x)/n.ax,r=(e-n.z)/n.az;return Math.sqrt(s*s+r*r)+(nr(this.seed+7,t/11,e/11)-.5)*.28}beachWeight(t,e){if(this.arena)return 0;const n=1-vs(10,17,Math.abs(e-6));return vs(14,22,t)*(1-vs(58,74,t))*n}beachHeight(t){return t<=46?kt-2+(t-22)*.18:Math.min(56,kt+2.3+(t-46)*.5)}surface(t,e){if(this.arena)return{h:xa,top:E.BLUEROCK,sub:E.BLUEROCK,carved:!0};const n=this.seed,s=this.features;let r=kt+4+(f_(n,t/48,e/48)-.5)*7;r=Math.max(r,kt+4.5);const o=r,a=this.harborR(t,e);a<1&&(r-=Math.pow(1-a*a,.7)*(o-(kt-11)));const l=s.ridge,c=(e-l.zc)/11,h=vs(l.x0-12,l.x0+8,t)*(1-vs(l.x1-8,l.x1+12,t));r+=17*Math.exp(-c*c)*h*(.85+.3*nr(n+3,t/9,e/9));const d=this.beachWeight(t,e);d>0&&(r=r*(1-d)+this.beachHeight(t)*d);let u=Math.max(2,Math.floor(r));const p=s.pocket;if(t>=p.x0&&t<=p.x1&&e>=p.z0&&e<=p.z1){const x=Math.hypot(t-(p.x0+p.x1)/2,e-(p.z0+p.z1)/2);u=Math.max(u,kt-1+(x<=.5?2:x<=1.5?1:0))}let g=!1;const v=s.quarry,m=Math.max(Math.abs(t-v.x),Math.abs(e-v.z));if(m<=v.half){const x=m<=9?v.floorY:v.floorY+4*Math.ceil((m-9)/2);x<u&&(u=x,g=!0)}if(Math.abs(t-v.x)<=2&&e>=v.z+9){const x=v.floorY+(e-(v.z+9));x<u&&(u=x,g=!0)}const f=s.hoist.shaft;t>=f.x0&&t<=f.x1&&e>=f.z0&&e<=f.z1&&(u=xa,g=!0);let M=E.TURF,b=E.LOAM;if(g||u>=kt+14)M=E.BLUEROCK,b=E.BLUEROCK;else if(d>.05&&u<=kt+3){M=E.SHINGLE,b=E.SHINGLE;const x=this.features.pocket;t>=x.x0&&t<=x.x1&&e>=x.z0&&e<=x.z1&&(M=E.DUNE,b=E.DUNE)}else(u<kt||u<=kt+2&&a<1.35)&&(M=E.DUNE,b=E.DUNE);return{h:u,top:M,sub:b,carved:g}}heightAt(t,e){return this.surface(t,e).h}treeAt(t,e,n){if(n.top!==E.TURF||n.h>kt+10||this.beachWeight(t,e)>.05)return 0;const s=this.features.gauge;if(Math.abs(t-s.x)<6&&Math.abs(e-s.z)<6)return 0;const r=this.features.spawn;return Math.abs(t-r.x)<5&&Math.abs(e-r.z)<5||ys(this.seed+55,t,e)>.013?0:4+Math.floor(ys(this.seed+56,t,e)*2)}fillColumn(t,e,n){const s=t*Ft,r=e*Ft,o=this.features.gauge;for(let c=0;c<Ft;c++)for(let h=0;h<Ft;h++){const d=this.surface(s+h,r+c);for(let u=0;u<d.h;u++){let p=E.BLUEROCK;u===d.h-1?p=d.top:u>=d.h-4&&(p=d.sub),n(h,u,c,p)}}for(let c=r-2;c<r+Ft+2;c++)for(let h=s-2;h<s+Ft+2;h++){const d=this.surface(h,c),u=this.treeAt(h,c,d);if(!u)continue;const p=(g,v,m,f)=>{g>=s&&g<s+Ft&&m>=r&&m<r+Ft&&v<Hi&&n(g-s,v,m-r,f)};for(let g=0;g<u;g++)p(h,d.h+g,c,E.STALK);for(let g=u-2;g<=u+1;g++){const v=g>=u?1:2;for(let m=-v;m<=v;m++)for(let f=-v;f<=v;f++)v===2&&Math.abs(f)===2&&Math.abs(m)===2||f===0&&m===0&&g<u||p(h+f,d.h+g,c+m,E.FERN)}}const a=this.features.hoist,l=[[a.press.x,a.homePlane,a.press.z,E.PRESS]];for(let c=a.homePlane;c<=a.railTopY;c++){const h=c-kt;let d=E.RAIL;h%4===0&&(d=h===0?E.ZERO:h===20?E.PLUS5:h===-20?E.MINUS5:E.TICK),(d===E.RAIL&&h>=8||h>=24&&d!==E.RAIL)&&(d=E.RAIL_UPPER),l.push([a.rail.x,c,a.rail.z,d])}for(let c=-11;c<=10;c++){const h=c+11;l.push([a.controls.x,a.homePlane+Math.floor(h/8),a.controls.z0+h%8,Gu(c)])}if(l.push([a.controls.x,a.homePlane+3,a.controls.z0,E.DISPATCH],[a.controls.x,a.homePlane+3,a.controls.z0+1,E.RETURN],[a.controls.x,a.homePlane+3,a.controls.z0+2,E.MOUNT],[a.controls.x,a.homePlane+3,a.controls.z0+3,E.PRESS_BUTTON]),!this.arena)for(let c=a.homePlane;c<wh;c++)l.push([a.ladder.x,c,a.ladder.z,E.LADDER]),(c-a.homePlane)%6===5&&l.push([a.ladder.x+1,c,a.ladder.z,E.LANTERN]);if(!this.arena){const c=this.features.supplies;for(const[h,d]of c.outcrop){const u=this.heightAt(h,d);l.push([h,u,d,E.SHINGLE],[h,u+1,d,E.SHINGLE])}for(const[h,d]of c.stalks){const u=this.heightAt(h,d);l.push([h,u,d,E.STALK],[h,u+1,d,E.STALK],[h,u+2,d,E.STALK])}}for(const[c,h,d,u]of l)Math.floor(c/Ft)===t&&Math.floor(d/Ft)===e&&n(c-s,h,d-r,u);if(Math.floor(o.x/Ft)===t&&Math.floor(o.z/Ft)===e){const c=o.x-s,h=o.z-r;for(let d=o.bottomY;d<=o.topY;d++){const u=d-kt;let p=E.POST;u%4===0&&(p=u===0?E.ZERO:u===20?E.PLUS5:u===-20?E.MINUS5:E.TICK),n(c,d,h,p)}}}spawnPoint(){const t=this.features.spawn;return{x:t.x+.5,y:this.heightAt(t.x,t.z),z:t.z+.5}}}class y_{constructor(t,e){this.cx=t,this.cz=e;for(let n=0;n<Mo;n++)this.sections.push(new v_)}sections=[]}const mn=(i,t)=>(i+32768)*65536+(t+32768),wo=i=>[Math.floor(i/65536)-32768,i%65536-32768];class Uo{constructor(t,e=!1){this.seed=t,this.terrain=new __(t,e)}terrain;columns=new Map;edits=new Map;onDirty=null;editVersion=0;tideLevel=kt;lastKey=-1;lastCol=null;hasColumn(t,e){return this.columns.has(mn(t,e))}columnCount(){return this.columns.size}columnKeys(){return this.columns.keys()}ensureColumn(t,e){const n=mn(t,e);let s=this.columns.get(n);if(s)return s;s=new y_(t,e),this.terrain.fillColumn(t,e,(o,a,l,c)=>s.sections[a>>4].set(Kr(o,a&15,l),c));const r=this.edits.get(n);if(r)for(const[o,a]of r)this.setLocal(s,o,a);for(const o of s.sections)o.tryCollapse();return this.columns.set(n,s),this.lastKey=-1,this.lastCol=null,s}unloadColumn(t,e){const n=mn(t,e);this.columns.delete(n),this.lastKey===n&&(this.lastKey=-1,this.lastCol=null)}setLocal(t,e,n){const s=e>>8;t.sections[s>>4].set(Kr(e&15,s&15,e>>4&15),n)}col(t,e){const n=mn(t,e);if(n===this.lastKey)return this.lastCol;const s=this.columns.get(n)??null;return this.lastKey=n,this.lastCol=s,s}getSection(t,e,n){const s=this.columns.get(mn(t,n));return s?s.sections[e]??null:null}getBlock(t,e,n){if(e<0)return E.BLUEROCK;if(e>=Hi)return E.AIR;const s=this.col(t>>4,n>>4);return s?s.sections[e>>4].get(Kr(t&15,e&15,n&15)):E.AIR}isWaterAt(t,e,n){const s=this.terrain.features.tide.rect;if(!s||t<s.x0||t>=s.x1||n<s.z0||n>=s.z1||e+.5>=this.tideLevel)return!1;const r=this.getBlock(t,e,n);return r===E.AIR||r===E.WATER||!Jt[r]?.solid}groundPlane(t,e,n){this.ensureColumn(t>>4,e>>4);for(let s=Math.min(Hi-1,Math.floor(n));s>=0;s--)if(Jt[this.getBlock(t,s,e)]?.solid)return s+1;return 0}forEachPlaced(t){for(const[e,n]of this.edits){const[s,r]=wo(e);for(const[o,a]of n)a!==E.AIR&&t(s*Ft+(o&15),o>>8,r*Ft+(o>>4&15),a)}}isColumnLoaded(t,e){return this.columns.has(mn(t>>4,e>>4))}getBlockEnsured(t,e,n){return this.ensureColumn(t>>4,n>>4),this.getBlock(t,e,n)}setBlock(t,e,n,s,r=!0){if(e<0||e>=Hi)return!1;const o=t>>4,a=n>>4,l=this.ensureColumn(o,a),c=Kr(t&15,e&15,n&15),h=l.sections[e>>4];if(h.get(c)===s)return!1;if(h.set(c,s),r){const d=mn(o,a);let u=this.edits.get(d);u||(u=new Map,this.edits.set(d,u)),u.set((e*Ft+(n&15))*Ft+(t&15),s),this.editVersion++}return this.markDirty(t,e,n),!0}markDirty(t,e,n){if(!this.onDirty)return;const s=t&15,r=e&15,o=n&15,a=t>>4,l=n>>4,c=e>>4,h=s===0?[-1,0]:s===15?[0,1]:[0],d=r===0?[-1,0]:r===15?[0,1]:[0],u=o===0?[-1,0]:o===15?[0,1]:[0];for(const p of h)for(const g of d)for(const v of u){const m=c+g;m>=0&&m<Mo&&this.onDirty(a+p,m,l+v)}}editCount(){let t=0;for(const e of this.edits.values())t+=e.size;return t}serializeEdits(){const t={};for(const[e,n]of this.edits){const[s,r]=wo(e),o=[];for(const[a,l]of n)o.push(a,l);t[`${s},${r}`]=o}return t}loadEdits(t){this.edits.clear();for(const e of Object.keys(t)){const[n,s]=e.split(",").map(Number),r=t[e],o=new Map;for(let a=0;a+1<r.length;a+=2)o.set(r[a],r[a+1]);this.edits.set(mn(n,s),o)}for(const[e,n]of this.columns){const s=this.edits.get(e);if(s)for(const[r,o]of s)this.setLocal(n,r,o)}}storeHash(){let t=2166136261;const e=[...this.columns.keys()].sort((n,s)=>n-s);for(const n of e){const s=this.columns.get(n);t=Math.imul(t^n&65535,16777619)>>>0;for(const r of s.sections)if(r.data===null)t=Math.imul(t^r.palette[0]+1e3,16777619)>>>0;else for(let o=0;o<r.data.length;o++)t=Math.imul(t^r.palette[r.data[o]],16777619)>>>0}return t.toString(16)}}const wa=(i,t,e)=>`${i},${t},${e}`;class Io{cells=new Map;add(t,e,n){this.cells.set(wa(t,e,n),{x:t,y:e,z:n})}remove(t,e,n){return this.cells.delete(wa(t,e,n))}has(t,e,n){return this.cells.has(wa(t,e,n))}list(){return[...this.cells.values()]}size(){return this.cells.size}serialize(){return[...this.cells.keys()]}restore(t){if(this.cells.clear(),!!Array.isArray(t))for(const e of t){const n=typeof e=="string"?/^(-?\d+),(-?\d+),(-?\d+)$/.exec(e):null;n&&this.add(Number(n[1]),Number(n[2]),Number(n[3]))}}cellsFor(t,e){const n=[...e],s=(r,o)=>(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2;return this.list().filter(r=>{let o=n[0];for(const a of n)s(r,a)<s(r,o)&&(o=a);return o.key===t.key})}demandFor(t,e,n,s,r){const o=this.cellsFor(t,e);if(o.length===0)return null;const a=o.filter(c=>{const h=n(c.x,c.y,c.z);return h===E.PLAN||h===E.AIR}).length,l=t.stock+s+(r?1:0);return{planned:o.length,unfilled:a,supplied:l,order:Math.max(0,a-l),stillToArrive:Math.max(0,a-t.stock-(r?1:0))}}}function x_(i,t,e,n){const s=t.docks.get(n),r=s?i.demandFor(s,t.docks.values(),e,t.staged,t.carrying):null;return{planned:r?.planned??null,unfilled:r?.unfilled??null,supplied:r?.supplied??null,order:r?.order??null}}function qu(i,t,e){const n=t.dockForStop(t.stop)??t.activeDock();if(!n)return null;const s=i.demandFor(n,t.docks.values(),e,t.staged,t.carrying);return s?s.stillToArrive:null}function bo(i,t){const e=t-gi;return{x:i.controls.x,y:i.homePlane+Math.floor(e/8),z:i.controls.z0+e%8}}const Ku=i=>({x:i.controls.x,y:i.homePlane+3,z:i.controls.z0}),$u=i=>({x:i.controls.x,y:i.homePlane+3,z:i.controls.z0+1}),Yu=i=>({x:i.controls.x,y:i.homePlane+3,z:i.controls.z0+2}),ju=i=>({x:i.controls.x,y:i.homePlane+3,z:i.controls.z0+3});Array.from({length:Wl-gi+1},(i,t)=>gi+t);const M_=6,rn=2,$r=3;class Zu{world=new Uo(1,!0);player;hoist;events=[];t=0;actions=0;blocks=0;units=0;stalled=!1;plan=new Io;projectCells=[];bluerock=0;pressRemaining=0;deliveredAt=null;by={};cat="other";constructor(){for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)this.world.ensureColumn(n,e);const t=this.world.terrain.features.hoist;this.hoist=new Do(this.world,t.tray,t.homePlane),this.hoist.listener=e=>{this.events.push(e),e.type==="arrived"&&e.outcome==="delivered"&&(this.deliveredAt=this.t)},this.hoist.stageLimit=()=>qu(this.plan,this.hoist,(e,n,s)=>this.world.getBlock(e,n,s)),this.player=new Lo(this.world)}get floor(){return this.world.terrain.features.hoist.homePlane}dockPlaneFor(t){return kt+Ce*t}homeSpot(){return[-.5,2.5]}buildProject(t,e=!0){this.units=t;const n=this.dockPlaneFor(t)-1;for(let s=this.floor;s<n;s++)this.world.setBlock(rn,s,0,E.CUTSTONE,!1);if(this.world.setBlock(rn,n,0,E.DOCK,!1),e)for(let s=this.floor;s<=n;s++)this.world.setBlock($r,s,0,E.LADDER,!1);this.hoist.syncDocks(),this.resetRun()}buildPlan(t){const e=this.dock().y;this.projectCells=[];for(let n=0;n<t;n++)this.projectCells.push([rn,e+1+Math.floor(n/2),-1-n%2]);this.resetRun()}dock(){const t=this.hoist.activeDock();if(!t)throw new Error("no dock");return t}resetRun(){const t=this.hoist;t.state="home",t.plane=t.homePlane,t.stop=null,t.runStop=null;const e=this.projectCells.length>0;t.staged=e?0:ln,t.bay=0,t.pendingOutput=0,this.plan.restore([]);for(const[r,o,a]of this.projectCells)this.world.setBlock(r,o,a,E.PLAN,!1),this.plan.add(r,o,a);this.bluerock=Kn*this.projectCells.length,this.pressRemaining=0,this.by={},this.deliveredAt=null,t.carrying=!1,t.actions=0;for(const r of t.docks.values())r.stock=0,r.mounted=!1,r.mounting=0,r.runs.length=0;const[n,s]=this.homeSpot();this.player.teleport(n,this.floor,s),this.t=0,this.actions=0,this.blocks=0,this.events.length=0,this.stalled=!1}spent(){const t={};for(const[e,n]of Object.entries(this.by))t[e]=Math.round(n*10)/10;return{seconds:Math.round(this.t*100)/100,actions:this.actions,blocks:this.blocks,by:t}}tick(t=In){const e=this.player;t===In&&e.onGround&&!e.onLadder&&Math.abs(e.vx)+Math.abs(e.vz)+Math.abs(e.vy)<1e-4||e.step(t,oe),this.hoist.update(oe),this.pressRemaining>0&&(this.pressRemaining-=oe,this.pressRemaining<=0&&(this.pressRemaining=0,this.hoist.pressOutput())),this.t+=oe,this.by[this.cat]=(this.by[this.cat]??0)+oe}as(t,e){const n=this.cat;this.cat=t;try{return e()}finally{this.cat=n}}idle(t){const e=Math.round(t/oe);for(let n=0;n<e;n++)this.tick()}waitUntil(t,e=240){return this.as("waiting",()=>{const n=Math.round(e/oe);for(let s=0;s<n;s++){if(t())return!0;this.tick()}return this.stalled=!0,t()})}near(t,e,n){const[s,r,o]=this.player.eye();return Math.hypot(s-(t+.5),r-(e+.5),o-(n+.5))<=M_}features(){return this.featuresHoist()}featuresHoist(){return this.world.terrain.features.hoist}panel(t,e){const n=e??Yu(this.featuresHoist());if(!this.near(n.x,n.y,n.z))throw new Error("too far from the control");return this.actions++,this.as("panel presses",()=>this.idle(m_)),!!t()}setStop(t){return this.panel(()=>this.hoist.setStop(t),bo(this.features(),t))}dispatch(){return this.panel(()=>this.hoist.dispatch(),Ku(this.features()))}returnTray(){return this.panel(()=>this.hoist.returnTray(),$u(this.features()))}mount(){this.panel(()=>this.hoist.mountDock(this.dock().key)),this.as("mounting",()=>this.idle(ql))}mountClick(){this.panel(()=>this.hoist.mountDock(this.dock().key))}waitMounted(){this.waitUntil(()=>this.dock().mounted,60)}startPress(){return this.panel(()=>this.pressRemaining>0||this.bluerock<Kn||!this.hoist.canStartPress()?!1:(this.bluerock-=Kn,this.pressRemaining=Xl,!0),ju(this.featuresHoist()))}produce(t){for(let e=0;e<t;e++)this.waitUntil(()=>this.pressRemaining<=0&&this.hoist.canStartPress(),60),this.startPress();this.waitUntil(()=>this.pressRemaining<=0,60)}takeFromRack(){const t=this.dock();return this.hand(()=>this.hoist.pickupFromRack(t.key),t.x,t.y,t.z)}placePanel(t){const[e,n,s]=t;if(!this.hoist.carrying||!this.near(e,n,s))return!1;const r=this.player;return r.x+.3>e&&r.x-.3<e+1&&r.z+.3>s&&r.z-.3<s+1&&r.y+1.8>n&&r.y<n+1||!ar(this.world.getBlock(e,n,s))?!1:(this.actions++,this.world.setBlock(e,n,s,E.STONE_PANEL,!1),this.hoist.carrying=!1,this.blocks++,this.as("placing panels",()=>this.idle(Sh)),!0)}nextCell(){return this.projectCells.find(([t,e,n])=>this.world.getBlock(t,e,n)!==E.STONE_PANEL)??null}projectDone(){return this.projectCells.length>0&&this.nextCell()===null}hand(t,e,n,s){if(!this.near(e,n,s))throw new Error("too far to handle a component");this.actions++;const r=t();return r&&this.as("handling panels",()=>this.idle(Xu)),r}trayCell(){const t=this.hoist.tray;return[t.x,this.floor,t.z]}pressCell(){const t=this.world.terrain.features.hoist.press;return[t.x,this.floor,t.z]}pickupFromTray(){return this.hand(()=>this.hoist.pickupFromTray(),...this.trayCell())}pickupFromBay(){return this.hand(()=>this.hoist.pickupFromBay(),...this.pressCell())}depositToBay(){return this.hand(()=>this.hoist.depositToBay(),...this.pressCell())}putOnTray(){return this.hand(()=>this.hoist.putOnTray(),...this.trayCell())}deliverToDock(){const t=this.dock();return this.hand(()=>this.hoist.deliverToDock(t.key),t.x,t.y,t.z)}place(t,e,n,s){if(this.hoist.carrying)return!1;if(!this.near(t,e,n))throw new Error("too far to place");if(!ar(this.world.getBlock(t,e,n)))return!1;const r=this.player;return r.x+.3>t&&r.x-.3<t+1&&r.z+.3>n&&r.z-.3<n+1&&r.y+1.8>e&&r.y<e+1||s===E.DOCK&&!this.hoist.canPlaceDock(t,e,n)?!1:(this.actions++,this.world.setBlock(t,e,n,s,!1),s===E.DOCK&&this.hoist.syncDocks(),this.blocks++,this.as("building",()=>this.idle(Sh)),!0)}walkTo(t,e,n=.2,s=90){this.actions++;const r=this.player,o=Math.round(s/oe);for(let a=0;a<o;a++){const l=t-r.x,c=e-r.z,h=Math.hypot(l,c);if(h<n&&Math.hypot(r.vx,r.vz)<1.2)return;r.yaw=Math.atan2(-l,-c);const d=Math.min(1,.25+h/1.2);this.as("walking",()=>this.tick({forward:d,right:0,jump:!1,sprint:!1}))}this.stalled=!0}walkToLadderFoot(){const t=this.player;Math.abs(t.x-($r+.5))<.3&&Math.abs(t.z-.5)<.3||(this.walkTo($r+.5,t.z>=.5?2.5:-.9,.2),this.walkTo($r+.5,.5,.12))}climbToDock(){const t=this.dock();this.walkToLadderFoot(),this.actions++;const e=this.player,n=t.plane+.3;for(let s=0;s<120/oe&&e.y<n;s++)this.as("climbing",()=>this.tick({forward:0,right:0,jump:!0,sprint:!1}));this.walkTo(rn+.5,.5,.12),this.waitUntil(()=>e.onGround,5)}descendLadder(){const t=this.player;this.walkToLadderFoot(),this.actions++;for(let e=0;e<120/oe&&!(t.onGround&&t.y<=this.floor+.01);e++)this.as("climbing",()=>this.tick({forward:0,right:0,jump:!1,sprint:!1,descend:!0}))}dropToFloor(){const t=this.player;this.walkTo(rn+.5,1.9,.2,5),this.waitUntil(()=>t.onGround&&t.y<=this.floor+.01,10)}onDockTop(){const t=this.dock(),e=this.player;return e.onGround&&Math.abs(e.y-t.plane)<.05&&Math.floor(e.x)===t.x&&Math.floor(e.z)===t.z}atPress(){return this.player.y<=this.floor+.01}complete(){return this.dock().stock>=ln&&this.onDockTop()}}const jn=(i,t,e={})=>({route:t,target:i.units,completed:!i.stalled&&i.complete(),...i.spent(),...e});function Kl(i){const t=i.world.terrain.features.gauge;let e=-1;for(let r=0;r<128;r++)i.world.getBlockEnsured(t.x,r,t.z)===E.ZERO&&(e=r);const n=i.dock();let s=0;if(n.plane>=e)for(let r=e;r+Ce<=n.plane;r+=Ce)s++;else for(let r=e;r-Ce>=n.plane;r-=Ce)s--;return s}function $l(i){return Math.round((i.dock().plane-i.hoist.plane)/Ce)}const $i=i=>i.hoist.state!=="outbound",_i=i=>{for(let t=i.events.length-1;t>=0;t--){const e=i.events[t];if(e.type==="arrived")return e.outcome}return null};function Jn(i){const t=new Zu;return t.buildProject(i),t}function S_(i,t){const e=Jn(i),n=Kl(e);return e.mount(),e.setStop(n),e.dispatch(),e.climbToDock(),e.waitUntil(()=>e.complete(),120),jn(e,"thinker",{firstAttempt:e.events.filter(s=>s.type==="dispatch").length===1&&_i(e)==="delivered",setting:n,runs:1})}function w_(i,t){return t?i:So.reduce((e,n)=>Math.abs(n-i)<Math.abs(e-i)?n:e,So[0])}function bh(i,t=!1){const e=Jn(i),n=w_(i,t);e.mount(),e.setStop(n),e.dispatch(),e.waitUntil(()=>$i(e),120);const s=_i(e)==="delivered";return jn(e,t?"copier (readout on)":"copier",{completed:s,firstAttempt:s,setting:n,runs:1,note:s?"succeeded by copying a visible number: tool use":"missed: the copied number is not the dock's height"})}const b_=i=>i==="legal11"?[-5,-4,-3,-2,-1,0,1,2,3,4,5]:[...Wu];function Eh(i,t){const e=Jn(i);for(let n=0;n<ln;n++)e.pickupFromTray(),e.climbToDock(),e.deliverToDock(),n<ln-1&&(t==="ladder"?e.descendLadder():e.dropToFloor());return jn(e,t==="ladder"?"carry up the ladder, climb down":"carry up the ladder, drop back down")}function Th(i,t){const e=i.dock().y;return[rn,e-t,1+t]}function ms(i,t){for(const[e,n]of t)i.walkTo(e,n,.2)}function Ah(i,t){const e=Jn(i),n=e.dock().plane-e.floor;if(n<1)return jn(e,"stairs",{infeasible:"dock at floor level"});const s=[rn+.5,n+1.5],r=[[3.5,2.5],[3.5,s[1]],s],o=[[3.5,s[1]],[3.5,2.5],e.homeSpot()];if(t){ms(e,r);for(let a=n-1;a>=0;a--){const[l,c,h]=Th(e,a);e.place(l,c,h,E.CUTSTONE),e.walkTo(l+.5,h+.5,.2)}e.walkTo(rn+.5,.5,.2),ms(e,[s]),ms(e,o)}else for(let a=n-1;a>=0;a--){const[l,c,h]=Th(e,a);e.world.setBlock(l,c,h,E.CUTSTONE,!1)}for(let a=0;a<ln;a++)e.pickupFromTray(),ms(e,r),e.walkTo(rn+.5,.5,.2),e.deliverToDock(),a<ln-1&&(ms(e,[s]),ms(e,o));return jn(e,t?"carry up stairs (built first)":"carry up stairs (already built)")}function E_(i){const t=Jn(i);t.pickupFromTray();const e=t.player,n=t.place(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z),E.CUTSTONE);return jn(t,"pillar",{completed:!1,infeasible:n?void 0:"hands are full: no block can be placed while a bulky component is carried"})}function T_(i){const t=Jn(i);t.pickupFromTray();const e=t.pickupFromTray();return jn(t,"chest, bag or cart",{completed:!1,infeasible:e?void 0:"no container exists in this slice that takes a bulky component (a second pickup is refused while the first is in hand); open design question, not a measured result"})}function A_(i){const t=Jn(i),e=t.hoist.tray;t.mount(),t.player.teleport(e.x+.5,t.floor,e.z+.5),t.setStop(Math.max(1,i)),t.dispatch(),t.waitUntil(()=>t.hoist.state!=="outbound",120);const n=t.player.y-t.floor;return jn(t,"ride the tray",{completed:!1,infeasible:n<.5?`the tray has no collision and no seat: the player stayed ${n.toFixed(2)} voxels above the floor while it rose`:void 0})}function R_(i){const t=Jn(i);let e=0,n=0;for(let s=-11;s<=10;s++)t.resetRun(),t.mount(),t.setStop(s),t.dispatch(),t.waitUntil(()=>$i(t),120),n++,_i(t)==="delivered"&&e++;return{notches:n,successes:e}}function C_(i){const t=Jn(i);return jn(t,"dock relocated toward the press",{completed:!1,differentJob:!0,infeasible:"docks mount only from the quarry floor (-5) up, 24 voxels above the press, so there is no site near the press; building one costs more than the stairs route and would serve a different project"})}function yi(i,t){const e=new Zu;return e.buildProject(i),e.buildPlan(t),e}const xi=(i,t,e,n={})=>({route:t,target:i.units,completed:!i.stalled&&i.projectDone()&&i.onDockTop(),...i.spent(),by:i.spent().by??{},projectSize:e,deliveredAt:i.deliveredAt===null?null:Math.round(i.deliveredAt*10)/10,...n}),Yl=i=>Math.ceil(i/ln),lr=(i,t)=>Math.min(ln,i-t*ln);function jl(i){for(let t=0;t<40&&i.nextCell()&&i.takeFromRack();t++)i.placePanel(i.nextCell())}function Ju(i,t,e){for(let n=0;n<Yl(t);n++)n>0&&i.waitUntil(()=>i.hoist.state==="home",120),i.produce(lr(t,n)),n===0&&(i.waitMounted(),e()),i.dispatch()}function Rh(i,t,e=yi(i,t)){const n=Kl(e);return e.mountClick(),Ju(e,t,()=>e.setStop(n)),e.climbToDock(),e.waitUntil(()=>e.dock().stock>=Math.min(t,e.projectCells.length)||e.stalled,200),jl(e),xi(e,"thinker",t,{setting:n,firstAttempt:e.events.filter(s=>s.type==="dispatch").length===Yl(t)&&e.events.filter(s=>s.type==="arrived").every(s=>s.type==="arrived"&&s.outcome==="delivered")})}function Ch(i,t,e){const n=yi(i,t);n.produce(t);for(let s=0;s<t&&(n.hoist.staged>0?n.pickupFromTray():n.pickupFromBay());s++)n.climbToDock(),n.placePanel(n.nextCell()),s<t-1&&(e==="ladder"?n.descendLadder():n.dropToFloor());return xi(n,e==="ladder"?"carry up the ladder, climb down":"carry up the ladder, drop back down",t)}function Ph(i,t,e){const n=yi(i,t),s=n.dock().plane-n.floor,r=[rn+.5,s+1.5],o=[[3.5,2.5],[3.5,r[1]],r],a=[[3.5,r[1]],[3.5,2.5],n.homeSpot()],l=h=>[rn,n.dock().y-h,1+h],c=h=>h.forEach(([d,u])=>n.walkTo(d,u,.2));if(e){c(o);for(let h=s-1;h>=0;h--){const[d,u,p]=l(h);n.place(d,u,p,9),n.walkTo(d+.5,p+.5,.2)}n.walkTo(rn+.5,.5,.2),c([r]),c(a)}else for(let h=s-1;h>=0;h--){const[d,u,p]=l(h);n.world.setBlock(d,u,p,9,!1)}n.produce(t);for(let h=0;h<t&&(n.hoist.staged>0?n.pickupFromTray():n.pickupFromBay());h++)c(o),n.walkTo(rn+.5,.5,.2),n.placePanel(n.nextCell()),h<t-1&&(c([r]),c(a));return xi(n,e?"carry up stairs (built first)":"carry up stairs (already built)",t)}function P_(i,t,e,n){i.resetRun();const s=b_(e);i.mountClick(),i.produce(lr(t,0)),i.waitMounted();let r=0;for(;r<80&&(i.setStop(s[Math.floor(n()*s.length)]),i.dispatch(),i.waitUntil(()=>$i(i),120),_i(i)!=="delivered");r++)i.returnTray(),i.waitUntil(()=>i.hoist.state==="home",120);for(let o=1;o<Yl(t);o++)i.waitUntil(()=>i.hoist.state==="home",120),i.produce(lr(t,o)),i.dispatch();return i.climbToDock(),i.waitUntil(()=>i.dock().stock>=t||i.stalled,200),jl(i),xi(i,`guesser (${e})`,t,{runs:r+1})}function kh(i,t,e,n,s){const r=yi(i,t),o=dr(s),a=[],l=[];for(let d=0;d<n;d++){const u=P_(r,t,e,o);u.completed&&(a.push(u.seconds),l.push(u.runs??0))}const c=[...a].sort((d,u)=>d-u),h=d=>d[Math.floor(d.length/2)]??NaN;return{median:h(c),mean:a.reduce((d,u)=>d+u,0)/Math.max(1,a.length),p90:c[Math.floor(c.length*.9)]??NaN,trials:a.length,medianRuns:h([...l].sort((d,u)=>d-u))}}function No(i,t){i.climbToDock(),i.waitUntil(()=>i.dock().stock>=t||i.stalled,200),jl(i)}function Lh(i,t,e,n){const s=yi(i,t);s.mountClick(),s.produce(lr(t,0)),s.waitMounted();let r=e,o=0;for(;o<30&&(s.setStop(r),s.dispatch(),s.waitUntil(()=>$i(s),120),_i(s)!=="delivered");o++){const a=$l(s);s.returnTray(),s.waitUntil(()=>s.hoist.state==="home",120),r+=a}return No(s,t),xi(s,n,t,{runs:o+1,setting:r})}function k_(i,t){const e=yi(i,t);e.mountClick(),e.produce(lr(t,0)),e.waitMounted(),e.setStop(0),e.dispatch(),e.waitUntil(()=>$i(e),120);let n=1;if(_i(e)!=="delivered"){const s=Kl(e);e.returnTray(),e.waitUntil(()=>e.hoist.state==="home",120),e.setStop(s),e.dispatch(),n=2}return No(e,t),xi(e,"run once, read, retry",t,{runs:n})}function L_(i,t){const e=yi(i,t);e.mountClick(),e.waitMounted();let n=0,s=0;for(;s<30&&(e.setStop(n),e.dispatch(),e.waitUntil(()=>$i(e),120),_i(e)!=="empty_run");s++){const r=$l(e);e.returnTray(),e.waitUntil(()=>e.hoist.state==="home",120),n+=r}return e.returnTray(),e.waitUntil(()=>e.hoist.state==="home",120),Ju(e,t,()=>e.setStop(n)),No(e,t),xi(e,"empty commissioning",t,{runs:s+1,setting:n})}function D_(i,t){const e=yi(i,t);e.mountClick(),e.produce(1),e.waitMounted();let n=0,s=0;for(;s<30&&(e.setStop(n),e.dispatch(),e.waitUntil(()=>$i(e),120),_i(e)!=="delivered");s++){const o=$l(e);e.returnTray(),e.waitUntil(()=>e.hoist.state==="home",120),n+=o}const r=t-1;for(let o=r,a=0;o>0;a++){e.waitUntil(()=>e.hoist.state==="home",120);const l=Math.min(ln,o);e.produce(l),e.setStop(n),e.dispatch(),o-=l}return No(e,t),xi(e,"single-component probe",t,{runs:s+1,setting:n})}const U_=[-5,-4,-3,-2,-1,0,1,2,3,4,5],I_=[1,2,4,8],pn=4,Ri=i=>Math.round(i*100)/100;function N_(i={}){const t=i.trials??200,e=i.seed??20261001,n=3,s=2,r=[];for(const u of i.targets??U_){const p=!Wu.includes(u),g=Rh(u,pn),v=S=>S.median/g.seconds,m=kh(u,pn,"legal11",t,e+u),f=p?null:kh(u,pn,"unlabelled8",t,e+100+u),M=S=>[Ch(u,S,"ladder"),Ch(u,S,"drop"),Ph(u,S,!0),Ph(u,S,!1)],b=M(pn).map(S=>({route:S,ratio:S.seconds/g.seconds})),x=S=>S.filter(y=>y.completed).reduce((y,C)=>C.seconds<y.seconds?C:y),L=x(b.map(S=>S.route)),A=(i.sizes??I_).map(S=>{const y=S===pn?g:Rh(u,S),C=S===pn?L:x(M(S));return{size:S,thinker:y,handBest:{route:C.route,seconds:C.seconds},ratio:Ri(C.seconds/y.seconds)}}),R=S_(u),k=[Eh(u,"ladder"),Eh(u,"drop"),Ah(u,!0),Ah(u,!1)].filter(S=>S.completed).reduce((S,y)=>y.seconds<S.seconds?y:S);r.push({target:u,labelled:p,delivery:{thinkerSeconds:R.seconds,bypassBest:{route:k.route,seconds:k.seconds,ratio:Ri(k.seconds/R.seconds)}},thinker:g,copier:bh(u,!1),copierReadout:bh(u,!0),controlPicker:R_(u),guesser11:{...m,ratio:v(m)},guesser8:f&&{...f,ratio:v(f)},bypass:b,bypassBest:{route:L.route,seconds:L.seconds,ratio:Ri(L.seconds/g.seconds)},sizes:A,different:[C_(u)],infeasible:[E_(u),T_(u),A_(u)],measurements:[L_(u,pn),D_(u,pn),k_(u,pn),Lh(u,pn,0,"adaptive gap correction (first guess 0)"),Lh(u,pn,u>0?-1:1,"adaptive gap correction (first guess on the wrong side)")]})}const o=r.filter(u=>!u.labelled),a=r.filter(u=>u.labelled),l=r.filter(u=>u.bypassBest.ratio<s).map(u=>({target:u.target,route:u.bypassBest.route,ratio:u.bypassBest.ratio})),c=u=>Math.min(...u),h=c(r.map(u=>u.guesser11.ratio)),d=c(o.map(u=>u.guesser8.ratio));return{trials:t,seed:e,projectSize:pn,thresholds:{guesserRatio:n,bypassRatio:s},rows:r,verdict:{thinkerFirstAttemptAll:r.every(u=>u.thinker.firstAttempt===!0),copierFailsAllUnlabelled:o.every(u=>!u.copier.completed),copierSucceedsOnLabelled:a.map(u=>`${u.target>=0?"+":""}${u.target}: ${u.copier.completed?"succeeds (tool use)":"fails"}`).join("; "),copierSucceedsWithReadout:r.every(u=>u.copierReadout.completed),guesser11MinRatio:Ri(h),guesser8MinRatio:Ri(d),guesser11Pass:h>=n,guesser8Pass:d>=n,bypassMinRatio:Ri(c(r.map(u=>u.bypassBest.ratio))),bypassFailingTargets:l,bypassPass:l.length===0,deliveryBypassMinRatio:Ri(c(r.map(u=>u.delivery.bypassBest.ratio)))}}}const ir=kt-1.8,Es=kt+4,xs=kt-5.4,wn=135,vi=235,Dh=60,O_=i=>i*i*(3-2*i);function F_(i){if(i<=0)return ir;if(i<wn){const t=i/wn;return ir+(Es-ir)*(.6*t+.4*O_(t))}if(i<vi){const t=(i-wn)/(vi-wn);return Es-(Es-xs)*.5*(1-Math.cos(Math.PI*t))}return xs}const Eo=420,B_=520;function z_(i){return i<wn?xs+(Es-xs)*.5*(1-Math.cos(Math.PI*i/wn)):i<vi?Es-(Es-xs)*.5*(1-Math.cos(Math.PI*(i-wn)/(vi-wn))):xs}function fi(i){return i<Eo?F_(i):z_((i-Eo)%B_)}function ba(i){if(i>=Eo){const t=fi(i+.5)-fi(i);return Math.abs(t)<1e-6?"settled":t>0?"rising":"falling"}return i<wn?"rising":i<wn+12?"peak":i<vi?"falling":"settled"}const H_=i=>i<Eo?i<wn:fi(i+.5)>fi(i);class G_{activeS=0;tick(t){this.activeS+=t}reset(){this.activeS=0}}const Oi=.9,Te=.16,Fi=.45,V_=2.2,W_=.12;class Qu{constructor(t,e){this.world=t,this.area=e}boards=[];nextId=1;onEvent=()=>{};add(t){const e=this.nextId++,n={id:e,vx:0,vz:0,phase:e*.37%1,floated:!1,state:"resting",...t};return this.boards.push(n),n}spawnPile(t,e,n=12){const s=this.world.groundPlane(t,e,90);let r=0;for(let o=0;o<4;o++)for(let a=0;a<3;a++){if(r++>=n)return;this.add({x:t+.5,y:s+Te/2+o*Te,z:e+.5+(a-1)*.5,yaw:0,origin:"pile",pile:!0})}}restingY(t,e,n){let s=n;for(const r of this.boards)Math.abs(r.x-t)<Oi*.6&&Math.abs(r.z-e)<Fi*.9&&r.state==="resting"&&r.y+Te/2>s&&r.y<n+1&&(s=r.y+Te/2);return s+Te/2}boardsInCell(t,e,n){return this.boards.filter(s=>s.x>t-.45&&s.x<t+1.45&&s.z>n-.45&&s.z<n+1.45&&s.y+Te/2>e&&s.y-Te/2<e+1)}settle(){const t=this.world;let e=0;const n=this.boards.filter(s=>s.state==="resting").sort((s,r)=>s.y-r.y);for(const s of n){let o=t.groundPlane(Math.floor(s.x),Math.floor(s.z),s.y+.05);for(const l of n)l===s||l.y>=s.y||Math.abs(l.x-s.x)<Oi*.6&&Math.abs(l.z-s.z)<Fi*.9&&(o=Math.max(o,l.y+Te/2));const a=o+Te/2;s.y>a+.02&&(s.y=a,e++)}return e}get(t){return this.boards.find(e=>e.id===t)}remove(t){const e=this.boards.findIndex(n=>n.id===t);return e<0?null:this.boards.splice(e,1)[0]}inTide(t,e){const n=this.world.terrain.features.tide.rect;return!!n&&t>=n.x0&&t<n.x1&&e>=n.z0&&e<n.z1}update(t,e,n,s){const r=this.world;for(const o of this.boards){const a=o.y-Te/2;if(o.state==="floating"&&!this.inTide(o.x,o.z)){o.state="resting",o.vx=o.vz=0,o.y=r.groundPlane(Math.floor(o.x),Math.floor(o.z),o.y+1)+Te/2;continue}if(o.state==="resting")if(this.inTide(o.x,o.z)&&e>a+.02)o.state="floating",o.floated=!0,this.onEvent({kind:"float",board:o});else continue;const l=.03*Math.sin((s*.5+o.phase)*Math.PI*2),c=e-Te/2+l+.02;o.y+=(c-o.y)*Math.min(1,3*t),o.yaw+=.04*t*Math.sin((s*.2+o.phase*3)*Math.PI*2);const d=(n?1:-.25)*.28+.08*Math.sin((s*.13+o.phase*5)*Math.PI*2),u=.3*Math.sin((s*.07+o.phase*9)*Math.PI*2);o.vx+=(d-o.vx)*Math.min(1,t),o.vz+=(u-o.vz)*Math.min(1,t);let p=o.x+o.vx*t,g=o.z+o.vz*t;const v=this.area;(p<v.x0||p>v.x1)&&(o.vx=-o.vx,p=o.x),(g<v.z0||g>v.z1)&&(o.vz=-o.vz,g=o.z);const m=r.groundPlane(Math.floor(p),Math.floor(g),o.y+1),f=e-m;Jt[r.getBlock(Math.floor(p),Math.floor(o.y),Math.floor(g))]?.solid===!0||f>V_?(o.vx=-o.vx*.5,o.vz=-o.vz*.5):f>=W_?(o.x=p,o.z=g):(o.vx=0,o.vz=0);const b=r.groundPlane(Math.floor(o.x),Math.floor(o.z),o.y+1);e-b<=.02&&(o.state="resting",o.y=b+Te/2,o.vx=o.vz=0,this.onEvent({kind:"washed_up",board:o}))}}raycast(t,e,n){let s=null;for(const r of this.boards){const o=(Math.abs(Math.cos(r.yaw))*Oi+Math.abs(Math.sin(r.yaw))*Fi)/2,a=(Math.abs(Math.sin(r.yaw))*Oi+Math.abs(Math.cos(r.yaw))*Fi)/2,l=Te/2+.04;let c=0,h=n;const d=[r.x-o,r.y-l,r.z-a],u=[r.x+o,r.y+l,r.z+a];let p=!0;for(let g=0;g<3&&p;g++)if(Math.abs(e[g])<1e-9)(t[g]<d[g]||t[g]>u[g])&&(p=!1);else{let v=(d[g]-t[g])/e[g],m=(u[g]-t[g])/e[g];v>m&&([v,m]=[m,v]),c=Math.max(c,v),h=Math.min(h,m),c>h&&(p=!1)}p&&(!s||c<s.dist)&&(s={board:r,dist:c})}return s}serialize(){return this.boards.map(t=>({...t}))}restore(t){if(this.boards=[],!Array.isArray(t))return;const e=new Set;for(const n of t.slice(0,200)){if(!n||typeof n!="object")continue;const s=n,r=h=>typeof h=="number"&&Number.isFinite(h);if(!r(s.x)||!r(s.y)||!r(s.z)||Math.abs(s.x)>2e3||Math.abs(s.z)>2e3||s.y<-10||s.y>200)continue;const o=s.origin==="driftwood"||s.origin==="dropped"?s.origin:"pile";let a=r(s.id)&&s.id>0?Math.floor(s.id):this.nextId;for(;e.has(a);)a++;e.add(a);const l=Array.isArray(s.items)?s.items.filter(h=>Array.isArray(h)&&Number.isInteger(h[0])&&Number.isInteger(h[1])&&h[1]>0&&h[1]<=64&&!!Jt[h[0]]).slice(0,40):void 0,c={id:a,x:s.x,y:s.y,z:s.z,yaw:r(s.yaw)?s.yaw:0,origin:o,pile:!!s.pile&&!l,state:s.state==="floating"?"floating":"resting",vx:r(s.vx)?s.vx:0,vz:r(s.vz)?s.vz:0,phase:r(s.phase)?s.phase:0,floated:!!s.floated};l&&(c.items=l,c.pileCount=r(s.pileCount)?Math.max(0,Math.min(12,Math.floor(s.pileCount))):0),this.boards.push(c),this.nextId=Math.max(this.nextId,a+1)}}}const X_=6,q_=.6;class K_{map=new Map;update(t,e,n){const s=t.terrain.features.tide.rect,r=new Set;s&&t.forEachPlaced((o,a,l)=>{if(o<s.x0||o>=s.x1||l<s.z0||l>=s.z1)return;const c=`${o},${a},${l}`;r.add(c);let h=this.map.get(c);const d=e>a+.05;if(!h){if(!d)return;h={x:o,y:a,z:l,wet:0},this.map.set(c,h)}h.wet=d?Math.min(1,h.wet+n/q_):Math.max(0,h.wet-n/X_)});for(const[o,a]of this.map)(!r.has(o)||a.wet<=.001)&&this.map.delete(o)}list(){return[...this.map.values()]}wetAt(t,e,n){return this.map.get(`${t},${e},${n}`)?.wet??0}}const Ue=(i,t=2)=>Math.round(i*10**t)/10**t,Uh=10,td=60;class ed{constructor(t,e){this.world=t,this.emit=e;const n=t.terrain.features.tide;this.loose=new Qu(t,n.area),this.loose.onEvent=s=>{const r=s.board;this.emit(s.kind==="float"?"board_float":"board_washed_up",{board:r.id,origin:r.origin,pile:r.pile,at:this.pos(r),...this.stamp()})}}clock=new G_;loose;wet=new K_;meta=null;pileOwned=0;pileUsed=0;reachedPileAt=null;firstPileTouchAt=null;leftBeachAt=null;settledAt=null;firstMinuteReported=!1;driftwoodSpawned=!1;protectiveCandidates=0;after={pickups:0,drops:0,places:0,breaks:0,done:!1};pileGround=0;phase=null;sampleAt=0;wetAt=0;t(){return Ue(this.clock.activeS,2)}realClock=()=>this.clock.activeS;stamp(){return{activeS:Ue(this.realClock(),2),worldS:this.t()}}pos(t){return{x:Ue(t.x),y:Ue(t.y),z:Ue(t.z)}}begin(t,e=0){this.meta=t,this.clock.reset(),this.world.tideLevel=fi(0),this.loose.boards=[];const n=this.world.terrain.features.tide.pile;this.pileOwned=Math.max(0,Math.min(12,e)),this.pileUsed=0,this.loose.spawnPile(n.x,n.z,12-this.pileOwned),this.pileGround=this.world.groundPlane(n.x,n.z,90),this.emit("tide_start",{runId:t.runId,build:t.build,seed:t.seed,settings:t.settings,pileBoards:this.loose.boards.length+this.pileOwned,level:Ue(this.world.tideLevel),activeS:0,worldS:0})}tick(t,e){this.clock.tick(t);const n=this.clock.activeS;this.world.tideLevel=fi(n),this.loose.update(t,this.world.tideLevel,H_(n),n),this.reachedPileAt===null&&this.world.tideLevel>this.pileGround+.02&&(this.reachedPileAt=this.t(),this.emit("tide_reached_pile",{...this.stamp(),level:Ue(this.world.tideLevel),afterFirstMinute:n>=Dh})),this.wetAt+=t,this.wetAt>=.25&&(this.wet.update(this.world,this.world.tideLevel,this.wetAt),this.wetAt=0);const s=ba(n);if(s!==this.phase&&(this.phase=s,this.emit("tide_phase",{phase:s,level:Ue(this.world.tideLevel),...this.stamp()})),!this.firstMinuteReported&&n>=Dh&&(this.firstMinuteReported=!0,this.emit("first_minute_end",{reachedPile:this.reachedPileAt!==null,level:Ue(this.world.tideLevel),...this.stamp()})),this.leftBeachAt===null){const r=this.world.terrain.features.tide.area;(e.x<r.x0||e.x>r.x1||e.z<r.z0||e.z>r.z1)&&(this.leftBeachAt=this.t(),this.emit("left_beach_area",{...this.stamp(),x:Ue(e.x),z:Ue(e.z)}))}n>=this.sampleAt&&(this.sampleAt=n+Uh,this.emit("tide_sample",{...this.stamp(),x:Ue(e.x),y:Ue(e.y),z:Ue(e.z),yaw:Ue(e.yaw),pitch:Ue(e.pitch),level:Ue(this.world.tideLevel),facingWater:this.facingWater(e)})),this.settledAt===null&&n>=vi&&(this.settledAt=this.t(),this.spawnDriftwood(),this.emit("cycle_settled",{...this.stamp(),level:Ue(this.world.tideLevel),census:this.census()})),this.settledAt!==null&&!this.after.done&&n>=this.settledAt+td&&(this.after.done=!0,this.emit("after_cycle_summary",{...this.stamp(),minuteAfterCycle:{pickups:this.after.pickups,drops:this.after.drops,places:this.after.places,breaks:this.after.breaks},census:this.census()}))}facingWater(t){const e=Math.cos(t.pitch),n=[-Math.sin(t.yaw)*e,Math.sin(t.pitch),-Math.cos(t.yaw)*e];for(let s=.5;s<=60;s+=.5){const r=t.x+n[0]*s,o=t.y+1.62+n[1]*s,a=t.z+n[2]*s;if(this.world.isWaterAt(Math.floor(r),Math.floor(o),Math.floor(a)))return!0;if(this.world.getBlock(Math.floor(r),Math.floor(o),Math.floor(a))!==E.AIR&&this.world.getBlock(Math.floor(r),Math.floor(o),Math.floor(a))!==E.WATER)return!1}return!1}spawnDriftwood(){if(this.driftwoodSpawned)return;this.driftwoodSpawned=!0;const t=[[20.2,6,0,0],[20.2,6.55,0,.05],[20.9,6,0,.02],[20.9,6.55,0,-.04],[20.55,5.95,1,1.57],[20.55,6.3,1,1.5],[20.55,6.65,1,1.62],[20.3,6.3,2,.04],[20.8,6.3,2,-.03],[20.55,6.3,3,1.57]];let e=0;for(const[n,s,r,o]of t){const a=this.world.groundPlane(Math.floor(n),Math.floor(s),80);this.world.tideLevel>a-.1||(this.loose.add({x:n,y:a+Te/2+r*Te,z:s,yaw:o,origin:"driftwood",pile:!1}),e++)}for(const[n,s,r]of[[22.4,4.1,.5],[22.8,9.4,1.2]]){const o=this.world.groundPlane(Math.floor(n),Math.floor(s),80);this.world.tideLevel>o-.1||(this.loose.add({x:n,y:o+Te/2,z:s,yaw:r,origin:"driftwood",pile:!1}),e++)}this.emit("driftwood_exposed",{count:e,...this.stamp()})}countAction(t){this.settledAt!==null&&!this.after.done&&this.after[t]++}protective(){return this.reachedPileAt===null}pickUp(t,e){if(t.items||!e.hasRoom(E.BOARD))return!1;e.add(E.BOARD,1),this.loose.remove(t.id);const n=t.pile&&this.protective();return t.pile&&(this.pileOwned++,this.firstPileTouchAt===null&&(this.firstPileTouchAt=this.t(),this.emit("first_pile_touch",{...this.stamp()})),n&&this.protectiveCandidates++),this.countAction("pickups"),this.emit("board_pickup",{board:t.id,qty:1,origin:t.origin,pile:t.pile,fromState:t.state,recovery:t.floated,protectiveCandidate:n,from:this.pos(t),to:"pack",...this.stamp()}),!0}dropBoard(t,e,n,s,r){if(t.count(E.BOARD)<1)return null;t.take(E.BOARD,1);const o=this.pileOwned>0;o&&this.pileOwned--;const a=o?"pile":"dropped",l=this.loose.add({x:e,y:n,z:s,yaw:r,origin:a,pile:o}),c=o&&this.protective();return c&&this.protectiveCandidates++,this.countAction("drops"),this.emit("board_relocate",{board:l.id,qty:1,origin:a,pile:o,from:"pack",to:this.pos(l),protectiveCandidate:c,...this.stamp()}),l}noteBlockPlaced(t,e,n,s){if(this.countAction("places"),t!==E.BOARD||this.pileOwned<1)return;this.pileOwned--,this.pileUsed++;const r=this.protective();r&&this.protectiveCandidates++,this.emit("pile_board_used",{qty:1,to:{x:e,y:n,z:s},protectiveCandidate:r,...this.stamp()})}noteBoardsConsumed(t,e,n){if(t<=0)return;const s=Math.min(this.pileOwned,t);this.pileOwned-=s;const r=Math.max(0,this.pileOwned-e);this.pileOwned-=r,this.emit("pile_board_consumed",{qty:t,fromPile:s+r,why:n,pileOwnedNow:this.pileOwned,packBoardsNow:e,...this.stamp()})}reconcilePack(t){this.pileOwned>t&&(this.pileOwned=Math.max(0,t))}noteBlockBroken(t){this.countAction("breaks"),t===E.BOARD&&this.pileUsed>0&&(this.pileUsed--,this.pileOwned++)}phaseKey(){return`${ba(this.clock.activeS)}${this.settledAt!==null?"s":""}${this.reachedPileAt!==null?"r":""}`}census(){let t=0,e=0;for(const s of this.loose.boards)s.pile&&(s.state==="floating"?e++:t++);let n=0;for(const s of this.loose.boards)s.items&&(n+=s.pileCount??0);return{resting:t,floating:e,inPack:this.pileOwned,used:this.pileUsed,inBundle:n,total:t+e+this.pileOwned+this.pileUsed+n}}serialize(){return{activeS:this.clock.activeS,meta:this.meta,pileGround:this.pileGround,pileOwned:this.pileOwned,pileUsed:this.pileUsed,reachedPileAt:this.reachedPileAt,firstPileTouchAt:this.firstPileTouchAt,leftBeachAt:this.leftBeachAt,settledAt:this.settledAt,firstMinuteReported:this.firstMinuteReported,driftwoodSpawned:this.driftwoodSpawned,protectiveCandidates:this.protectiveCandidates,after:this.after,boards:this.loose.serialize()}}restore(t){try{return this.restoreUnsafe(t)}catch{return this.loose.boards=[],!1}}restoreUnsafe(t){if(!t||typeof t!="object"||!Array.isArray(t.boards))return!1;const e=(a,l=0)=>typeof a=="number"&&Number.isFinite(a)?a:l,n=a=>typeof a=="number"&&Number.isFinite(a)?a:null;this.loose.restore(t.boards),this.clock.activeS=Math.max(0,e(t.activeS));const s=t.meta;this.meta=s&&typeof s.runId=="string"?{runId:s.runId,build:String(s.build??""),seed:e(s.seed),settings:s.settings}:null,this.pileOwned=Math.max(0,Math.min(12,Math.floor(e(t.pileOwned)))),this.pileUsed=Math.max(0,Math.min(12,Math.floor(e(t.pileUsed))));let r=this.loose.boards.filter(a=>a.pile).length+this.pileOwned+this.pileUsed+this.loose.boards.reduce((a,l)=>a+(l.items?l.pileCount??0:0),0)-12;for(let a=this.loose.boards.length-1;a>=0&&r>0;a--)this.loose.boards[a].pile&&(this.loose.boards.splice(a,1),r--);this.pileGround=e(t.pileGround,this.pileGround),this.reachedPileAt=n(t.reachedPileAt),this.firstPileTouchAt=n(t.firstPileTouchAt),this.leftBeachAt=n(t.leftBeachAt),this.settledAt=n(t.settledAt),this.firstMinuteReported=!!t.firstMinuteReported,this.driftwoodSpawned=!!t.driftwoodSpawned,this.protectiveCandidates=Math.max(0,e(t.protectiveCandidates));const o=t.after;return this.after={pickups:e(o?.pickups),drops:e(o?.drops),places:e(o?.places),breaks:e(o?.breaks),done:!!o?.done},this.world.tideLevel=fi(this.clock.activeS),this.phase=ba(this.clock.activeS),this.sampleAt=this.clock.activeS+Uh,this.loose.settle(),!0}}function $_(i,t){const e=i.hoist.docks.get(t);if(!e||e.stock<1)return 0;let n=e.stock;const s=e.stock,r=i.hoist.tray,o=[];for(let l=1;l<=2;l++)for(let c=-2;c<=2;c++)for(let h=-2;h<=2;h++)o.push([e.x+h,e.y+l,e.z+c]);for(const[l,c,h]of o){if(n<1)break;l===r.x&&h===r.z||i.world.getBlock(l,c,h)!==E.AIR||i.overlapsPlayer(l,c,h)||i.world.setBlock(l,c,h,E.STONE_PANEL)&&n--}const a=s-n;for(e.stock=0;n>0;n--)i.hoist.pressOutputToBay();return i.log("dock_rack_recovered",{dock:t,panels:s,setOut:a}),a}function Zl(i,t,e,n){const s=i.world.getBlock(t,e,n),r=Jt[s];return!r||s===E.AIR||s===E.WATER||r.hardness===1/0||e<=0||i.hoist.carrying&&s!==E.PLAN?!1:s===E.PLAN?(i.world.setBlock(t,e,n,E.AIR),i.plan.remove(t,e,n),i.log("plan_unmark",{x:t,y:e,z:n}),!0):s===E.STONE_PANEL?(i.world.setBlock(t,e,n,i.plan.has(t,e,n)?E.PLAN:E.AIR),i.hoist.pickUpFromWorld(),i.burst(t,e,n,s),i.log("component_pick_up",{x:t,y:e,z:n}),!0):r.drop!==E.AIR&&!i.inventory.hasRoom(r.drop)?(i.toast("Your pack is full: make room before breaking that"),!1):(s===E.DOCK&&(i.hoist.syncDocks(),$_(i,`${t},${e},${n}`)),i.world.setBlock(t,e,n,E.AIR),s===E.DOCK&&i.hoist.syncDocks(),r.drop!==E.AIR&&i.inventory.add(r.drop,1),i.burst(t,e,n,s),i.log("block_break",{x:t,y:e,z:n,block:r.name}),i.refresh(),!0)}function Jl(i,t,e,n,s,r){const o=i.world.getBlock(t,e,n);if(!Jt[s]||!ar(o)||o===s||e<0)return!1;if(s===E.PLAN&&o!==E.AIR)return i.toast("Plan markers go in open air"),!1;if(i.overlapsPlayer(t,e,n))return!1;if(s!==E.PLAN&&i.cellOccupied?.(t,e,n))return i.toast("A board is lying there. Pick it up first."),!1;if(i.hoist.carrying&&s!==E.PLAN)return!1;if(s===E.DOCK&&!i.hoist.canPlaceDock(t,e,n))return i.toast("A dock mounts on a foundation beside the guide rail"),!1;const a=r&&s!==E.PLAN;return a&&i.inventory.count(s)<1?!1:i.world.setBlock(t,e,n,s)?(a&&i.inventory.take(s,1),s===E.PLAN&&i.plan.add(t,e,n),s===E.DOCK&&i.hoist.syncDocks(),i.log("block_place",{x:t,y:e,z:n,block:Jt[s].name}),i.refresh(),!0):(i.toast("Nothing can be built that high"),!1)}const js=64,Ih=36,er=8;class Dn{slots=new Array(Ih).fill(null);selected=0;static starter(){const t=new Dn;return t.add(E.LOAM,16),t.add(E.STALK,4),t.add(E.BLUEROCK,8),t.add(E.PLAN,64),t}add(t,e){let n=e;for(const s of this.slots){if(n<=0)break;if(s&&s.id===t&&s.count<js){const r=Math.min(n,js-s.count);s.count+=r,n-=r}}for(let s=0;s<this.slots.length&&n>0;s++)if(!this.slots[s]){const r=Math.min(n,js);this.slots[s]={id:t,count:r},n-=r}return e-n}hasRoom(t){return this.slots.some(e=>!e||e.id===t&&e.count<js)}count(t){let e=0;for(const n of this.slots)n&&n.id===t&&(e+=n.count);return e}take(t,e){let n=e;for(let s=this.slots.length-1;s>=0&&n>0;s--){const r=this.slots[s];if(r&&r.id===t){const o=Math.min(n,r.count);r.count-=o,n-=o,r.count===0&&(this.slots[s]=null)}}return e-n}selectedStack(){return this.slots[this.selected]}select(t){this.selected=(t%er+er)%er}summary(){return this.slots.filter(Boolean).map(t=>`${Jt[t.id].name} x${t.count}`).join(", ")}serialize(){return{slots:this.slots.map(t=>t?[t.id,t.count]:null),selected:this.selected}}static restore(t){const e=new Dn;return!t||!Array.isArray(t.slots)?Dn.starter():(t.slots.slice(0,Ih).forEach((n,s)=>{n&&Jt[n[0]]&&n[1]>0&&(e.slots[s]={id:n[0],count:Math.min(js,n[1])})}),e.selected=t.selected>=0&&t.selected<er?t.selected:0,e)}}const Nh="plumbline.log.v2",Y_={student:4e3,bot:2e3},j_=new Set(["tide_sample","strength_sample","block_place","block_break","craft","hoist_dispatch","hoist_arrived","dock_mounted","plan_unmark","panel_installed","component_pick_up","dock_rack_recovered"]),Ea=i=>i.skillId===void 0&&j_.has(i.kind);class nd{constructor(t,e=Date.now){this.storage=t,this.now=e;try{const n=t?.getItem(Nh);if(n){const s=JSON.parse(n);this.dropped={student:Number(s.dropped?.student)||0,bot:Number(s.dropped?.bot)||0},this.events.student=Array.isArray(s.student)?s.student:[],this.events.bot=Array.isArray(s.bot)?s.bot:[],this.nextId=s.nextId??1+Math.max(0,...this.events.student.map(r=>r.id),...this.events.bot.map(r=>r.id))}}catch{}}events={student:[],bot:[]};nextId=1;dropped={student:0,bot:0};current="student";runId=null;timer=null;log(t,e={},n={}){const s=this.current,r={id:this.nextId++,t:this.now(),stream:s,kind:t,data:e,...n};this.runId&&(r.run=this.runId);const o=this.events[s];if(o.push(r),Ea(r)){let a=0;for(const l of o)Ea(l)&&a++;for(let l=0;a>Y_[s]&&l<o.length;)Ea(o[l])?(o.splice(l,1),a--,this.dropped[s]++):l++}return this.scheduleSave(),r}all(t){return this.events[t]}counts(){return{student:this.events.student.length,bot:this.events.bot.length}}clear(t){this.events[t]=[],this.dropped[t]=0,this.save()}scheduleSave(){this.timer!==null||!this.storage||(this.timer=setTimeout(()=>{this.timer=null,this.save()},1e3))}save(){if(this.timer!==null&&(clearTimeout(this.timer),this.timer=null),!this.storage)return!1;try{return this.storage.setItem(Nh,JSON.stringify({student:this.events.student,bot:this.events.bot,nextId:this.nextId,dropped:this.dropped})),!0}catch{return!1}}}const Z_=6;function Ql(i,t,e,n=Z_){let s=Math.floor(t[0]),r=Math.floor(t[1]),o=Math.floor(t[2]);const a=Math.sign(e[0]),l=Math.sign(e[1]),c=Math.sign(e[2]),h=L=>L===0?1/0:Math.abs(1/L),d=h(e[0]),u=h(e[1]),p=h(e[2]);let g=e[0]===0?1/0:(a>0?s+1-t[0]:t[0]-s)*d,v=e[1]===0?1/0:(l>0?r+1-t[1]:t[1]-r)*u,m=e[2]===0?1/0:(c>0?o+1-t[2]:t[2]-o)*p,f=0,M=0,b=0,x=0;for(let L=0;L<64;L++){const A=i.getBlock(s,r,o);if(A!==E.AIR&&A!==E.WATER&&Jt[A])return{x:s,y:r,z:o,nx:f,ny:M,nz:b,dist:x};if(g<=v&&g<=m?(x=g,g+=d,s+=a,f=-a,M=b=0):v<=m?(x=v,v+=u,r+=l,M=-l,f=b=0):(x=m,m+=p,o+=c,b=-c,f=M=0),x>n)return null}return null}const J_=.35,Oh=.35,Q_=.35,Fh=6;class Oo{world=new Uo(7);player;inventory=Dn.starter();log=new nd(null,()=>0);rt;hoist;plan=new Io;get t(){return this.rt.clock.activeS}actions=0;walked=0;lastX=0;lastZ=0;constructor(t="bot-run"){this.log.current="bot";const e=this.world.terrain.features;this.hoist=new Do(this.world,e.hoist.tray,e.hoist.homePlane),this.rt=new ed(this.world,(s,r)=>this.log.log(s,r));const n=this.world.terrain.spawnPoint();for(let s=-3;s<=3;s++)for(let r=-3;r<=3;r++)this.world.ensureColumn((n.x>>4)+r,(n.z>>4)+s);this.player=new Lo(this.world),this.player.teleport(n.x,n.y+.01,n.z),this.player.yaw=Math.PI/2,this.rt.begin({runId:t,build:"sim",seed:this.world.seed,settings:{}}),this.lastX=this.player.x,this.lastZ=this.player.z}ctx(){return{world:this.world,plan:this.plan,inventory:this.inventory,hoist:this.hoist,overlapsPlayer:(t,e,n)=>{const s=this.player;return s.x+.3>t&&s.x-.3<t+1&&s.z+.3>n&&s.z-.3<n+1&&s.y+1.8>e&&s.y<e+1},log:(t,e)=>this.log.log(t,e),toast:()=>{},burst:()=>{},refresh:()=>{},cellOccupied:(t,e,n)=>this.rt.loose.boardsInCell(t,e,n).length>0}}afterPlace(t,e,n,s,r){}afterBreak(t,e,n,s){}step(t=In){this.player.step(t,oe),this.rt.tick(oe,this.player),this.walked+=Math.hypot(this.player.x-this.lastX,this.player.z-this.lastZ),this.lastX=this.player.x,this.lastZ=this.player.z}idle(t){const e=Math.round(t/oe);for(let n=0;n<e;n++)this.step()}waitUntil(t,e=600){for(let n=0;n<e/oe&&!t();n++)this.step()}walkTo(t,e,n=.5,s=60){const r=this.player;for(let o=0;o<s/oe;o++){const a=t-r.x,l=e-r.z;if(Math.hypot(a,l)<n)return!0;r.yaw=Math.atan2(-a,-l),r.pitch=0,this.step({forward:1,right:0,jump:r.inWater,sprint:!1})}return Math.hypot(t-r.x,e-r.z)<n*2}aimAt(t,e,n){const s=this.player.eye(),r=t-s[0],o=n-s[2];this.player.yaw=Math.atan2(-r,-o),this.player.pitch=Math.atan2(e-s[1],Math.hypot(r,o))}pickUp(t){this.aimAt(t.x,t.y,t.z);const e=this.player.eye(),n=this.rt.loose.raycast(e,this.player.forwardVec(),Fh),s=Ql(this.world,e,this.player.forwardVec(),Fh);return!n||s&&s.dist<n.dist||!this.rt.pickUp(n.board,this.inventory)?!1:(this.actions++,this.idle(J_),!0)}collect(t){return this.pickUp(t)||(this.walkTo(t.x+1,t.z,.4,30),this.pickUp(t))?!0:(this.walkTo(t.x,t.z,.3,30),this.pickUp(t))}place(t,e,n,s){const r=this.world.getBlock(t,e,n),o=Jl(this.ctx(),t,e,n,s,!0);return o&&(this.afterPlace(t,e,n,s,r),this.rt.noteBlockPlaced(s,t,e,n),this.actions++,this.idle(Oh)),o}breakAt(t,e,n){const s=this.world.getBlock(t,e,n),r=Zl(this.ctx(),t,e,n);return r&&(this.afterBreak(t,e,n,s),this.rt.noteBlockBroken(s),this.rt.loose.settle(),this.actions++,this.idle(Oh)),r}drop(t,e,n){const s=this.rt.dropBoard(this.inventory,t,e,n,0);return s&&(this.actions++,this.idle(Q_)),s}pileBoards(){return this.rt.loose.boards.filter(t=>t.pile)}}const ty=i=>{const t={};for(const e of i.log.all("bot"))t[e.kind]=(t[e.kind]??0)+1;return t};function tc(i,t,e){t.waitUntil(()=>t.t>=vi+td+1,900);const n=ty(t);return{name:i,workDoneS:Math.round(e*10)/10,actions:t.actions,pickups:n.board_pickup??0,placements:n.block_place??0,setDowns:n.board_relocate??0,walkedVoxels:Math.round(t.walked),finalCensus:t.rt.census(),protectiveCandidates:t.rt.protectiveCandidates,waterReachedPileAt:t.rt.reachedPileAt,firstPileTouchAt:t.rt.firstPileTouchAt,logged:n,boardsThatFloated:new Set(t.log.all("bot").filter(s=>s.kind==="board_float").map(s=>s.data.board)).size}}function id(i){for(let t=0;t<40;t++){const e=i.pileBoards().filter(s=>s.state==="resting"||s.state==="floating");if(!e.length)return;e.sort((s,r)=>r.y-s.y);const n=e[0];i.collect(n)||i.walkTo(n.x+2.2,n.z,.6)}}function ey(){const i=new Oo("bot-scoop"),t=i.world.terrain.features.tide.pile;i.walkTo(t.x+3.2,t.z+.5,.6),id(i);const e=i.t;return i.walkTo(t.x+8,t.z+1,.8),tc("scoops the pile into the pack",i,e)}function ny(){const i=new Oo("bot-platform"),t=i.world.terrain.features.tide.pile,e=t.x+1,n=t.z+2,s=i.world.groundPlane(e,n,90);i.walkTo(e+3,n,.6);for(let a=0;a<4;a++)for(const[l,c]of[[0,0],[1,0],[0,1],[1,1]])i.place(e+l,s+a,n+c,E.LOAM);const r=s+4;id(i),i.walkTo(e+3,n+.5,.6);for(const a of[[.5,.5],[1.5,.5],[.5,1.5],[1.5,1.5]])for(let l=0;l<3&&!(i.inventory.count(E.BOARD)<1);l++)i.drop(e+a[0],r+.08+l*.16,n+a[1]);const o=i.t;return i.walkTo(t.x+8,t.z+1,.8),tc("builds a platform and moves the pile onto it",i,o)}function iy(){const i=new Oo("bot-ignore"),t=i.world.terrain.features.tide.pile;i.walkTo(t.x+8,t.z+2,.8),i.waitUntil(()=>i.t>=vi+5,900);for(let n=0;n<60;n++){const s=i.pileBoards().filter(o=>o.state==="resting"||o.state==="floating");if(!s.length)break;s.sort((o,a)=>Math.hypot(o.x-i.player.x,o.z-i.player.z)-Math.hypot(a.x-i.player.x,a.z-i.player.z));const r=s[0];i.collect(r)||i.walkTo(r.x+1.8,r.z,.7,40)}const e=i.t;return tc("ignores the tide, then recovers the drifted boards",i,e)}function sy(){return[ey(),ny(),iy()]}const Pt={max:100,walk:.25,sprint:.45,work:.5,coldDay:.08,coldNight:.7,wet:.6,hearthColdFactor:.35,lanternNightColdFactor:.5,refill:5,hearthReach:5,hearthDy:3,coverClearance:3,lanternReach:8,lanternDy:4,collapseS:20,wakeStrength:25,restScale:12,gentleFactor:.5},bl={normal:"Normal: strength drains at the standard rates (walking 0.25 a second, night cold 0.7 a second).",gentle:"Gentle: every drain is halved. Collapse still takes 20 seconds and wakes you at 25 percent, so it is never a better way to recover.",off:"Off: strength never drains and is not shown. Everything else, including the shelter and the hearth, still works."},Zn=560,Je=.575,El=.08,Ke=i=>(i%1+1)%1>=Je,gs=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e];function sd(i){const t=(i%1+1)%1,e=t<Je?Math.PI*t/Je:Math.PI+Math.PI*(t-Je)/(1-Je),n=Math.cos(e),s=Math.sin(e),r=.25,o=Math.hypot(n,s,r),a=vs(-.1,.3,s),l=Math.exp(-Math.pow(s/.2,2));let c=gs([.02,.03,.1],[.28,.52,.9],a),h=gs([.05,.07,.17],[.68,.82,.95],a);h=gs(h,[1,.55,.36],l*.65),c=gs(c,[.35,.3,.55],l*.25);let d=gs([.3,.34,.52],[1,1,1],a);return d=gs(d,[1,.82,.7],l*.35*a),{sunDir:[n/o,s/o,r/o],dayFactor:a,zenith:c,horizon:h,light:d,night:1-a}}const ry=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,oy=`
precision highp float;
varying vec3 vDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSun;
uniform float uNight;
float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float disc(vec3 d, vec3 c, float radius) {
  // an angular disc: 1 inside, soft edge
  float k = acos(clamp(dot(d, c), -1.0, 1.0));
  return 1.0 - smoothstep(radius * 0.9, radius, k);
}
float halo(vec3 d, vec3 c, float radius) {
  float k = acos(clamp(dot(d, c), -1.0, 1.0));
  return exp(-k * k / (radius * radius));
}
void main() {
  vec3 d = normalize(vDir);
  float t = clamp(d.y * 1.6, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(t, 0.7));
  if (d.y < 0.0) col = uHorizon * 0.85;
  if (d.y > 0.0) {
    if (uNight > 0.3) {
      vec3 g = floor(d * 210.0);
      float s = hash(g);
      if (s > 0.9975) col += vec3(0.9, 0.95, 1.0) * (uNight - 0.3);
    }
    col += vec3(1.0, 0.8, 0.5) * halo(d, uSun, 0.35) * 0.35 * (1.0 - uNight);
    col = mix(col, vec3(1.0, 0.94, 0.62), disc(d, uSun, 0.07));
    col += vec3(0.5, 0.6, 0.85) * halo(d, -uSun, 0.22) * 0.25 * uNight;
    col = mix(col, vec3(0.86, 0.9, 0.98), disc(d, -uSun, 0.05));
  } else {
    col = mix(col, vec3(0.86, 0.9, 0.98), disc(d, -uSun, 0.05) * step(-0.03, d.y));
  }
  gl_FragColor = vec4(col, 1.0);
}`;class rd{mesh;mat;constructor(){this.mat=new En({vertexShader:ry,fragmentShader:oy,side:$e,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uZenith:{value:new N},uHorizon:{value:new N},uSun:{value:new N(0,1,0)},uNight:{value:0}}}),this.mesh=new Ht(new or(100,16,12),this.mat),this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1}update(t,e){const n=this.mat.uniforms;n.uZenith.value.set(...t.zenith),n.uHorizon.value.set(...t.horizon),n.uSun.value.set(...t.sunDir),n.uNight.value=t.night,this.mesh.position.copy(e)}}const Tl=[{needs:[E.STALK],out:E.BOARD,count:4},{needs:[E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.BLUEROCK],out:E.CUTSTONE,count:4},{needs:[E.DUNE,E.DUNE,E.DUNE,E.DUNE],out:E.GLASS,count:2},{needs:[E.GLASS,E.BOARD],out:E.LANTERN,count:1},{needs:[E.CUTSTONE,E.BOARD],out:E.DOCK,count:1},{needs:[E.BOARD,E.BOARD],out:E.LADDER,count:4},{needs:[E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK],out:E.HEARTH,count:1}],ay=i=>i.filter(t=>t!==0).sort((t,e)=>t-e);function od(i){const t=ay(i);if(!t.length)return null;for(const e of Tl){const n=[...e.needs].sort((s,r)=>s-r);if(n.length===t.length&&n.every((s,r)=>s===t[r]))return e}return null}function Al(i){const t=new Map;for(const e of i)e&&t.set(e,(t.get(e)??0)+1);return t}function ad(i,t){const e=od(t);if(!e)return null;for(const[n,s]of Al(t))if(i.count(n)<s)return null;return e}function ec(i,t){const e=ad(i,t);if(!e)return null;for(const[s,r]of Al(t))i.take(s,r);const n=i.add(e.out,e.count);if(n<e.count){i.take(e.out,n);for(const[s,r]of Al(t))i.add(s,r);return null}return e}const Bh=(i,t)=>Math.hypot(i.x+.5-t.x,i.z+.5-t.z)<=Pt.hearthReach&&Math.abs(i.y-t.y)<=Pt.hearthDy;function ly(i,t,e){const n=Math.floor(t.x),s=Math.floor(t.z),r=Math.floor(t.y)+2;for(let o=r;o<r+Pt.coverClearance;o++){let a=i.getBlock(n,o,s);if(e&&e.x===n&&e.y===o&&e.z===s&&(a=e.id),Jt[a]?.solid&&a!==E.AIR)return!0}return!1}function uo(i,t,e,n,s,r){let o=!1,a=!1;for(const d of t)Bh(d,e)&&(d.lit?o=!0:a=!0);r&&Bh({...r},e)&&(o=!0);const l=!n,c=ly(i,e,s),h=[];return l||h.push("standing in water"),o||h.push(a?"the hearth is out":"not near a lit hearth"),c||h.push("no roof above you"),{dry:l,warm:o,covered:c,ok:l&&o&&c,nearLit:o,missing:h}}const ld=60,cy=14,hy="Night is coming. Cold drains strength faster—recover under cover by your hearth.",uy=5,dy=1.5,bt=(i,t=2)=>Math.round(i*10**t)/10**t,Ta=(i,t,e)=>`${i},${t},${e}`;class cd{constructor(t,e,n){this.world=t,this.tide=e,this.emit=n;const s=t.terrain.features;if(!t.terrain.arena&&s.tide.rect){const r=s.hoist;for(let o=r.homePlane;o<s.quarry.floorY;o++)(o-r.homePlane)%6===5&&this.terrainLanterns.push({x:r.ladder.x+1,y:o,z:r.ladder.z})}}strength=Pt.max;mode="normal";hearths=new Map;lanterns=new Map;terrainLanterns=[];shelter={dry:!0,warm:!1,covered:!1,ok:!1,nearLit:!1,missing:[]};chips=[];rates={move:0,work:0,cold:0,wet:0,refill:0,net:0};night=!1;inLantern=!1;resting=!1;collapse=null;totals={move:0,work:0,cold:0,nightCold:0,wet:0,refilled:0,collapses:0,rests:0};workUntil=0;active=0;sampleAt=0;causeKey="";shelterKey="";restStartWorld=0;restStartStrength=0;restStartPhase=0;lastPhase=0;inCamp=null;leftCampAt=null;leftCampStrength=0;teleported=!1;duskShown=!1;duskNotice=null;lanternSpots(){const t=[...this.lanterns.values()];for(const e of this.terrainLanterns)this.world.getBlock(e.x,e.y,e.z)===E.LANTERN&&t.push(e);return t}get activeS(){return this.active}worldS(){return bt(this.tide.clock.activeS,2)}setMode(t,e="teacher"){if(t===this.mode)return;const n=this.mode;this.mode=t,t==="off"&&this.stopRest("setting changed",this.lastPhase),this.emit("survival_setting",{was:n,now:t,effect:bl[t],by:e,activeS:bt(this.active),worldS:this.worldS()})}onBlock(t,e,n,s,r){const o=Ta(t,e,n);r===E.LANTERN&&this.lanterns.delete(o),(r===E.HEARTH||r===E.HEARTH_OUT)&&this.hearths.delete(o),s===E.LANTERN&&(this.lanterns.set(o,{x:t,y:e,z:n}),this.emit("lantern_placed",{at:{x:t,y:e,z:n},lanterns:this.lanterns.size,activeS:bt(this.active),worldS:this.worldS()})),(s===E.HEARTH||s===E.HEARTH_OUT)&&(this.hearths.set(o,{x:t,y:e,z:n,lit:s===E.HEARTH}),this.emit("hearth_placed",{at:{x:t,y:e,z:n},hearths:this.hearths.size,activeS:bt(this.active),worldS:this.worldS()}))}rescan(){this.hearths.clear(),this.lanterns.clear(),this.world.forEachPlaced((t,e,n,s)=>{this.world.getBlock(t,e,n)===s&&(s===E.LANTERN?this.lanterns.set(Ta(t,e,n),{x:t,y:e,z:n}):(s===E.HEARTH||s===E.HEARTH_OUT)&&this.hearths.set(Ta(t,e,n),{x:t,y:e,z:n,lit:s===E.HEARTH}))})}lights(){const t=[];for(const e of this.lanternSpots())t.push([e.x+.5,e.y+.5,e.z+.5,Pt.lanternReach+1]);for(const e of this.hearths.values())e.lit&&t.push([e.x+.5,e.y+.5,e.z+.5,Pt.hearthReach+2]);return t}lanternWarmth(t){for(const e of this.lanternSpots())if(!(Math.hypot(e.x+.5-t.x,e.z+.5-t.z)>Pt.lanternReach||Math.abs(e.y-t.y)>Pt.lanternDy)&&this.clearLine(e,t))return!0;return!1}clearLine(t,e){const n=t.x+.5,s=t.y+.5,r=t.z+.5,o=e.x,a=e.y+1,l=e.z,c=Math.hypot(o-n,a-s,l-r),h=Math.max(1,Math.ceil(c/.5));for(let d=1;d<h;d++){const u=d/h,p=Math.floor(n+(o-n)*u),g=Math.floor(s+(a-s)*u),v=Math.floor(r+(l-r)*u);if(p===t.x&&g===t.y&&v===t.z)continue;const m=this.world.getBlock(p,g,v),f=Jt[m];if(f&&f.solid&&f.kind==="opaque")return!1}return!0}updateHearths(){const t=this.world.terrain.features.tide.rect;for(const e of this.hearths.values()){const n=!!t&&e.x>=t.x0&&e.x<t.x1&&e.z>=t.z0&&e.z<t.z1,s=n&&this.world.tideLevel>e.y+.55;e.lit&&s?(e.lit=!1,this.world.setBlock(e.x,e.y,e.z,E.HEARTH_OUT),this.emit("hearth_doused",{at:{x:e.x,y:e.y,z:e.z},level:bt(this.world.tideLevel),activeS:bt(this.active),worldS:this.worldS()})):!e.lit&&(!n||this.world.tideLevel<e.y+.3)&&(e.lit=!0,this.world.setBlock(e.x,e.y,e.z,E.HEARTH),this.emit("hearth_relit",{at:{x:e.x,y:e.y,z:e.z},activeS:bt(this.active),worldS:this.worldS()}))}}timeScale(t){return this.resting&&this.mode!=="off"&&Ke(t)&&this.strength<Pt.max?Pt.restScale:1}startRest(t){return this.collapse||this.resting||!this.shelter.ok||this.mode==="off"?!1:(this.resting=!0,this.totals.rests++,this.restStartWorld=this.tide.clock.activeS,this.restStartStrength=this.strength,this.restStartPhase=t,this.emit("rest_start",{strength:bt(this.strength),night:Ke(t),phase:bt(t,3),activeS:bt(this.active),worldS:this.worldS()}),!0)}stopRest(t,e){this.resting&&(this.resting=!1,this.emit("rest_end",{reason:t,strengthFrom:bt(this.restStartStrength),strengthTo:bt(this.strength),worldSecondsPassed:bt(this.tide.clock.activeS-this.restStartWorld),phaseFrom:bt(this.restStartPhase,3),phaseTo:bt(e,3),activeS:bt(this.active),worldS:this.worldS()}))}tick(t,e){if(this.active+=t,this.lastPhase=e.phase,this.duskNotice&&(this.duskNotice.left-=t)<=0&&(this.duskNotice=null),this.collapse){this.collapse.left-=t,this.collapse.left<=0&&this.wake(e);return}this.updateHearths();const n=e.player,s={x:n.x,y:n.y,z:n.z};this.shelter=uo(this.world,this.hearths.values(),s,n.inWater),this.night=Ke(e.phase),this.inLantern=this.lanternWarmth(s),this.trackCamp(s,e),this.checkDusk(e.phase),e.working&&(this.workUntil=this.active+.5);const r=this.active<this.workUntil,o=this.shelter.ok,a={move:0,work:0,cold:0,wet:0,refill:0,net:0};if(this.mode!=="off"){if(e.moving&&(a.move=e.sprint?Pt.sprint:Pt.walk),r&&(a.work=Pt.work),!o){let p=this.night?Pt.coldNight:Pt.coldDay;this.shelter.nearLit&&(p*=Pt.hearthColdFactor),this.night&&this.inLantern&&(p*=Pt.lanternNightColdFactor),a.cold=p,n.inWater&&(a.wet=Pt.wet)}const u=this.mode==="gentle"?Pt.gentleFactor:1;a.move*=u,a.work*=u,a.cold*=u,a.wet*=u,o&&(a.refill=Pt.refill)}a.net=a.refill-a.move-a.work-a.cold-a.wet,this.rates=a;const l=this.strength;this.strength=Math.max(0,Math.min(Pt.max,this.strength+a.net*t)),this.totals.move+=a.move*t,this.totals.work+=a.work*t,this.totals.cold+=a.cold*t,this.night&&(this.totals.nightCold+=a.cold*t),this.totals.wet+=a.wet*t,a.net>0&&(this.totals.refilled+=this.strength-l);const c=[];this.mode!=="off"&&(r?c.push({id:"working",label:"Working"}):e.moving&&c.push({id:"moving",label:"Moving"}),a.cold>0&&!(this.night&&!o&&!1)&&c.push({id:"cold",label:"Cold"}),this.night&&!o&&c.push({id:"night",label:"Night"}),a.wet>0&&c.push({id:"wet",label:"Wet"}),this.shelter.nearLit&&!o&&c.push({id:"hearth",label:"Hearth warmth"}),this.night&&this.inLantern&&!o&&c.push({id:"lantern",label:"Lantern warmth"}),o&&this.strength<Pt.max&&c.push({id:"recovering",label:"Recovering"})),this.chips=c,this.resting&&(this.mode==="off"?this.stopRest("setting changed",e.phase):e.moving?this.stopRest("moved",e.phase):e.acting?this.stopRest("acted",e.phase):o?this.strength>=Pt.max&&this.stopRest("full",e.phase):this.stopRest("shelter lost",e.phase));const h=c.map(u=>u.id).join("+");h!==this.causeKey&&(this.causeKey=h,this.emit("strength_causes",{causes:c.map(u=>u.id),strength:bt(this.strength),net:bt(a.net),activeS:bt(this.active),worldS:this.worldS(),night:this.night}));const d=`${this.shelter.dry}${this.shelter.warm}${this.shelter.covered}`;d!==this.shelterKey&&(this.shelterKey=d,this.emit("shelter_state",{dry:this.shelter.dry,warm:this.shelter.warm,covered:this.shelter.covered,ok:this.shelter.ok,missing:this.shelter.missing,at:{x:bt(n.x,1),y:bt(n.y,1),z:bt(n.z,1)},activeS:bt(this.active),worldS:this.worldS()})),this.active>=this.sampleAt&&(this.sampleAt=this.active+3,this.emit("strength_sample",{strength:bt(this.strength,1),rates:{move:bt(a.move),work:bt(a.work),cold:bt(a.cold),wet:bt(a.wet),refill:bt(a.refill),net:bt(a.net)},causes:c.map(u=>u.id),phase:bt(e.phase,3),activeS:bt(this.active),worldS:this.worldS()})),this.mode!=="off"&&this.strength<=0&&this.startCollapse(e)}trackCamp(t,e){if(this.hearths.size===0){this.inCamp=null;return}let n=!1,s=!0;for(const a of this.hearths.values()){const l=Math.hypot(a.x+.5-t.x,a.z+.5-t.z);l<=Pt.hearthReach&&Math.abs(a.y-t.y)<=Pt.hearthDy&&(n=!0),l<=Pt.hearthReach+dy&&Math.abs(a.y-t.y)<=Pt.hearthDy+1&&(s=!1)}const r={x:bt(t.x,1),y:bt(t.y,1),z:bt(t.z,1)},o=this.teleported?{afterCollapse:!0}:{};if(this.inCamp===null)this.inCamp=n,this.leftCampAt=null;else if(this.inCamp&&s)this.inCamp=!1,this.leftCampAt=this.active,this.leftCampStrength=this.strength,this.emit("camp_departure",{at:r,strength:bt(this.strength),night:Ke(e.phase),activeS:bt(this.active),worldS:this.worldS(),...o});else if(!this.inCamp&&n){this.inCamp=!0;const a=this.leftCampAt===null?null:bt(this.active-this.leftCampAt);this.emit("camp_return",{at:r,strength:bt(this.strength),strengthLeft:this.leftCampAt===null?null:bt(this.leftCampStrength),awayS:a,night:Ke(e.phase),activeS:bt(this.active),worldS:this.worldS(),...o}),this.leftCampAt=null}this.teleported=!1}checkDusk(t){if(this.mode==="off")return;const e=Je-ld/Zn,n=(t%1+1)%1;if(n<e-.01&&(this.duskShown=!1),this.duskShown||n<e||n>=Je)return;this.duskShown=!0;const s=this.totals.refilled>=uy;this.emit("dusk_warning",{phase:bt(n,3),worldSecondsToDusk:bt((Je-n)*Zn,1),strength:bt(this.strength),shown:!s,skippedBecause:s?"recovery already shown":null,activeS:bt(this.active),worldS:this.worldS()}),s||(this.duskNotice={text:hy,left:cy})}startCollapse(t){this.stopRest("collapsed",t.phase);const e=t.player,n=[];let s=0;for(const l of t.inv.slots)l&&(n.push([l.id,l.count]),l.id===E.BOARD&&(s+=l.count));const r=Math.min(this.tide.pileOwned,s);this.tide.pileOwned-=r,t.inv.slots.fill(null),t.inv.selected=0;const o=this.world.groundPlane(Math.floor(e.x),Math.floor(e.z),e.y+1),a=this.tide.loose.add({x:e.x,y:Math.max(o,e.y)+Te,z:e.z,yaw:e.yaw,origin:"dropped",pile:!1});a.items=n,a.pileCount=r,this.collapse={left:Pt.collapseS,at:{x:e.x,y:e.y,z:e.z},bundle:a.id},this.totals.collapses++,this.emit("collapse_start",{at:{x:bt(e.x,1),y:bt(e.y,1),z:bt(e.z,1)},causes:this.chips.map(l=>l.id),night:this.night,inWater:e.inWater,bundle:a.id,items:n,itemCount:n.reduce((l,[,c])=>l+c,0),activeS:bt(this.active),worldS:this.worldS()})}wake(t){const e=this.collapse;this.collapse=null,this.strength=this.mode==="off"?Pt.max:Pt.wakeStrength,t.player.teleport(t.spawn.x,t.spawn.y,t.spawn.z),this.teleported=!0,this.emit("collapse_wake",{strength:this.strength,bundle:e.bundle,at:{x:bt(t.spawn.x,1),z:bt(t.spawn.z,1)},night:Ke(t.phase),unconsciousS:Pt.collapseS,activeS:bt(this.active),worldS:this.worldS()})}recoverBundle(t,e){if(!t.items||this.tide.loose.get(t.id)!==t)return{recovered:0,left:0};let n=0;const s=[];for(const[o,a]of t.items){const l=e.add(o,a);if(n+=l,o===E.BOARD&&l>0){const c=Math.min(l,t.pileCount??0);this.tide.pileOwned+=c,t.pileCount=(t.pileCount??0)-c}l<a&&s.push([o,a-l])}const r=s.reduce((o,[,a])=>o+a,0);return r===0?this.tide.loose.remove(t.id):t.items=s,this.emit("bundle_recovered",{bundle:t.id,recovered:n,left:r,activeS:bt(this.active),worldS:this.worldS()}),{recovered:n,left:r}}get unconscious(){return this.collapse!==null}bundle(){return this.tide.loose.boards.find(t=>t.items)??null}bundles(){return this.tide.loose.boards.filter(t=>t.items)}serialize(){return{strength:this.strength,mode:this.mode,active:this.active,collapse:this.collapse,totals:this.totals,duskShown:this.duskShown}}restore(t){if(this.rescan(),!t||typeof t!="object")return;const e=(r,o)=>typeof r=="number"&&Number.isFinite(r)?r:o;this.strength=Math.max(1,Math.min(Pt.max,e(t.strength,Pt.max))),this.mode=t.mode==="gentle"||t.mode==="off"?t.mode:"normal",this.active=Math.max(0,e(t.active,0));const n=t.collapse;n&&typeof n=="object"&&n.at&&Number.isFinite(n.at.x)&&(this.collapse={left:Math.max(0,Math.min(Pt.collapseS,e(n.left,Pt.collapseS))),at:n.at,bundle:e(n.bundle,0)});const s=t.totals;if(s)for(const r of Object.keys(this.totals))this.totals[r]=e(s[r],0);this.sampleAt=this.active+3,this.duskShown=t.duskShown===!0}}class Tn extends Oo{surv;phase=El;active=0;workFlag=!1;constructor(t="survival-bot",e="normal"){super(t),this.surv=new cd(this.world,this.rt,(n,s)=>this.log.log(n,s)),this.rt.realClock=()=>this.surv.activeS,this.surv.setMode(e,"settings"),this.surv.rescan()}get spawn(){const t=this.world.terrain.spawnPoint();return{x:t.x,y:t.y+.01,z:t.z}}afterPlace(t,e,n,s,r){this.surv.onBlock(t,e,n,s,r),this.workFlag=!0}afterBreak(t,e,n,s){this.surv.onBlock(t,e,n,E.AIR,s),this.workFlag=!0}step(t=In){const e=this.surv.unconscious?In:t;this.player.step(e,oe);const n=oe*this.surv.timeScale(this.phase);this.rt.tick(n,this.player),this.phase=(this.phase+n/Zn)%1,this.active+=oe;const s=Math.hypot(this.player.vx,this.player.vz)>.6&&!this.surv.unconscious;this.surv.tick(oe,{player:this.player,inv:this.inventory,phase:this.phase,moving:s,sprint:!!e.sprint,working:this.workFlag,acting:!!(e.forward||e.right||e.jump||e.sprint)||this.workFlag,spawn:this.spawn}),this.workFlag=!1,this.walked+=Math.hypot(this.player.x-this.lastX,this.player.z-this.lastZ),this.lastX=this.player.x,this.lastZ=this.player.z}openBundle(t){this.aimAt(t.x,t.y,t.z);const e=this.rt.loose.raycast(this.player.eye(),this.player.forwardVec(),6);if(!e||e.board.id!==t.id)return!1;const n=this.surv.recoverBundle(t,this.inventory);return this.actions++,this.idle(.35),n.recovered>0}fetchBundle(){for(let t=0;t<6;t++){const e=this.surv.bundle();if(!e)return!0;this.openBundle(e)||(this.walkTo(e.x+(t%2?1.2:2.2),e.z+.2,.5,60),!this.openBundle(e)&&(this.walkTo(e.x,e.z,.4,40),this.openBundle(e)))}return this.surv.bundle()===null}setWorld(t){this.phase=(El+t/Zn)%1,this.rt.clock.activeS=t}craftRow(t){const e=t.filter(s=>s===E.BOARD).length,n=ec(this.inventory,t);return n?(this.rt.noteBoardsConsumed(e,this.inventory.count(E.BOARD)-(n.out===E.BOARD?n.count:0),`crafted ${n.out}`),this.workFlag=!0,this.actions++,this.idle(.35),!0):!1}dig(t,e,n,s){return this.workFlag=!0,this.idle(s),this.breakAt(t,e,n)}ground(t,e){return this.world.groundPlane(Math.floor(t),Math.floor(e),100)}}const Be={x:56,z:6},Ne={x:19,z:5},hd=[[46,8],[26,8]],fy={dune:.4};function Gi(i,t){const e=i.world.terrain.features.tide.pile;i.walkTo(e.x+3.2,e.z+.5,.6);let n=0;for(let s=0;s<40&&n<t;s++){const r=i.pileBoards().filter(o=>o.state==="resting").sort((o,a)=>a.y-o.y);if(!r.length)break;i.collect(r[0])&&n++}return n}function Fo(i,t=Be){const e=i.ground(t.x,t.z),n={x:t.x,y:e,z:t.z},s={x:t.x,y:e,z:t.z+1};i.walkTo(t.x-1.5,t.z-1.5,.7),i.craftRow([E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK]),i.place(s.x,s.y,s.z,E.HEARTH);for(let r=0;r<3;r++)i.place(t.x+1,e+r,t.z,E.LOAM);return i.place(t.x,e+2,t.z,E.BOARD),i.walkTo(t.x+.5,t.z+.5,.25),{stand:n,hearth:s}}const Vi=i=>[i.stand.x+.5,i.stand.z+.5];function nc(i,t){i.ground(Ne.x,Ne.z);let e=0;for(let n=0;n<3&&e<t;n++)for(let s=0;s<3&&e<t;s++){const r=Ne.x-1+n,o=Ne.z-1+s,a=i.ground(r,o)-1;i.world.getBlock(r,a,o)===E.DUNE&&(i.walkTo(r+.5,o+2.2,.6),i.dig(r,a,o,fy.dune)&&e++)}return e}function ic(i,t){const e=i.active,n=i.surv.strength,s=(i.walkTo(Ne.x+3,Ne.z,.7,90),nc(i,4)),[r,o]=Vi(t);return i.walkTo(r,o,.3,90),{durationActiveS:i.active-e,strengthBefore:n,strengthAfter:i.surv.strength,strengthSpent:n-i.surv.strength,dune:s}}function ud(i,t=hd){i.craftRow([E.DUNE,E.DUNE,E.DUNE,E.DUNE]),i.craftRow([E.GLASS,E.BOARD]),i.craftRow([E.GLASS,E.BOARD]);let e=0;for(const[n,s]of t){const r=i.ground(n,s);i.walkTo(n+.5,s+1.8,.6),i.place(n,r,s,E.LANTERN)&&e++}return e}const Wt=i=>Math.round(i*10)/10,li=i=>Math.round(i*100)/100;function py(){const i=new Tn("loop-thinker"),t=[],e=b=>void t.push({label:b,activeS:Wt(i.active),worldS:Wt(i.rt.clock.activeS),phase:li(i.phase),night:Ke(i.phase),strength:Wt(i.surv.strength)}),n=new Set,s=()=>{for(const b of i.surv.chips)n.add(b.id)},r=i.step.bind(i);i.step=b=>{r(b),s()},e("arrive on the coast"),Gi(i,4),e("four boards from the pile");const o=Fo(i);e("hearth camp built (covered, warm, dry)");const a=i.ground(Be.x,Be.z);for(let b=0;b<6;b++)i.dig(Be.x-3+b%3,a-1,Be.z-2-Math.floor(b/3),.6);e("dug loam and stone near camp");const[l,c]=Vi(o);i.walkTo(l,c,.3),e("back in camp, waiting for the water to fall"),i.waitUntil(()=>i.rt.clock.activeS>=205,300),e("water has fallen: the flats are open");const h=ic(i,o);e("back from the sand pocket with four Dune");let d=null;const u=i.surv.strength,p=i.active,g=i.rt.clock.activeS;i.idle(.3),i.surv.startRest(i.phase)&&(i.waitUntil(()=>!i.surv.resting,120),d={from:Wt(u),to:Wt(i.surv.strength),activeS:Wt(i.active-p),worldSecondsPassed:Wt(i.rt.clock.activeS-g)}),e("rested to full strength in the camp");const v=ud(i);e("two lanterns lit along the dark stretch");let m=0;Ke(i.phase)&&(m=Wt((1-(i.phase-.55)/.45)*.45*Zn));const f=i.surv.totals,M=f.move+f.work+f.cold+f.wet;return{marks:t,campBuiltActiveS:t[2].activeS,strengthAtCampBuilt:t[2].strength,restFromTo:d,outing:h,lanternsPlaced:v,totals:{...f},refillToDrain:M>0?li(f.refilled/M):0,chipsSeen:[...n],finalStrength:Wt(i.surv.strength),collapses:f.collapses,nightLeftWhenDone:m}}function zh(i){const t=new Tn(i?"route-lit":"route-dark");if(t.setWorld(349),t.idle(.1),t.player.teleport(Be.x+.5,t.ground(Be.x,Be.z)+.01,Be.z+.5),i)for(const[l]of hd){const c=t.ground(l,8);t.world.setBlock(l,c,8,E.LANTERN),t.surv.onBlock(l,c,8,E.LANTERN,E.AIR)}let e=0;const n=t.step.bind(t);t.step=l=>{n(l),t.surv.inLantern&&(e+=1/60)};const s=t.surv.strength,r=t.active,o={...t.surv.totals};t.walkTo(Ne.x+3,Ne.z+1,.7,90),nc(t,4),t.walkTo(Be.x+.5,Be.z+.5,.3,90);const a=t.surv.totals;return{activeS:Wt(t.active-r),strengthLost:li(s-t.surv.strength),moveDrain:li(a.move-o.move),workDrain:li(a.work-o.work),coldDrain:li(a.cold-o.cold),nightColdDrain:li(a.nightCold-o.nightCold),litSeconds:Wt(e)}}function my(){const i=zh(!1),t=zh(!0),e=i.strengthLost>0?(i.strengthLost-t.strengthLost)/i.strengthLost*100:0;return{dark:i,lit:t,reductionPercent:Wt(e),meetsBar:e>=25}}function Yr(){const i=new Tn("matched");Gi(i,4);const t=Fo(i);i.setWorld(307),i.idle(.1),i.surv.strength=20;const[e,n]=Vi(t);return i.walkTo(e,n,.3),i.surv.strength=20,{sim:i,camp:t}}const gn=i=>i.inventory.summary();function Aa(i){for(let t=0;t<12e3&&!i.surv.unconscious;t++)i.step({forward:Math.floor(t/30)%2===0?1:-1,right:0,jump:!1,sprint:!0});for(;i.surv.unconscious;)i.idle(.25)}function jr(i,t,e){for(let n=0;n<4e3&&!(i.surv.strength>=99.99&&gn(i)===e);n++)i.idle(.25);return Wt(i.active-t)}function gy(){const i=[];let t="";{const{sim:n}=Yr();t=gn(n);const s=n.active;n.idle(.3);const r=n.surv.startRest(n.phase);i.push({name:"rest in the working camp",activeS:jr(n,s,t),reached:r&&n.surv.strength>=99.99,note:"strength 20, pack carried, hearth lit, roof over the spot"})}{const{sim:n,camp:s}=Yr(),r=gn(n),o=n.inventory.serialize(),a=n.active;n.inventory.slots.fill(null),n.player.teleport(n.spawn.x,n.spawn.y,n.spawn.z),Aa(n);const[l,c]=Vi(s);n.walkTo(l,c,.3),n.inventory.slots.splice(0,n.inventory.slots.length,...o.slots.map(u=>u?{id:u[0],count:u[1]}:null)),n.idle(.3);const h=n.surv.startRest(n.phase),d=jr(n,a,r);i.push({name:"collapse beside the start, pack left in camp",activeS:d,reached:h&&n.surv.strength>=99.99&&gn(n)===r,note:"paced at a run until empty, 20 s unconscious, walked back to camp, took the stored pack for free, rested"})}{const{sim:n,camp:s}=Yr(),r=gn(n),o=n.active;n.walkTo(Ne.x+3,Ne.z,.7,90),Aa(n);const a=(n.walkTo(Ne.x+3,Ne.z,.8,90),n.fetchBundle()),[l,c]=Vi(s);n.walkTo(l,c,.3,90),n.idle(.3),n.surv.startRest(n.phase);const h=jr(n,o,r);i.push({name:"collapse at the sand pocket, fetch the bundle",activeS:h,reached:a&&n.surv.strength>=99.99&&gn(n)===r,note:"walked out, paced at a run until empty, 20 s unconscious, walked to the pocket, opened the bundle, walked back, rested"})}{const{sim:n,camp:s}=Yr(),r=gn(n),o=n.active;n.player.teleport(n.spawn.x,n.spawn.y,n.spawn.z),Aa(n);const a=n.fetchBundle(),[l,c]=Vi(s);n.walkTo(l,c,.3),n.idle(.3),n.surv.startRest(n.phase);const h=jr(n,o,r);i.push({name:"collapse beside the start with boards in the pack",activeS:h,reached:a&&n.surv.strength>=99.99&&gn(n)===r,note:"paced at a run until empty, 20 s unconscious, opened the bundle, walked to camp, rested"})}const e=i[0].activeS;return{baseline:t,routes:i,restIsFastest:i.slice(1).every(n=>n.activeS>e&&n.reached)&&i[0].reached}}function vy(){const i=new Tn("trap");i.setWorld(307),i.idle(.1),i.inventory.slots.fill(null),i.player.teleport(i.spawn.x,i.spawn.y,i.spawn.z),i.surv.strength=Pt.wakeStrength;const t={strength:i.surv.strength,night:Ke(i.phase),pack:gn(i)},e=i.active;let n=i.surv.strength;const s=i.step.bind(i);i.step=f=>{s(f),i.surv.strength<n&&(n=i.surv.strength)};const r=i.spawn,o=i.world.terrain.features,a=Math.floor(r.x),l=Math.floor(r.z),c=(f,M)=>i.world.terrain.heightAt(f,M),[h,d]=o.supplies.outcrop[0];i.walkTo(h+.5,d+2.2,.7);for(let f=0;f<3;f++)i.dig(h+f%2,c(h,d)+(f>=2?0:1),d+(f>=2?1:0),.6);const u=o.supplies.stalks[0];i.walkTo(u[0]+.5,u[1]-1.8,.7),i.dig(u[0],c(u[0],u[1])+2,u[1],1.5);const p=i.ground(a,l);i.walkTo(a+.5,l-1.5,.7),i.craftRow([E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK]);const g=i.place(a,p,l+1,E.HEARTH);for(let f=0;f<4;f++){const M=a-2+f%2,b=l-3-Math.floor(f/2);i.dig(M,i.ground(M,b)-1,b,.6)}i.walkTo(a-.5,l-1.2,.7);for(let f=0;f<3;f++)i.place(a+1,p+f,l,E.LOAM);i.place(a,p+2,l,E.LOAM),i.walkTo(a+.5,l+.5,.3),i.idle(.3);const v=i.surv.shelter.ok,m=i.active-e;v&&i.surv.startRest(i.phase);for(let f=0;f<400&&i.surv.strength<99.99&&!i.surv.unconscious;f++)i.idle(.25);return{woke:t,minStrength:Wt(n),hearthPlaced:g,shelterReached:v,restedToFull:i.surv.strength>=99.99,activeS:Wt(m),collapsedAgain:i.surv.totals.collapses>0}}const Zr=i=>i.inventory.slots.reduce((t,e)=>t+(e?e.count:0),0);function _y(){const i=[],t=(s,r,o)=>{const a=new Tn("cons-"+s);r(a);const l=gn(a),c=Zr(a),h=a.rt.census().total;o(a),a.surv.strength=.4;for(let m=0;m<6e3&&!a.surv.unconscious;m++)a.step({forward:0,right:0,jump:!1,sprint:!1});const d=gn(a),u=a.surv.bundle(),p=u?u.items.reduce((m,[,f])=>m+f,0):0;for(;a.surv.unconscious;)a.idle(.25);const g=a.rt.census().total===h;a.surv.strength=90;const v=a.fetchBundle();i.push({name:s,before:l,afterCollapse:d,bundleItems:p,recovered:v,restored:gn(a)===l,pileTotal:a.rt.census().total,exactlyOnce:Zr(a)===c&&p===c&&g&&a.surv.bundle()===null&&a.rt.census().total===12})};t("carrying the starter pack and three pile boards",s=>Gi(s,3),s=>s.walkTo(s.spawn.x+2,s.spawn.z,.5)),t("an empty pack",s=>s.inventory.slots.fill(null),()=>{}),t("collapse at the sand pocket",()=>{},s=>s.walkTo(Ne.x+3,Ne.z,.7,90)),t("collapse in the shallows at high water",s=>{Gi(s,6),s.setWorld(130),s.idle(.1)},s=>{s.walkTo(44.5,7.5,.6,60)});let e=!0,n=0;for(const s of[20,70,100,125,140,165,200,240]){const r=new Tn("cons-tide-"+s);Gi(r,2);const o=Zr(r);r.setWorld(s),r.idle(.1),r.player.teleport(44.5,r.ground(44,7)+.01,7.5),r.surv.strength=.5;for(let l=0;l<3e3&&!r.surv.unconscious;l++)r.step({forward:0,right:0,jump:!1,sprint:!1});for(;r.surv.unconscious;)r.idle(.25);r.surv.strength=90,r.idle(30),r.fetchBundle()&&Zr(r)===o&&r.rt.census().total===12||(e=!1),n++}return{cases:i,floatingBundleReachableAtEveryTide:e,sampledTides:n}}function yy(){const i=new Tn("sand"),t=i.spawn,e=i.world.terrain.features;let n=0,s=null,r=0;for(let h=Math.floor(t.x)-50;h<=Math.floor(t.x)+30;h++)for(let d=Math.floor(t.z)-30;d<=Math.floor(t.z)+30;d++)for(let u=30;u<70;u++){if(i.world.getBlockEnsured(h,u,d)!==E.DUNE)continue;if(h>=e.pocket.x0&&h<=e.pocket.x1&&d>=e.pocket.z0&&d<=e.pocket.z1)r++;else{const g=Math.hypot(h-t.x,d-t.z);g<=30&&n++,(s===null||g<s)&&(s=g)}}const o=Fo(Object.assign(i,{})),a=h=>{const d=new Tn(h?"sand-night":"sand-day");return d.setWorld(h?349:230),d.idle(.1),d.player.teleport(Be.x+.5,d.ground(Be.x,Be.z)+.01,Be.z+.5),ic(d,o)},l=a(!1),c=a(!0);return{duneNearStart:n,nearestOutsidePocket:s===null?null:Wt(s),pocketDune:r,pocketDistanceFromCamp:Wt(Math.hypot(Be.x-Ne.x,Be.z-Ne.z)),outing:c,fundableFromFullBar:c.dune===4&&c.strengthAfter>0&&l.dune===4,nightSpent:Wt(c.strengthSpent),daySpent:Wt(l.strengthSpent)}}const Hh=i=>Ke(i)?Math.max(0,(1-(i%1-.55)/.45)*.45*Zn):0;function xy(){const i=new Tn("night-loop"),t=[],e=v=>void t.push({label:v,activeS:Wt(i.active),worldS:Wt(i.rt.clock.activeS),phase:li(i.phase),night:Ke(i.phase),strength:Wt(i.surv.strength)});Gi(i,6);const n=Fo(i),[s,r]=Vi(n);i.waitUntil(()=>i.rt.clock.activeS>=250,400),i.waitUntil(()=>Ke(i.phase),200),i.surv.strength=62,e("dark: the camp is ready, strength 62"),i.idle(.3),i.surv.startRest(i.phase),i.waitUntil(()=>!i.surv.resting,120),e("rested to full");const o=Wt(Hh(i.phase)),a=ic(i,n);e("first night outing done (sand fetched, no lanterns yet)");const l=ud(i);e("two lanterns lit");const c=i.surv.strength,h=i.active;i.walkTo(Ne.x+3,Ne.z,.7,90);const d=nc(i,4);i.walkTo(s,r,.3,90);const u=c-i.surv.strength,p=i.active-h;e("second night outing done"),i.craftRow([E.DUNE,E.DUNE,E.DUNE,E.DUNE]),i.craftRow([E.GLASS,E.BOARD]),i.craftRow([E.GLASS,E.BOARD]);let g=0;for(const[v,m]of[[36,8],[16,8]]){const f=i.ground(v,m);i.walkTo(v+.5,m+1.8,.6),i.place(v,f,m,E.LANTERN)&&g++}return e("the lit path extended with two more lanterns"),{marks:t,nightSecondsLeftAfterRest:o,firstNightOuting:{spent:Wt(a.strengthSpent),activeS:Wt(a.durationActiveS),dune:a.dune},secondOuting:{spent:Wt(u),activeS:Wt(p),dune:d,withLanterns:l},lanternsPlaced:l+g,strengthAtEnd:Wt(i.surv.strength),nightLeftAtEnd:Wt(Hh(i.phase)),collapses:i.surv.totals.collapses}}function My(){const i=new Tn("douse");Gi(i,2);const t={x:33,z:8},e=i.ground(t.x,t.z);i.walkTo(t.x-1.5,t.z-1.5,.7),i.craftRow([E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK]),i.place(t.x,e,t.z,E.LOAM),i.place(t.x,e,t.z+1,E.HEARTH);for(let a=0;a<4;a++)i.place(t.x+1,e+a,t.z,E.LOAM);i.place(t.x,e+3,t.z,E.BOARD),i.player.teleport(t.x+.5,e+1.01,t.z+.5),i.setWorld(300),i.idle(.3),i.surv.strength=5,i.idle(.3);const n=i.rt.clock.activeS,s=i.surv.startRest(i.phase);i.waitUntil(()=>!i.surv.resting,120);const r=i.log.all("bot").map(a=>a.kind),o=i.log.all("bot").filter(a=>a.kind==="rest_end").pop();return{rested:s,doused:r.includes("hearth_doused"),relit:r.includes("hearth_relit"),worldSecondsPassed:Wt(i.rt.clock.activeS-n),restEnded:o?String(o.data.reason):null}}function Sy(){const i=new Tn("idle-day"),t=i.surv.strength,e=i.active;for(;!Ke(i.phase)&&i.active<2e3;)i.idle(.5);const n=Wt(i.active-e),s=Wt(i.surv.strength),r=i.active;for(;!i.surv.unconscious&&i.active<r+600;)i.idle(.5);const o=Zn,a=Pt.coldDay*Je*o+Pt.coldNight*(1-Je)*o;return{daylightSeconds:n,strengthAtDusk:s,lostByDusk:Wt(t-s),collapsedAtNight:i.surv.unconscious,nightSecondsToCollapse:i.surv.unconscious?Wt(i.active-r):null,fullDayDrainIfNotCollapsed:Wt(a)}}function wy(i){const t=document.createElement("canvas"),n={ready:!0,isReady:()=>!0,game:i,getBlock:(s,r,o)=>i.world.getBlockEnsured(s,r,o),voxelHash:()=>i.world.storeHash(),editCount:()=>i.world.editCount(),breakBlock:(s,r,o)=>i.breakBlock(s,r,o),placeBlock:(s,r,o,a,l=!1)=>i.placeBlock(s,r,o,a,l),target:()=>i.target(),blockName:s=>Jt[s]?.name,player:()=>{const s=i.player;return{x:s.x,y:s.y,z:s.z,yaw:s.yaw,pitch:s.pitch,onGround:s.onGround,inWater:s.inWater,units:ho(s.y)}},teleport:(s,r,o)=>i.player.teleport(s,r,o),look:(s,r)=>{i.player.yaw=s,i.player.pitch=r},lookAt:(s,r,o)=>{const a=i.player,l=s-a.x,c=r-(a.y+1.62),h=o-a.z;a.yaw=Math.atan2(-l,-h),a.pitch=Math.atan2(c,Math.hypot(l,h))},advance:(s,r={},o=!1)=>i.advance(s,{...In,...r},o),walk:(s,r=1)=>u_(i,s,r),flush:()=>i.chunks.flush(),freeze:s=>{i.frozen=s},frame:()=>{i.ui.frame(0),i.chunks.flush(),i.render();const s=i.canvas.width,r=i.canvas.height;t.width=s,t.height=r;const o=t.getContext("2d",{willReadFrequently:!0});o.drawImage(i.canvas,0,0);const a=o.getImageData(0,0,s,r).data,l=new Set;let c=0,h=0,d=0,u=2166136261;for(let g=0;g<a.length;g+=28){const v=a[g],m=a[g+1],f=a[g+2];l.add(v>>3<<10|m>>3<<5|f>>3);const M=.299*v+.587*m+.114*f;c+=M,h+=M*M,d++,u=Math.imul(u^v^m<<8^f<<16,16777619)>>>0}const p=c/d;return{width:s,height:r,distinctColors:l.size,meanLuma:p,stdLuma:Math.sqrt(Math.max(0,h/d-p*p)),hash:u.toString(16)}},chunkStats:()=>i.chunks.stats(),streamIdle:()=>i.chunks.idle,crackStage:()=>i.crackStage(),chips:()=>i.effects.activeChips(),setTime:s=>{i.phase=s},start:()=>i.start(),setState:s=>i.setState(s),state:()=>i.state,inventory:()=>i.inventory.summary(),selectSlot:s=>i.inventory.select(s),save:()=>i.persist(),config:()=>i.config,setConfig:s=>{const r=Vl(s);return r.ok&&i.applyConfig(r.config),r},log:s=>i.log.all(s),exportData:(s,r="student")=>s==="csv"?zu(i.log.all(r)):Hu(r,i.log.all(r),i.config),survival:{state:()=>{const s=i.survival;return{strength:s.strength,mode:s.mode,resting:s.resting,unconscious:s.unconscious,collapseLeft:s.collapse?.left??0,chips:s.chips.map(r=>r.id),rates:{...s.rates},shelter:{...s.shelter},night:s.night,inLantern:s.inLantern,hearths:[...s.hearths.values()].map(r=>({...r})),lanterns:s.lanterns.size,totals:{...s.totals},phase:i.phase,activeS:s.activeS,bundle:s.bundle()?{x:s.bundle().x,y:s.bundle().y,z:s.bundle().z,items:s.bundle().items}:null}},setStrength:s=>{i.survival.strength=s},setPhase:s=>{i.phase=s},setWorld:s=>{i.tide.clock.activeS=s,i.phase=(.08+s/560)%1},rest:()=>i.toggleRest(),preview:()=>({preview:i.preview,text:i.previewText}),scenarios:()=>({loop:py(),lantern:my(),rest:gy(),trap:vy(),conservation:_y(),sand:yy(),night:xy(),douse:My(),idleDay:Sy()}),spawn:()=>i.spawnSpot(),dismissPremise:()=>i.ui.survHud.dismissPremise("test"),setMode:s=>i.setSurvivalMode(s)},tide:{state:()=>{const s=i.tide;return{activeS:s.clock.activeS,level:i.world.tideLevel,census:s.census(),reachedPileAt:s.reachedPileAt,firstPileTouchAt:s.firstPileTouchAt,leftBeachAt:s.leftBeachAt,settledAt:s.settledAt,protectiveCandidates:s.protectiveCandidates,pileGround:s.pileGround,boards:s.loose.boards.length,wet:s.wet.list().length,runId:s.meta?.runId??null}},boards:()=>i.tide.loose.boards.map(s=>({...s})),wet:()=>i.tide.wet.list().map(s=>({...s})),waterAt:(s,r,o)=>i.world.isWaterAt(s,r,o),fastForward:s=>i.advance(s,In),bots:()=>sy(),features:()=>i.world.terrain.features.tide,level:s=>fi(s),exportMeta:(s="student")=>i.exportMeta(s),pickUpNearest:()=>{const s=i.tide.loose.boards[0];return s?i.pickUpBoard(s):!1}},tour:{start:(s=1)=>{i.state!=="title"&&i.state!=="menu"&&i.setState("menu"),i.startTour(s)},active:()=>!!i.tour?.active,aimedBoard:()=>{const s=i.tour?.director.stage;return!!s&&!!s.loose.raycast(s.player.eye(),s.player.forwardVec(),6)},manual:s=>{i.tour&&(i.tour.manual=s)},time:()=>i.tour?.director.chapterTime??0,phase:()=>i.tour?.director.phase??"none",chapter:()=>i.tour?.director.chapter??0,step:()=>{const s=i.tour?.director.current;return s?{id:s.id,text:s.text,card:s.card?.title??null,summary:!!s.summary}:null},seen:()=>[...i.tour?.director.seen??[]],lengths:()=>({...i.tour?.director.lengths??{}}),advance:s=>i.tour?.advance(s),advanceToStep:(s,r=200)=>{const o=i.tour;if(!o)return!1;let a=0;for(;o.director.current?.id!==s&&a<r&&o.director.active&&o.director.phase==="playing";)o.advance(.1),a+=.1;return o.director.current?.id===s},render:()=>i.render(),settle:()=>i.tour?.settle(),togglePause:()=>i.tour?.director.togglePause(),next:()=>i.tour?.director.nextChapter(),replay:()=>i.tour?.director.replay(),skip:()=>i.tour?.director.skip(),used:()=>{const s=i.tour?.director.stage;return s?{pressedStops:[...s.pressedStops],...s.used}:null}},bot:{begin:()=>i.setStream("bot"),end:()=>i.setStream("student")},features:()=>i.world.terrain.features,zero:()=>({planeY:kt,unitVoxels:Ce}),reader:i.reader,host:i.host,give:(s,r)=>i.inventory.add(s,r),hoist:()=>{const s=i.hoist;return{state:s.state,plane:s.plane,stop:s.stop,runStop:s.runStop,staged:s.staged,bay:s.bay,carrying:s.carrying,actions:s.actions,docks:[...s.docks.values()].map(r=>({...r})),active:s.active}},hoistSetStop:s=>i.hoist.setStop(s),hoistDispatch:()=>i.hoist.dispatch(),hoistReturn:()=>i.hoist.returnTray(),hoistMount:()=>{const s=i.hoist.activeDock();return s?i.hoist.mountDock(s.key):!1},hoistNewOrder:()=>{const s=i.hoist;s.state="home",s.plane=s.homePlane,s.staged=4,s.carrying=!1;for(const r of s.docks.values())r.stock=0},buildProject:(s,r=!0)=>{const o=i.world.terrain.features.hoist,a=o.tray.x+1,l=kt+4*s-1;for(let c=o.homePlane;c<l;c++)i.world.setBlock(a,c,o.tray.z,E.CUTSTONE);if(i.world.setBlock(a,l,o.tray.z,E.DOCK),r)for(let c=o.homePlane;c<=l;c++)i.world.setBlock(a+1,c,o.tray.z,E.LADDER);return i.hoist.syncDocks(),{dock:[a,l,o.tray.z]}},removeProject:()=>{const s=i.world.terrain.features.hoist;for(let r=s.homePlane;r<100;r++)for(const o of[s.tray.x+1,s.tray.x+2])i.world.setBlock(o,r,s.tray.z,E.AIR);i.hoist.syncDocks()},heightAt:(s,r)=>i.world.terrain.heightAt(s,r),project:(s,r,o)=>{i.syncCamera();const a=new N(s,r,o).project(i.camera);return{x:(a.x+1)/2*i.canvas.clientWidth,y:(1-a.y)/2*i.canvas.clientHeight,behind:a.z>1}},lumaAt:s=>{i.chunks.flush(),i.render();const r=i.canvas.width,o=i.canvas.height;t.width=r,t.height=o;const a=t.getContext("2d",{willReadFrequently:!0});return a.drawImage(i.canvas,0,0),s.map(([l,c])=>{const h=a.getImageData(Math.max(0,Math.min(r-1,Math.round(l))),Math.max(0,Math.min(o-1,Math.round(c))),1,1).data;return .299*h[0]+.587*h[1]+.114*h[2]})},planCells:()=>i.plan.list(),demand:()=>{const s=i.hoist.activeDock();return s?i.plan.demandFor(s,i.hoist.docks.values(),(r,o,a)=>i.world.getBlock(r,o,a),i.hoist.staged,i.hoist.carrying):null},hud:s=>{const r=document.getElementById("hud");r&&(r.style.visibility=s?"":"hidden")},fov:s=>{i.camera.fov=s,i.camera.updateProjectionMatrix()},hoistFeatures:()=>i.world.terrain.features.hoist,gate2:s=>N_(s),startFrameCapture:()=>i.startFrameCapture(),stopFrameCapture:()=>i.stopFrameCapture(),glRenderer:()=>{const s=i.renderer.getContext(),r=s.getExtension("WEBGL_debug_renderer_info");return String(r?s.getParameter(r.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER))}};window.__game=n}function by(i){const t=Object.freeze({planeY:kt,unitVoxels:Ce,description:"The zero mark on the harbor gauge post (the plane at plane 48). The tide moves past it; heights are (plane - zero) / unitVoxels."}),e=(n,s)=>{const r=Math.floor(n),o=Math.floor(s);if(!i.isLoaded(r,o))return null;for(let a=Hi-1;a>=0;a--){const l=i.getBlock(r,a,o);if(l!==E.AIR&&l!==E.WATER&&xo(l))return Object.freeze({x:r,z:o,surfacePlaneY:a+1,units:ho(a+1)})}return null};return{zero:t,player(){const n=i.playerState();return Object.freeze({x:n.x,y:n.y,z:n.z,feetUnits:ho(n.y),onGround:n.onGround})},blockAt:(n,s,r)=>i.getBlock(Math.floor(n),Math.floor(s),Math.floor(r)),siteAt:e,playerSite(){const n=i.playerState();return e(n.x,n.z)},planeToUnits:ho,unitsToPlane:h_,inventoryCount:n=>i.countItem(n)}}class Ey{constructor(t){this.ctxFor=t}plugins=[];register(t){if(this.plugins.some(e=>e.id===t.id))throw new Error(`activity ${t.id} already registered`);this.plugins.push(t)}list(){return this.plugins}tick(t){for(const e of this.plugins){const n=this.ctxFor(e.skillId);n&&e.onTick?.(n,t)}}withContext(t,e){const n=this.ctxFor(t);n&&e(n)}configChanged(){for(const t of this.plugins){const e=this.ctxFor(t.skillId);e&&t.onConfigChange?.(e)}}}const dd="plumbline.save.v3",Vn=i=>typeof i=="number"&&Number.isFinite(i),Ty=256*Hi;function Ay(i){const t={};if(typeof i!="object"||i===null||Array.isArray(i))return t;for(const[e,n]of Object.entries(i)){if(!/^-?\d{1,5},-?\d{1,5}$/.test(e)||!Array.isArray(n))continue;const s=[];for(let r=0;r+1<n.length;r+=2){const o=n[r],a=n[r+1];Number.isInteger(o)&&o>=0&&o<Ty&&Number.isInteger(a)&&Jt[a]&&s.push(o,a)}s.length&&(t[e]=s)}return t}function Ry(i){try{const t=i?.getItem(dd);if(!t)return null;const e=JSON.parse(t);if(!e||e.version!==3||!Number.isSafeInteger(e.seed))return null;const n=e.player;return!n||!Vn(n.x)||!Vn(n.y)||!Vn(n.z)||!Vn(n.yaw)||!Vn(n.pitch)||!e.inventory||!Array.isArray(e.inventory.slots)?null:{version:3,seed:e.seed,edits:Ay(e.edits),player:{x:n.x,y:n.y,z:n.z,yaw:n.yaw,pitch:n.pitch},inventory:e.inventory,phase:Vn(e.phase)?(e.phase%1+1)%1:.12,tide:e.tide&&typeof e.tide=="object"?e.tide:void 0,survival:e.survival&&typeof e.survival=="object"?e.survival:void 0,playMs:Vn(e.playMs)&&e.playMs>=0?e.playMs:0,hoist:e.hoist&&typeof e.hoist=="object"&&Array.isArray(e.hoist.docks)&&Vn(e.hoist.plane)?e.hoist:void 0,pressRemaining:Vn(e.pressRemaining)?e.pressRemaining:0,activity:e.activity&&typeof e.activity=="object"?e.activity:void 0,plan:Array.isArray(e.plan)?e.plan.filter(s=>typeof s=="string"):void 0}}catch{return null}}function Cy(i,t){if(!i)return!1;try{return i.setItem(dd,JSON.stringify(t)),!0}catch{return!1}}class Py{constructor(t,e,n){this.canvas=t,this.onUnlock=e,this.onLockClick=n,window.addEventListener("keydown",s=>this.keyDown(s)),window.addEventListener("keyup",s=>this.keys.delete(s.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.clear()}),window.addEventListener("mousedown",s=>{this.enabled&&(!this.locked&&s.target===this.canvas&&this.onLockClick(),this.mouse.add(s.button),s.button===2&&this.actions.push("place"))}),window.addEventListener("mouseup",s=>this.mouse.delete(s.button)),window.addEventListener("contextmenu",s=>{this.enabled&&s.preventDefault()}),window.addEventListener("mousemove",s=>{this.enabled&&this.locked&&(this.lookX+=s.movementX,this.lookY+=s.movementY)}),window.addEventListener("wheel",s=>{this.enabled&&this.actions.push(s.deltaY>0?"next":"prev")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{const s=this.locked;this.locked=document.pointerLockElement===this.canvas,s&&!this.locked&&this.onUnlock()})}keys=new Set;mouse=new Set;actions=[];lookX=0;lookY=0;enabled=!1;locked=!1;keyDown(t){if(!this.enabled)return;const e=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(e)&&t.preventDefault(),!t.repeat&&(this.keys.add(e),e==="KeyG"?this.actions.push("place"):e==="Escape"||e==="KeyP"?this.actions.push("menu"):e==="KeyR"?this.actions.push("use"):e==="KeyV"?this.actions.push("drop"):e==="KeyT"?this.actions.push("rest"):e==="KeyC"?this.actions.push("craft"):e==="KeyE"?this.actions.push("next"):e==="KeyQ"?this.actions.push("prev"):/^Digit[1-8]$/.test(e)&&this.actions.push(`slot${Number(e.slice(5))-1}`))}requestLock(){try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}clear(){this.keys.clear(),this.mouse.clear(),this.actions=[],this.lookX=this.lookY=0}move(){const t=this.keys;return{forward:(t.has("KeyW")?1:0)-(t.has("KeyS")?1:0),right:(t.has("KeyD")?1:0)-(t.has("KeyA")?1:0),jump:t.has("Space"),sprint:t.has("ShiftLeft")||t.has("ShiftRight"),descend:t.has("KeyX")}}breakHeld(){return this.keys.has("KeyF")||this.mouse.has(0)}look(t){const e=this.keys,n=.0022,s=1.9*t,r=-this.lookX*n+((e.has("ArrowLeft")?1:0)-(e.has("ArrowRight")?1:0))*s,o=-this.lookY*n+((e.has("ArrowUp")?1:0)-(e.has("ArrowDown")?1:0))*s;return this.lookX=this.lookY=0,{yaw:r,pitch:o}}takeActions(){const t=this.actions;return this.actions=[],t}}const he=16,bn=10,pi=he*bn,V=(i,t,e,n=255)=>[i,t,e,n];class fd{constructor(t,e,n=new Uint8ClampedArray(t*e*4)){this.w=t,this.h=e,this.px=n}put(t,e,n){if(t<0||e<0||t>=this.w||e>=this.h)return;const s=(e*this.w+t)*4;this.px[s]=n[0],this.px[s+1]=n[1],this.px[s+2]=n[2],this.px[s+3]=n[3]}}class ky{constructor(t,e,n){this.cv=t,this.ox=e,this.oy=n}p(t,e,n){this.cv.put(this.ox+t,this.oy+e,n)}fill(t){for(let e=0;e<he;e++)for(let n=0;n<he;n++)this.p(n,e,t(n,e))}rect(t,e,n,s,r){for(let o=0;o<s;o++)for(let a=0;a<n;a++)this.p(t+a,e+o,r)}}const Ly={0:["111","101","101","101","111"],5:["111","100","111","001","111"],1:["010","110","010","010","111"],2:["111","001","111","100","111"],3:["111","001","111","001","111"],4:["101","101","111","001","001"],6:["111","100","111","101","111"],7:["111","001","001","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","111"],"+":["000","010","111","010","000"],"-":["000","000","111","000","000"]};function Ra(i,t,e,n,s,r=2){let o=e;for(const a of t){const l=Ly[a];for(let c=0;c<5;c++)for(let h=0;h<3;h++)l[c][h]==="1"&&i.rect(o+h*r,n+c*r,r,r,s);o+=4*r}}function Gh(i,t){i.fill(e=>{let n=152;return e===0||e===15?n=118:e===1||e===14?n=134:(e===5||e===6)&&(n=168),n+=Math.floor(t()*6)-3,V(n,n+6,n+20)})}function Dy(i){const t=(o,a,l)=>{l(new ky(i,o%bn*he,Math.floor(o/bn)*he),dr(a))};t(W.BLUEROCK,11,(o,a)=>{o.fill((l,c)=>{const d=l+c*2>>2&1?[72,86,118]:[58,68,96],u=Math.floor(a()*8)-4;return V(d[0]+u,d[1]+u,d[2]+u)});for(let l=0;l<5;l++){let c=Math.floor(a()*16),h=Math.floor(a()*16);for(let d=0;d<4;d++)o.p(c,h,V(34,40,62)),c+=a()<.5?1:0,h+=1}}),t(W.TURF_TOP,12,(o,a)=>{o.fill((l,c)=>{const d=(l+c&3)<2?[66,168,124]:[48,146,110],u=Math.floor(a()*8)-4;return V(d[0]+u,d[1]+u,d[2]+u)});for(let l=0;l<10;l++)o.p(Math.floor(a()*16),Math.floor(a()*16),V(30,100,80))}),t(W.LOAM,13,(o,a)=>{o.fill(()=>{const l=Math.floor(a()*10)-5;return V(150+l,90+l,58+l)});for(let l=0;l<7;l++){const c=Math.floor(a()*14),h=Math.floor(a()*14),d=a()<.5;o.rect(c,h,2,2,d?V(112,62,42):V(196,128,84))}}),t(W.TURF_SIDE,14,(o,a)=>{o.fill(()=>{const l=Math.floor(a()*10)-5;return V(150+l,90+l,58+l)});for(let l=0;l<16;l++){for(let c=0;c<4;c++)o.p(l,c,((l>>1)+c)%2===0?V(66,168,124):V(52,150,112));o.p(l,4,V(34,92,76))}}),t(W.DUNE,15,(o,a)=>{o.fill((l,c)=>{const h=Math.round(Math.sin(l*.55)*1.4),d=(c+h&3)===0,u=Math.floor(a()*6)-3;return d?V(212+u,184+u,114+u):V(236+u,212+u,148+u)})}),t(W.WATER,16,(o,a)=>{o.fill((l,c)=>(l+c*2)%9===0&&a()<.8?V(130,190,245,190):V(40,112,205,175))}),t(W.STALK_SIDE,17,(o,a)=>{o.fill(l=>{const c=l%4===0,h=Math.floor(a()*6)-3;return c?V(78+h,40+h,64+h):V(118+h,66+h,92+h)}),o.rect(6,5,2,3,V(60,30,50)),o.rect(11,11,2,2,V(60,30,50))}),t(W.STALK_TOP,18,o=>{o.fill((a,l)=>{const c=Math.max(Math.abs(a-7.5),Math.abs(l-7.5));return Math.floor(c)%2===0?V(176,118,128):V(132,74,96)})}),t(W.FERN,19,(o,a)=>{o.fill((l,c)=>a()<.22?V(0,0,0,0):(l*3+c*5)%7===0?V(92,178,84):V(42,122,62))}),t(W.BOARD,20,(o,a)=>{o.fill((l,c)=>{const h=Math.floor(l/4),d=Math.floor(c/4),p=(h+d)%2===0?c%4===3:l%4===3,g=Math.floor(a()*6)-3;return p?V(168+g,118+g,54+g):V(218+g,168+g,82+g)})}),t(W.CUTSTONE,21,(o,a)=>{o.fill((l,c)=>{const h=l%8,d=c%8,u=Math.floor(a()*6)-3;return h===7||d===7?V(104+u,100+u,132+u):h===0||d===0?V(188+u,184+u,212+u):V(150+u,146+u,178+u)})}),t(W.GLASS,22,o=>{o.fill((a,l)=>a===0||l===0||a===15||l===15?V(176,232,244,230):(a===l-3||a===l-4)&&a>2&&a<10?V(255,255,255,200):V(190,236,246,70))}),t(W.LANTERN,23,o=>{o.fill((a,l)=>a<2||l<2||a>13||l>13||a===7||a===8?V(74,52,44):Math.hypot(a-7.5,l-7.5)<3?V(255,244,176):V(255,196,76))}),t(W.POST,24,(o,a)=>Gh(o,a));const e=(o,a,l,c,h,d,u)=>t(o,a,(p,g)=>{Gh(p,g),p.rect(0,he-l,he,l,c),h&&Ra(p,h,d,1,u)});e(W.TICK,25,2,V(28,32,60),null,0,V(0,0,0)),e(W.ZERO,26,3,V(214,218,228),"0",5,V(40,44,64)),e(W.PLUS5,27,3,V(50,112,226),"+5",1,V(24,64,160)),e(W.MINUS5,28,3,V(242,172,28),"-5",1,V(160,100,8)),t(W.PRESS_TOP,30,(o,a)=>{o.fill((l,c)=>{const h=Math.floor(a()*6)-3;return l<2||c<2||l>13||c>13?V(52+h,56+h,72+h):(l+c)%5===0?V(96+h,102+h,124+h):V(76+h,82+h,104+h)}),o.rect(4,7,8,2,V(238,160,40))}),t(W.PRESS_SIDE,31,(o,a)=>{o.fill(()=>{const l=Math.floor(a()*6)-3;return V(70+l,76+l,98+l)}),o.rect(0,0,16,2,V(48,52,68)),o.rect(0,14,16,2,V(48,52,68));for(let l=3;l<13;l++)for(let c=3;c<13;c++)Math.hypot(c-7.5,l-7.5)<4.5&&Math.hypot(c-7.5,l-7.5)>2.5&&o.p(c,l,V(60,170,190));o.rect(7,7,2,2,V(238,160,40))}),t(W.PANEL,32,o=>{o.fill((l,c)=>l<1||c<1||l>14||c>14?V(40,44,58):V(30,34,48)),[V(240,90,70),V(240,200,60),V(90,220,120),V(80,160,240)].forEach((l,c)=>o.rect(2+c*3,3,2,2,l)),o.rect(2,8,12,5,V(18,22,32)),o.rect(3,9,4,3,V(200,210,230)),o.rect(9,9,4,3,V(120,130,160))}),t(W.RAIL,33,(o,a)=>{o.fill(l=>{const c=Math.floor(a()*5)-2;return l<3||l>12?V(50+c,54+c,70+c):l===7||l===8?V(150+c,156+c,176+c):V(88+c,94+c,116+c)});for(let l=1;l<16;l+=5)o.rect(0,l,16,1,V(36,40,54))}),t(W.DOCK_TOP,34,o=>{o.fill((a,l)=>a<2||l<2||a>13||l>13?(a+l>>2)%2===0?V(70,200,110):V(26,36,30):((a>>2)+(l>>2))%2===0?V(60,150,100):V(48,124,84))}),t(W.DOCK_SIDE,35,o=>{o.fill((a,l)=>l<3||l>12?(a+l>>2)%2===0?V(70,200,110):V(26,36,30):V(40,110,76)),o.p(2,7,V(20,40,30)),o.p(13,7,V(20,40,30))}),t(W.LADDER,36,o=>{o.fill((a,l)=>a===2||a===3||a===12||a===13?V(150,100,52):a>3&&a<12&&l%4===1?V(190,136,70):V(0,0,0,0))}),t(W.STONE_PANEL,40,(o,a)=>{o.fill((l,c)=>{const h=Math.floor(a()*3)-1,d=Math.min(l,c,15-l,15-c);return d===0?V(138+h,134+h,166+h):d===1?V(236+h,232+h,246+h):d===2?V(176+h,172+h,202+h):d===3?V(222+h,218+h,236+h):(l+c)%6===0||(l-c+18)%6===0?V(188+h,184+h,212+h):V(228+h,224+h,240+h)}),o.rect(7,7,2,2,V(120,116,150))}),t(W.GHOST,99,o=>{o.fill((a,l)=>a<2||a>13||l%5===0?V(96,104,130,70):V(120,128,152,34))}),t(W.SHINGLE,70,(o,a)=>{o.fill(()=>{const l=Math.floor(a()*8)-4;return V(188+l,164+l,118+l)});for(let l=0;l<14;l++){const c=Math.floor(a()*13),h=Math.floor(a()*13),d=a()<.5;o.rect(c,h,3,2,d?V(104,98,90):V(186,176,156)),o.rect(c,h+2,3,1,V(84,78,72))}});const n=(o,a,l)=>t(o,a,(c,h)=>{c.fill((u,p)=>{const g=Math.floor(h()*6)-3,v=Math.floor(u/4),m=[86,100,78,94][v%4],f=u%4===3;return p<2?V(52+g,48+g,70+g):f?V(40+g,38+g,56+g):V(m+g,m-4+g,m+26+g)});const d=(u,p)=>p>=3&&p<=14&&(p===3?u>=7&&u<=8:u>=6&&u<=9);for(let u=2;u<=15;u++)for(let p=5;p<=10;p++)!d(p,u)&&u>=3&&u<=14&&p>=5&&p<=10&&c.p(p,u,V(34,30,44));for(let u=3;u<=14;u++)for(let p=6;p<=9;p++){if(!d(p,u))continue;const g=(u-3)/11;if(l){const v=p===7||p===8;c.p(p,u,g>.7?v?V(255,236,150):V(255,176,56):g>.35?v?V(255,170,52):V(224,96,28):V(190,66,22))}else c.p(p,u,g>.75?V(96,94,104):V(46,44,54))}});n(W.HEARTH_SIDE,71,!0),n(W.HEARTH_OUT_SIDE,72,!1);const s=(o,a,l)=>t(o,a,(c,h)=>{c.fill(()=>{const d=Math.floor(h()*6)-3;return V(70+d,66+d,90+d)});for(let d=0;d<he;d++)for(let u=0;u<he;u++){const p=Math.hypot(u-7.5,d-7.5);p<=4.6&&c.p(u,d,p<=3.2?l?p<=1.8?V(255,226,120):V(255,150,40):V(40,38,46):V(36,32,44))}});s(W.HEARTH_TOP,73,!0),s(W.HEARTH_OUT_TOP,74,!1),t(W.PLAN,43,o=>{o.fill((a,l)=>{const c=Math.min(a,l,15-a,15-l);return c===0?V(60,220,240,230):(a<4||a>11)&&(l<4||l>11)&&c<=1?V(255,255,255,230):V(150,240,250,38)})});for(let o=-11;o<=10;o++)t(W.NOTCH0+(o+11),100+o,a=>{const l=o<0?V(236,168,30):o===0?V(206,210,222):V(50,112,226),c=o<0?V(52,32,4):o===0?V(30,34,52):V(250,250,255);a.fill((d,u)=>d<1||u<1||d>14||u>14?V(28,30,44):d<2||u<2?V(255,255,255,90):l);const h=o>0?`+${o}`:o<0?`-${-o}`:"0";if(h.length<=2){const d=h.length*8-2;Ra(a,h,Math.floor((16-d)/2),3,c,2)}else{const d=h.length*4-1;Ra(a,h,Math.floor((16-d)/2),5,c,1)}});const r=(o,a,l,c)=>t(o,a,h=>{h.fill((u,p)=>u<1||p<1||u>14||p>14?V(28,30,44):l);const d=V(250,250,250);for(let u=0;u<6;u++)h.rect(7-u,c?3+u:12-u,2+2*u,1,d);h.rect(6,c?9:4,4,4,d)});r(W.DISPATCH,41,V(40,160,80),!0),r(W.RETURN,42,V(96,84,196),!1),t(W.MOUNT,44,o=>{o.fill((a,l)=>a<1||l<1||a>14||l>14?V(28,30,44):V(44,150,96)),o.rect(2,9,12,3,V(250,250,250)),o.rect(10,3,3,9,V(250,250,250)),o.rect(4,4,2,5,V(250,250,250)),o.rect(3,6,4,2,V(250,250,250))}),t(W.PRESS_BUTTON,45,o=>{o.fill((a,l)=>a<1||l<1||a>14||l>14?V(28,30,44):V(110,116,140)),o.rect(2,2,12,3,V(250,250,250)),o.rect(7,5,2,4,V(250,250,250)),o.rect(3,10,10,3,V(210,214,232))}),t(W.POST_CAP,29,(o,a)=>{o.fill((l,c)=>{const h=l===0||c===0||l===15||c===15,d=Math.floor(a()*6)-3;return h?V(100+d,106+d,124+d):V(134+d,140+d,158+d)})})}function pd(i){const t=new Uint8Array(i.length);return t.set(i),t}function sc(){const i=new fd(pi,pi);return Dy(i),i.px}const Bi=10;function Uy(){const i=new fd(he*Bi,he),t=dr(777),e=[];for(let n=0;n<6;n++){let s=4+Math.floor(t()*8),r=4+Math.floor(t()*8);const o=t()<.5?-1:1,a=t()<.5?-1:1;for(let l=0;l<9;l++)e.push([s,r]),t()<.55?s+=o:r+=a,s=Math.max(0,Math.min(15,s)),r=Math.max(0,Math.min(15,r))}for(let n=0;n<Bi;n++){const s=Math.floor((n+1)/Bi*e.length);for(let r=0;r<s;r++)i.put(n*he+e[r][0],e[r][1],V(18,16,28,215))}return i.px}const Iy=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.82,which:"side"},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.82,which:"side"},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1,which:"top"},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.55,which:"bottom"},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.68,which:"side"},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.68,which:"side"}],Vh=[[0,0],[1,0],[1,1],[0,1]],Ny=[.5,.68,.84,1],Ci=Ft+2,Jr=.002;class Wh{pos=[];uv=[];light=[];index=[];vcount=0;finish(){return this.vcount===0?null:{pos:new Float32Array(this.pos),uv:new Float32Array(this.uv),light:new Float32Array(this.light),index:new Uint32Array(this.index)}}}function Oy(i,t,e,n){const s=i.getSection(t,e,n);if(!s||s.isUniform(0))return{opaque:null,translucent:null};const r=t*Ft,o=e*Ft,a=n*Ft,l=new Uint8Array(Ci*Ci*Ci);for(let p=-1;p<=Ft;p++)for(let g=-1;g<=Ft;g++)for(let v=-1;v<=Ft;v++)l[((p+1)*Ci+(g+1))*Ci+(v+1)]=i.getBlock(r+v,o+p,a+g);const c=(p,g,v)=>l[((g+1)*Ci+(v+1))*Ci+(p+1)],h=(p,g,v)=>Jt[c(p,g,v)].kind==="opaque"?1:0,d=new Wh,u=new Wh;for(let p=0;p<Ft;p++)for(let g=0;g<Ft;g++)for(let v=0;v<Ft;v++){const m=c(v,p,g);if(m===0)continue;const f=Jt[m],M=f.kind==="translucent"?u:d;for(const b of Iy){const x=v+b.n[0],L=p+b.n[1],A=g+b.n[2],R=c(x,L,A);if(R!==0&&(Jt[R].kind==="opaque"||R===m))continue;const k=f.tiles[b.which],S=k%bn,y=Math.floor(k/bn),C=[1,1,1,1];if(f.kind==="opaque"||f.kind==="cutout"){const X=b.n[0]!==0?0:b.n[1]!==0?1:2,j=(X+1)%3,$=(X+2)%3;for(let J=0;J<4;J++){const q=b.c[J],rt=q[j]*2-1,ht=q[$]*2-1,mt=[x,L,A],Dt=[mt[0],mt[1],mt[2]];Dt[j]+=rt;const ee=[mt[0],mt[1],mt[2]];ee[$]+=ht;const Y=[mt[0],mt[1],mt[2]];Y[j]+=rt,Y[$]+=ht;const nt=h(Dt[0],Dt[1],Dt[2]),_t=h(ee[0],ee[1],ee[2]),at=h(Y[0],Y[1],Y[2]);C[J]=Ny[nt&&_t?0:3-(nt+_t+at)]}}const z=M.vcount,F=f.glow??(f.emissive?1:0);for(let X=0;X<4;X++){const j=b.c[X];M.pos.push(v+j[0],p+j[1],g+j[2]);const $=Vh[X][0],J=Vh[X][1];M.uv.push((S+Jr+$*(1-2*Jr))/bn,(y+Jr+(1-J)*(1-2*Jr))/bn),M.light.push(b.shade*C[X],F)}C[0]+C[2]<C[1]+C[3]?M.index.push(z+1,z+2,z+3,z+1,z+3,z):M.index.push(z,z+1,z+2,z,z+2,z+3),M.vcount+=4}}return{opaque:d.finish(),translucent:u.finish()}}const fo=6,Fy=`
attribute vec2 aLight;
varying vec2 vUv;
varying vec2 vLight;
varying float vDist;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vLight = aLight;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDist = length(mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,By=`
precision highp float;
uniform sampler2D uMap;
uniform vec3 uTint;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uCutout;
uniform float uNight;
uniform vec4 uLights[8];
varying vec2 vUv;
varying vec2 vLight;
varying float vDist;
varying vec3 vWorld;
void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (uCutout > 0.5 && tex.a < 0.5) discard;
  vec3 lit = mix(vec3(vLight.x) * uTint, vec3(1.0), vLight.y);
  vec3 col = tex.rgb * lit;
  // lit ground: lanterns and hearths pool warm light around themselves
  float pool = 0.0;
  for (int i = 0; i < 8; i++) {
    vec4 L = uLights[i];
    if (L.w > 0.0) {
      float k = clamp(1.0 - distance(vWorld, L.xyz) / L.w, 0.0, 1.0);
      pool += k * k;
    }
  }
  pool = clamp(pool, 0.0, 1.0);
  // night: ground near the player stays readable (lifted a little), distant unlit ground fades away
  float near = 1.0 - smoothstep(4.0, 9.0, vDist);
  col += tex.rgb * vec3(0.09, 0.11, 0.20) * near * uNight * (1.0 - vLight.y);
  // things that glow by themselves (lanterns, panels, buttons, the hearth) never fade into the dark
  float fade = uNight * smoothstep(7.0, 34.0, vDist) * (1.0 - pool) * (1.0 - vLight.y);
  col *= mix(1.0, 0.2, fade);
  float warm = pool * (0.35 + 0.65 * uNight);
  col = mix(col, col * vec3(1.45, 1.08, 0.66) + tex.rgb * vec3(0.30, 0.13, 0.03) * uNight, warm);
  float f = smoothstep(uFogNear, uFogFar, vDist);
  f = mix(f, f * (1.0 - 0.6 * pool), uNight);
  col = mix(col, uFogColor, f);
  gl_FragColor = vec4(col, uCutout > 0.5 ? 1.0 : tex.a);
}`;function md(){const i=new zl(pd(sc()),pi,pi,on);return i.magFilter=Ae,i.minFilter=Ae,i.generateMipmaps=!1,i.flipY=!1,i.colorSpace=Cn,i.needsUpdate=!0,i}class gd{constructor(t,e){this.world=t,this.uniforms.uMap.value=e;const n={vertexShader:Fy,fragmentShader:By};this.opaqueMat=new En({...n,uniforms:{...this.uniforms,uCutout:{value:1}}}),this.transMat=new En({...n,uniforms:{...this.uniforms,uCutout:{value:0}},transparent:!0,depthWrite:!1}),t.onDirty=(s,r,o)=>{this.meshedColumns.has(mn(s,o))&&this.dirty.add(`${s},${r},${o}`)}}group=new an;uniforms={uMap:{value:null},uTint:{value:new N(1,1,1)},uFogColor:{value:new N(.7,.8,.95)},uFogNear:{value:fo*Ft*.5},uFogFar:{value:fo*Ft*.95},uCutout:{value:1},uNight:{value:0},uLights:{value:Array.from({length:8},()=>new we(0,0,0,0))}};opaqueMat;transMat;entries=new Map;dirty=new Set;meshedColumns=new Set;lastCx=1e9;lastCz=1e9;wanted=[];viewChunks=fo;triangles=0;idle=!1;setNight(t,e){this.uniforms.uNight.value=t;const n=this.uniforms.uLights.value;for(let s=0;s<8;s++){const r=e[s];r?n[s].set(r[0],r[1],r[2],r[3]):n[s].set(0,0,0,0)}}setSky(t,e){this.uniforms.uFogColor.value.set(...t),this.uniforms.uTint.value.set(...e)}columnReady(t,e){for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++)if(!this.world.hasColumn(t+s,e+n))return!1;return!0}computeWanted(t,e){const n=this.viewChunks+1,s=[];for(let r=-n;r<=n;r++)for(let o=-n;o<=n;o++){const a=o*o+r*r;a<=n*n&&s.push([a,mn(t+o,e+r)])}s.sort((r,o)=>r[0]-o[0]),this.wanted=s.map(r=>r[1])}meshColumn(t,e){for(let n=0;n<Mo;n++)this.remeshSection(t,n,e);this.meshedColumns.add(mn(t,e))}makeMesh(t,e,n,s,r){if(!t)return null;const o=new Ye;o.setAttribute("position",new ze(t.pos,3)),o.setAttribute("uv",new ze(t.uv,2)),o.setAttribute("aLight",new ze(t.light,2)),o.setIndex(new ze(t.index,1)),o.boundingSphere=new Ki(new N(8,8,8),14);const a=new Ht(o,e);return a.position.set(n,s,r),a.matrixAutoUpdate=!1,a.updateMatrix(),e===this.transMat&&(a.renderOrder=1),this.group.add(a),this.triangles+=t.index.length/3,a}dispose(t){t&&(this.group.remove(t),this.triangles-=(t.geometry.index?.count??0)/3,t.geometry.dispose())}remeshSection(t,e,n){const s=`${t},${e},${n}`,r=this.entries.get(s);r&&(this.dispose(r.opaque),this.dispose(r.trans));const o=Oy(this.world,t,e,n),a=t*Ft,l=e*Ft,c=n*Ft,h=this.makeMesh(o.opaque,this.opaqueMat,a,l,c),d=this.makeMesh(o.translucent,this.transMat,a,l,c);h||d?this.entries.set(s,{opaque:h,trans:d}):this.entries.delete(s)}update(t,e,n){const s=Math.floor(t/Ft),r=Math.floor(e/Ft);(s!==this.lastCx||r!==this.lastCz)&&(this.lastCx=s,this.lastCz=r,this.computeWanted(s,r),this.unloadFar(s,r));const o=performance.now();this.idle=!1;for(const c of this.dirty){const[h,d,u]=c.split(",").map(Number);if(this.dirty.delete(c),this.remeshSection(h,d,u),performance.now()-o>n)return!1}let a=!0;const l=this.viewChunks;for(const c of this.wanted){const[h,d]=wo(c);if(!this.world.hasColumn(h,d)){if(this.world.ensureColumn(h,d),a=!1,performance.now()-o>n)return!1;continue}if((h-s)**2+(d-r)**2<=l*l&&!this.meshedColumns.has(c)&&this.columnReady(h,d)&&(this.meshColumn(h,d),a=!1,performance.now()-o>n))return!1}return this.idle=a,a}preload(t,e,n){const s=Math.floor(t/Ft),r=Math.floor(e/Ft);for(let o=-n-1;o<=n+1;o++)for(let a=-n-1;a<=n+1;a++)this.world.ensureColumn(s+a,r+o);for(let o=-n;o<=n;o++)for(let a=-n;a<=n;a++){const l=mn(s+a,r+o);this.meshedColumns.has(l)||this.meshColumn(s+a,r+o)}}flush(){for(const t of this.dirty){const[e,n,s]=t.split(",").map(Number);this.remeshSection(e,n,s)}this.dirty.clear()}unloadFar(t,e){const n=(this.viewChunks+3)**2;for(const s of[...this.world.columnKeys()]){const[r,o]=wo(s);if(!((r-t)**2+(o-e)**2<=n)){for(let a=0;a<Mo;a++){const l=`${r},${a},${o}`,c=this.entries.get(l);c&&(this.dispose(c.opaque),this.dispose(c.trans),this.entries.delete(l)),this.dirty.delete(l)}this.meshedColumns.delete(s),this.world.unloadColumn(r,o)}}}disposeAll(){for(const t of this.entries.values())this.dispose(t.opaque),this.dispose(t.trans);this.entries.clear(),this.dirty.clear(),this.meshedColumns.clear(),this.world.onDirty=null,this.opaqueMat.dispose(),this.transMat.dispose()}stats(){return{meshedSections:this.entries.size,columns:this.world.columnCount(),triangles:this.triangles,drawn:0}}}class cr{group=new an;outline;crack;crackTex;chips;chipData=[];rnd=dr(4242);dummy=new Oe;static MAX=96;constructor(){const t=new ce(1.002,1.002,1.002);this.outline=new Po(new ko(t),new ur({color:1053728})),this.outline.visible=!1,this.group.add(this.outline);const e=he*Bi;this.crackTex=new zl(pd(Uy()),e,he,on),this.crackTex.magFilter=Ae,this.crackTex.minFilter=Ae,this.crackTex.generateMipmaps=!1,this.crackTex.flipY=!1,this.crackTex.repeat.set(1/Bi,1),this.crackTex.needsUpdate=!0;const n=new ie({map:this.crackTex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.crack=new Ht(new ce(1.004,1.004,1.004),n),this.crack.visible=!1,this.crack.renderOrder=2,this.group.add(this.crack),this.chips=new zi(new ce(.12,.12,.12),new ie({color:16777215}),cr.MAX),this.chips.instanceMatrix.setUsage(bf),this.chips.frustumCulled=!1,this.chips.count=0,this.group.add(this.chips)}target(t,e){if(!t){this.outline.visible=!1,this.crack.visible=!1;return}this.outline.visible=!0,this.outline.position.set(t.x+.5,t.y+.5,t.z+.5),e>=0?(this.crack.visible=!0,this.crack.position.copy(this.outline.position),this.crackTex.offset.x=Math.min(Bi-1,e)/Bi):this.crack.visible=!1}burst(t,e,n,s,r=14){const o=Jt[s]?.chip??[.6,.6,.6];for(let a=0;a<r;a++)this.chipData.length>=cr.MAX&&this.chipData.shift(),this.chipData.push({pos:new N(t+.2+this.rnd()*.6,e+.2+this.rnd()*.6,n+.2+this.rnd()*.6),vel:new N((this.rnd()-.5)*3,1.5+this.rnd()*2.5,(this.rnd()-.5)*3),life:.5+this.rnd()*.4});this.chips.userData.color=o,this.recolor(o)}recolor(t){this.chips.material.color.setRGB(t[0],t[1],t[2])}update(t){const e=this.chipData;for(let n=e.length-1;n>=0;n--){const s=e[n];if(s.life-=t,s.life<=0){e.splice(n,1);continue}s.vel.y-=14*t,s.pos.addScaledVector(s.vel,t)}this.chips.count=e.length;for(let n=0;n<e.length;n++)this.dummy.position.copy(e[n].pos),this.dummy.scale.setScalar(Math.min(1,e[n].life*3)),this.dummy.updateMatrix(),this.chips.setMatrixAt(n,this.dummy.matrix);this.chips.instanceMatrix.needsUpdate=!0}activeChips(){return this.chipData.length}}const vd="You've landed on this coast. Build a warm, dry camp before night.",zy="The boards are building material. Look at one and press R to take it.",Hy="You ran out of strength and fainted. Your things are in the bundle.",Gy="You will wake near the start, weak. Walk back to the bundle and press R to open it.",Xh=30,Vy=22,Se=(i,t={},e="")=>{const n=document.createElement(i);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return e&&(n.textContent=e),n},Wy={working:'<path d="M3 13 L9 7 M7 5 L11 9 M9 3 L13 7" stroke="currentColor" stroke-width="2" fill="none"/>',moving:'<path d="M2 8 H12 M8 4 L12 8 L8 12" stroke="currentColor" stroke-width="2" fill="none"/>',cold:'<path d="M8 1 V15 M2 5 L14 11 M2 11 L14 5" stroke="currentColor" stroke-width="1.8" fill="none"/>',night:'<path d="M11 2 A6 6 0 1 0 14 11 A5 5 0 0 1 11 2 Z" fill="currentColor"/>',wet:'<path d="M8 1 C11 6 13 8 13 10.5 A5 5 0 0 1 3 10.5 C3 8 5 6 8 1 Z" fill="currentColor"/>',recovering:'<path d="M8 14 V4 M3 8 L8 3 L13 8" stroke="currentColor" stroke-width="2.2" fill="none"/>',lantern:'<rect x="5" y="4" width="6" height="9" fill="currentColor"/><rect x="6" y="1" width="4" height="3" fill="currentColor"/>',hearth:'<path d="M8 1 C10 5 13 6 13 10 A5 5 0 0 1 3 10 C3 7 6 6 8 1 Z" fill="currentColor"/>'};class Xy{constructor(t,e){this.game=e;const n=Se("div",{class:"sg-bar"});n.append(this.fill,this.trend);const s=Se("div",{class:"sg-head"});s.append(Se("span",{class:"sg-title"},"Strength"),this.rate,this.value),this.gauge.append(s,n,this.chips,this.shelter,this.note),this.premise.textContent=vd,this.bhint.textContent=zy,this.faint.append(this.faintLine,this.faintSub);const r=Se("div",{id:"sbanners"});r.append(this.premise,this.dusk,this.bhint),this.root.append(this.gauge,this.arc,r,this.rest,this.faint),t.append(this.root)}root=Se("div",{id:"survival"});gauge=Se("div",{id:"sgauge",role:"meter","aria-label":"Strength"});fill=Se("div",{class:"sg-fill"});trend=Se("span",{class:"sg-trend","aria-hidden":"true"});value=Se("span",{class:"sg-value"});chips=Se("div",{class:"sg-chips"});shelter=Se("div",{class:"sg-shelter"});note=Se("div",{class:"sg-note"});rate=Se("span",{class:"sg-rate"});arc=Se("div",{id:"sarc","aria-hidden":"true"});premise=Se("div",{id:"premise",role:"note"});bhint=Se("div",{id:"shint",role:"note"});dusk=Se("div",{id:"sdusk",role:"alert"});rest=Se("div",{id:"srest"});faint=Se("div",{id:"sfaint",role:"alert"});faintLine=Se("div",{class:"sf-line"});faintSub=Se("div",{class:"sf-sub"});last={chips:"",shelter:"",note:"",premise:!1,bhint:!1,dusk:!1,rest:"",faint:"",arc:"",rate:""};shown=new Map;lastActive=0;premiseWant=!0;premiseLeft=Xh;premiseForced=!1;premiseWhy="opening";hintLeft=Vy;showPremise(t){this.premiseWant=!0,this.premiseForced=!0,this.premiseLeft=Xh,this.premiseWhy=t}dismissPremise(t){this.premiseWant=!1,this.premiseForced=!1,this.display("premise",!1,t)}display(t,e,n=""){const s=this.game.survival,r=this.shown.get(t),o=t==="premise";e&&r===void 0?(this.shown.set(t,s.activeS),this.game.log.log(o?"premise_shown":"hint_shown",o?{why:this.premiseWhy,...this.game.stamp()}:{hint:t,...this.game.stamp()})):!e&&r!==void 0&&(this.shown.delete(t),this.game.log.log(o?"premise_dismissed":"hint_dismissed",{...o?{}:{hint:t},why:n,shownForS:Math.round((s.activeS-r)*10)/10,...this.game.stamp()}))}update(){const t=this.game,e=t.survival,n=e.mode==="off";if(this.gauge.hidden=n,!n){const b=Math.round(e.strength);this.fill.style.width=`${Math.max(0,Math.min(100,e.strength))}%`,this.fill.className="sg-fill "+(e.strength<25?"low":e.strength<50?"mid":"ok"),this.value.textContent=`${b}`,this.gauge.setAttribute("aria-valuenow",String(b));const x=e.rates.net,L=x>.05?"▲":x<-.05?"▼":"•",A=Math.abs(x)<.02?"":`${x>0?"+":"−"}${Math.abs(x).toFixed(x>0?0:1)} a second`;A!==this.last.rate&&(this.last.rate=A,this.rate.textContent=A),this.trend.textContent=L,this.trend.className="sg-trend "+(x>.05?"up":x<-.05?"down":"flat");const R=e.chips.map(F=>F.id).join(",");R!==this.last.chips&&(this.last.chips=R,this.chips.replaceChildren(...e.chips.map(F=>{const X=Se("span",{class:`chip chip-${F.id}`});return X.innerHTML=`<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">${Wy[F.id]??""}</svg>`,X.append(F.label),F.id==="lantern"&&(X.title="Lantern light halves the night cold: strength falls about half as fast here"),X})));const k=e.shelter,S=t.previewText,y=S||(k.ok?"Covered":`Not covered: ${k.missing.join(", ")}`),C=S?"preview":k.ok?"yes":e.night?"no":"idle",z=`${C}|${y}`;z!==this.last.shelter&&(this.last.shelter=z,this.shelter.className=`sg-shelter ${C}`,this.shelter.textContent=y)}let s="";if(!e.unconscious){const b=t.player,x=e.bundles().map(L=>({dx:L.x-b.x,dz:L.z-b.z})).sort((L,A)=>Math.hypot(L.dx,L.dz)-Math.hypot(A.dx,A.dz));s=x.map(({dx:L,dz:A},R)=>{const k=Math.round(Math.hypot(L,A)),S=Math.abs(L)>Math.abs(A)?L<0?"west":"east":A<0?"north":"south",y=x.length>1?R===0?"Your nearest bundle":"Another bundle":"Your bundle";return k<=2?`${y} is right here. R to open it.`:`${y} is ${k} steps ${S}.`}).join(`
`)}s!==this.last.note&&(this.last.note=s,this.note.textContent=s,this.note.hidden=!s);const r=(t.phase%1+1)%1,o=Ke(r),a=o?(r-Je)/(1-Je):r/Je,l=`${o}${Math.round(a*200)}`;if(l!==this.last.arc){this.last.arc=l;const b=Math.PI*(1-a),x=60+52*Math.cos(b),L=46-40*Math.sin(b),A=o?`<circle cx="${x.toFixed(1)}" cy="${L.toFixed(1)}" r="6" fill="#dfe6f6"/><circle cx="${(x+2.5).toFixed(1)}" cy="${(L-1.5).toFixed(1)}" r="5" fill="#101830"/>`:`<circle cx="${x.toFixed(1)}" cy="${L.toFixed(1)}" r="6.5" fill="#ffd45a" stroke="#fff2b0" stroke-width="1.5"/>`;this.arc.innerHTML=`<svg viewBox="0 0 120 52" width="132" height="57"><path d="M8 46 A52 40 0 0 1 112 46" fill="none" stroke="${o?"#5c6f99":"#9fb0d8"}" stroke-width="2" stroke-dasharray="3 4"/><line x1="4" y1="46" x2="116" y2="46" stroke="#5c6f99" stroke-width="2"/>${A}</svg>`}const c=Math.max(0,Math.min(1,e.activeS-this.lastActive));this.lastActive=e.activeS;const h=t.state==="playing"&&!t.tourActive()&&!e.unconscious,d=Je-ld/Zn,u=r>=d,p=e.hearths.size>0;let g=!1;if(this.premiseWant){const b=!this.premiseForced&&(u||p);b||this.premiseLeft<=0?(this.premiseWant=!1,this.premiseForced=!1,this.display("premise",!1,b?u?"dusk":"camp begun":"timeout")):h&&(g=!0,this.premiseLeft-=c)}this.display("premise",g,h?"":"paused"),g!==this.last.premise&&(this.last.premise=g,this.premise.classList.toggle("on",g));const v=h&&!u&&this.hintLeft>0&&t.tide.firstPileTouchAt===null&&!p&&t.tide.clock.activeS>1.5&&e.mode!=="off";v&&(this.hintLeft-=c),this.display("boards_are_material",v,h?t.tide.firstPileTouchAt!==null?"took a board":"time or camp":"paused"),v!==this.last.bhint&&(this.last.bhint=v,this.bhint.classList.toggle("on",v));const m=h&&e.duskNotice!==null;m&&(this.dusk.textContent=e.duskNotice.text),this.display("dusk_warning",m,h?"time":"paused"),m!==this.last.dusk&&(this.last.dusk=m,this.dusk.classList.toggle("on",m));let f="";e.resting&&(f=Ke(r)&&e.strength<Pt.max?"Resting. The night is passing quickly while your strength fills. Move or press T to stop.":"Resting. Move or press T to stop."),f!==this.last.rest&&(this.last.rest=f,this.rest.textContent=f,this.rest.classList.toggle("on",!!f));const M=e.collapse?"out":"";M!==this.last.faint&&(this.last.faint=M,this.faintLine.textContent=M?Hy:"",this.faintSub.textContent=M?Gy:"",this.faint.classList.toggle("on",!!M)),this.faint.style.opacity=e.collapse?String(Math.min(.92,.7+.22*(1-Math.max(0,e.collapse.left-2)/Pt.collapseS))):"0"}}const Ca="Plumbline",qy={[E.HEARTH]:"A Hearth gives warmth and light. Water puts it out; it relights when the water has gone.",[E.LANTERN]:"A Lantern lights the way and halves the night cold in its light. Each one uses a Board, so Boards are shared between lanterns and building.",[E.GLASS]:"Glass is made from Dune, the pale sand out on the flats at low tide."};function P(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))typeof r=="function"?n.addEventListener(s.replace(/^on/,""),r):r===!0?n.setAttribute(s,""):r!==!1&&n.setAttribute(s,r);for(const s of e)s&&n.append(s);return n}let Pa=null;function Ky(){if(Pa)return Pa;const i=document.createElement("canvas");return i.width=i.height=pi,i.getContext("2d").putImageData(new ImageData(sc(),pi,pi),0,0),Pa=i,i}function Ts(i){const t=document.createElement("canvas");t.width=t.height=he;const e=Jt[i].tiles.side;return t.getContext("2d").drawImage(Ky(),e%bn*he,Math.floor(e/bn)*he,he,he,0,0,he,he),t}function _d(i){return Array.from({length:er},(t,e)=>{const n=i.slots[e],s=e===i.selected;return P("div",{class:"bslot"+(s?" sel":""),title:n?Ie(n.id):"empty"},P("span",{class:"bk"},String(e+1)),P("span",{class:"bface"},n&&Ts(n.id)),n&&P("span",{class:"bn"},n.id===E.PLAN?"∞":`×${n.count}`),s&&n&&P("span",{class:"bname"},Ie(n.id)))})}const $y=[["W A S D","walk"],["Space","jump (hold to swim up)"],["Shift","sprint"],["Mouse or arrow keys","look around"],["Left click or F (hold)","break a block"],["Right click or G","place the selected block"],["1-8, Q, E or wheel","choose a square on the tool belt"],["C","workbench (crafting)"],["R","pick up a board or bundle; use what you look at (buttons, panels, a dock)"],["T","rest in a warm, dry, covered spot"],["V","set a Board down"],["X","climb down a ladder (Space climbs up)"],["Esc or P","menu"]];class Yy{constructor(t){this.game=t,this.survHud=new Xy(document.getElementById("hud"),t),window.addEventListener("keydown",e=>this.key(e)),this.refreshBelt()}overlay=document.getElementById("overlay");hud=document.getElementById("hud");belt=document.getElementById("belt");readout=document.getElementById("readout");clock=document.getElementById("clock");toastEl=document.getElementById("toast");underwater=document.getElementById("underwater");toastT=0;from="title";grid=[0,0,0,0];craftMsg="";teacherMsg=[];clockT=0;carryEl=document.getElementById("carry");hintsOpen=new Map;aimEl=document.getElementById("aim");survHud;refresh(){const t=this.game.elevationReadout();this.readout.hidden=t===null}refreshBelt(){this.belt.replaceChildren(..._d(this.game.inventory))}toast(t,e=1.8){this.toastEl.textContent=t,this.toastEl.classList.add("on"),this.toastT=e}frame(t){this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.toastEl.classList.remove("on")),this.survHud.update();const n=this.game.hoist.carrying?"Carrying a bulky component: hands full":"";if(this.carryEl.textContent!==n&&(this.carryEl.textContent=n,this.carryEl.hidden=!n),this.aimEl.textContent!==this.game.aim&&(this.aimEl.textContent=this.game.aim),this.clockT-=t,this.clockT<=0){this.clockT=.5;const s=this.game.elevationReadout();s!==null&&(this.readout.textContent=`Height ${s}`);const r=Math.floor(this.game.phase*24*60+360)%1440;this.clock.textContent=`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}${this.game.saveOk()?"":"  (not saved)"}`;const o=this.game.player,a=Math.floor(o.x),l=Math.floor(o.y+1.62),c=Math.floor(o.z);this.underwater.hidden=!(this.game.world.getBlock(a,l,c)===5||this.game.world.isWaterAt(a,l,c))}}openHint(t,e={}){this.hintsOpen.has(t)||(this.hintsOpen.set(t,this.game.survival.activeS),this.game.log.log("recipe_hint_shown",{hint:t,...e,...this.game.stamp()}))}closeHint(t,e){const n=this.hintsOpen.get(t);n!==void 0&&(this.hintsOpen.delete(t),this.game.log.log("recipe_hint_dismissed",{hint:t,why:e,shownForS:Math.round((this.game.survival.activeS-n)*10)/10,...this.game.stamp()}))}closeAllHints(t){for(const e of[...this.hintsOpen.keys()])this.closeHint(e,t)}show(t){if(t!=="craft"&&this.closeAllHints("left the workbench"),this.hud.hidden=t==="title"||t==="tour",t==="playing"||t==="tour"){this.overlay.classList.remove("on"),this.overlay.replaceChildren();return}(t==="menu"||t==="title")&&(this.from=t),this.overlay.classList.add("on");const e=t==="title"?this.title():t==="menu"?this.menu():t==="craft"?this.craftPanel():t==="about"?this.about():this.teacher();this.overlay.replaceChildren(e),e.querySelector("[data-autofocus]")?.focus(),this.refreshBelt()}key(t){const e=this.game.state;if(e==="tour")return;if(e==="playing"||e==="title"){e==="title"&&t.code==="Enter"&&document.activeElement===document.body&&this.game.start();return}const n=document.activeElement?.matches("input, textarea, select");(t.code==="Escape"||t.code==="KeyC"&&e==="craft"&&!n)&&(t.preventDefault(),this.back())}back(){const t=this.game.state;t==="about"||t==="teacher"?this.game.setState(this.from):(t==="menu"||t==="craft")&&this.game.resume()}title(){return P("div",{class:"panel"},P("h1",{},Ca),P("p",{class:"sub"},"Build, dig and craft in a block world. Walk the beach, gather and build. The tall post in the harbor is the tide gauge, and its zero mark never moves."),P("div",{class:"row"},P("button",{class:"primary","data-autofocus":!0,onclick:()=>this.game.start()},"Play"),P("button",{id:"btn-tour-title",onclick:()=>this.game.startTour(1)},"How to play"),P("button",{onclick:()=>this.game.setState("teacher")},"Teacher"),P("button",{onclick:()=>this.game.setState("about")},"About")),this.keysTable())}keysTable(){return P("table",{class:"keys"},...$y.map(([t,e])=>P("tr",{},P("td",{},P("kbd",{},t)),P("td",{},e))))}menu(){return P("div",{class:"panel"},P("h2",{},"Paused"),P("div",{class:"row"},P("button",{class:"primary","data-autofocus":!0,onclick:()=>this.game.resume()},"Resume"),P("button",{onclick:()=>this.game.setState("craft")},"Workbench"),P("button",{id:"btn-tour-menu",onclick:()=>this.game.startTour(1)},"How to play"),P("button",{id:"btn-premise",onclick:()=>{this.survHud.showPremise("menu"),this.game.resume()}},"Show the goal again"),P("button",{onclick:()=>{this.toast(this.game.persist()?"Saved":"Could not save (storage full or blocked)")}},"Save now"),P("button",{onclick:()=>this.game.setState("teacher")},"Teacher"),P("button",{onclick:()=>this.game.setState("about")},"About")),P("p",{class:"premise-line",id:"menu-premise"},vd),this.keysTable(),P("p",{class:"status"},"Your world saves in this browser automatically."))}about(){return P("div",{class:"panel"},P("h2",{},`About ${Ca}`),P("p",{},`${Ca} is a block-building sandbox made for a middle school math class. You dig, gather, craft and build; the numbers come from what you build.`),P("p",{},"Everything stays in this browser. There are no accounts, no names and no network use after the page loads. Progress and settings are kept in local storage; a teacher can export a log file."),P("p",{},"Names, textures and the world are original to this project."),P("p",{class:"note"},"Not affiliated with Mojang or Microsoft."),P("div",{class:"row"},P("button",{class:"primary","data-autofocus":!0,onclick:()=>this.back()},"Back")))}observerSheet(){document.getElementById("observer")?.remove();const t=this.game.exportMeta("student"),e=o=>Array.from({length:o},()=>P("div",{class:"oline"})),n=(o,a=1)=>P("div",{class:"ofield"},P("div",{class:"olabel"},o),...e(a)),s=(...o)=>P("div",{class:"oboxes"},...o.map(a=>P("span",{},`☐ ${a}`))),r=P("div",{id:"observer",role:"dialog","aria-label":"Observer sheet"},P("div",{class:"noprint obar"},P("button",{class:"primary",id:"observer-print","data-autofocus":!0,onclick:()=>window.print()},"Print this page"),P("button",{id:"observer-close",onclick:()=>document.getElementById("observer")?.remove()},"Close")),P("h1",{},"Watching someone play: observer sheet"),P("p",{class:"odate"},"Date: ______________    Time they pressed Play (read it from your own watch): ______________"),P("p",{class:"onote"},"Watch quietly and do not tell the player what to do. Please do not point at the water or say anything about rescuing the boards. If you do help, write down what you said and when. Use your own watch for every time on this page: the game's clock stops whenever the game is paused, in a menu, or in the how-to-play tour, so it will not match a watch."),n("Help or hints you gave (what you said or did, and the time)",2),P("div",{class:"ofield"},P("div",{class:"olabel"},"Did they watch the how-to-play tour first?"),s("yes, all of it","part of it","no")),P("div",{class:"orow"},P("div",{class:"ofield"},P("div",{class:"olabel"},"When did they first notice their strength going down, and what did they say it was from?"),s("they did not notice","not sure"),...e(2)),P("div",{class:"ofield"},P("div",{class:"olabel"},"First try at making a shelter, and the first time strength was seen going back up (times, what they did)."),s("they did not try","not sure"),...e(2))),P("div",{class:"ofield"},P("div",{class:"olabel"},"Each trip away from camp: did they say where they were going?"),s("said a target","no stated target","not sure"),...e(1)),n("What they said out loud while playing (their exact words)",3),P("h2",{},"After they stop: ask these four questions and write their own words"),n("What made your strength go down or up?",2),n("What was your camp useful for?",2),n("What did you want to do next?",2),n("After your camp was ready, what was the rest of the night like? (did living through it seem engaging, or like a chore?)",2),n("If they collapsed: what happened to your things? (ask only if it happened)",2),n("Did they notice the opening goal and the recipe hints? (their words)",1),P("p",{class:"onote"},"If they did nothing, or only acted after a hint, write that down too. Wanting to keep building is a good sign, not proof."),P("p",{class:"osmall"},`For whoever lines this page up with the saved log: game run ${String(t.runId??"(none yet)")}, version ${String(t.build)}.`));document.body.append(r),r.querySelector("[data-autofocus]")?.focus()}evidenceTable(){const t=this.game.log.all("student").filter(n=>n.skillId==="signed_position").slice(-30);if(!t.length)return P("p",{id:"t-evidence"},"No signed_position events yet.");const e=t.map(n=>{const s=n.data,r=s.learning,o=n.kind==="learning_event"?r?.evidenceKind==="learning_check"?"learning check":r?.evidenceKind==="tool_use"?"tool use":"deferred, out of range":n.kind.replace(/_/g," "),a=r&&!r.evaluation.correct?`${r.evaluation.misconception??"unknown"}${r.evaluation.consistentWith.length?`; also consistent with: ${r.evaluation.consistentWith.join(", ")}`:""} (a possibility, not a diagnosis)`:"";return P("tr",{},P("td",{},new Date(n.t).toLocaleTimeString()),P("td",{},o),P("td",{},`setting ${s.setting}`),P("td",{},s.outcome??s.status??""),P("td",{},a),P("td",{},s.repair?"repair":""))});return P("table",{class:"keys",id:"t-evidence"},...e)}craftPanel(){const t=this.game,e=t.inventory,n=od(this.grid),s=ad(e,this.grid),r=n?qy[n.out]:void 0,o=r&&n?`recipe_preview_${Ie(n.out).toLowerCase()}`:null;for(const u of[...this.hintsOpen.keys()])u.startsWith("recipe_preview_")&&u!==o&&this.closeHint(u,"recipe changed");o&&r&&this.openHint(o,{recipe:Ie(n.out)});let a=this.craftMsg;!a&&n&&!s&&(a="Not enough materials for that recipe.");const l=this.grid.map((u,p)=>P("button",{class:"rslot"+(u?" full":""),"data-k":`c${p}`,title:u?`${Ie(u)} (activate to take it out)`:"empty ingredient slot","aria-label":`ingredient slot ${p+1}: ${u?Ie(u):"empty"}`,onclick:()=>{this.grid[p]=0,this.craftMsg="",this.rebuildCraft(`c${p}`)}},u?Ts(u):null)),c=e.slots.map((u,p)=>u&&P("button",{class:"inv","data-k":`i${p}`,title:`${Ie(u.id)} x${u.count}: add one to the recipe row`,"aria-label":`${Ie(u.id)}, ${u.count}. Add one to the recipe row`,onclick:()=>{const g=this.grid.findIndex(v=>!v);g>=0&&(this.grid[g]=u.id),this.craftMsg=g>=0?"":"The row is full. Take something out first.",this.rebuildCraft(`i${p}`)}},Ts(u.id),P("span",{class:"n"},String(u.count)))),h=n?P("button",{class:"rresult"+(s?" primary":""),"data-k":"out",disabled:!s,title:`Craft: ${n.count} ${Ie(n.out)}`,"aria-label":`Craft ${n.count} ${Ie(n.out)}`,onclick:()=>{const u=this.grid.filter(g=>g===E.BOARD).length,p=ec(e,this.grid);p&&t.tide.noteBoardsConsumed(u,e.count(E.BOARD)-(p.out===E.BOARD?p.count:0),`crafted ${Ie(p.out)}`),this.craftMsg=p?`Made ${p.count} ${Ie(p.out)}`:"Inventory full",p&&t.log.log("craft",{out:Ie(p.out),count:p.count}),this.rebuildCraft("out"),t.ui.refreshBelt()}},Ts(n.out),P("span",{class:"n"},`×${n.count}`)):P("div",{class:"rresult","aria-hidden":"true"}),d=n?`${this.grid.filter(Boolean).length} in, ${n.count} ${Ie(n.out)} out`:"No recipe";return P("div",{class:"panel"},P("h2",{},"Workbench"),P("p",{class:"sub"},"Pick blocks from your pack to fill the recipe row, in any order. Pressing the result crafts once and uses them up; press it again to repeat."),P("div",{class:"recipe-row"},P("div",{class:"rslots"},...l),P("span",{class:"rarrow","aria-hidden":"true"}),h,P("span",{class:"rlabel"},d)),r&&P("p",{class:"sub recipe-note",id:"recipe-note"},r),P("div",{class:"row"},P("button",{"data-k":"clear",onclick:()=>{this.grid=[0,0,0,0],this.craftMsg="",this.rebuildCraft("clear")}},"Clear row"),P("button",{class:"primary","data-autofocus":!0,"data-k":"close",onclick:()=>this.game.resume()},"Close")),P("p",{class:"status",role:"status"},a),P("h3",{},"Your pack"),P("div",{class:"invlist"},...c),P("details",{...this.hintsOpen.has("recipe_notes")?{open:!0}:{},ontoggle:u=>{u.target.open?this.openHint("recipe_notes",{recipes:Tl.map(p=>Ie(p.out))}):this.closeHint("recipe_notes","closed")}},P("summary",{},"Recipe notes"),...Tl.map(u=>P("p",{"data-recipe":Ie(u.out)},`${u.needs.map(Ie).join(" + ")} → ${u.count} ${Ie(u.out)}${u.out===E.HEARTH?". A Hearth gives warmth and light. Water puts it out; it relights when the water has gone.":u.out===E.LANTERN?". Each lantern uses one Board, so boards are shared between lanterns and building.":""}`))))}rebuildCraft(t){const e=this.craftPanel();this.overlay.replaceChildren(e),(e.querySelector(`[data-k="${t}"]:not([disabled])`)??e.querySelector("[data-autofocus]"))?.focus()}survivalSettings(){const t=this.game,e=["normal","gentle","off"],n=P("p",{class:"sub",id:"t-survival-effect"},bl[t.survival.mode]),s=e.map(r=>{const o=P("input",{type:"radio",name:"survival-mode",value:r,id:`t-survival-${r}`,checked:t.survival.mode===r});return o.addEventListener("change",()=>{t.setSurvivalMode(r),n.textContent=bl[r]}),P("label",{class:"chk"},o,`${r[0].toUpperCase()}${r.slice(1)}`)});return P("div",{class:"survival-settings",id:"t-survival"},P("h3",{},"Survival settings"),P("p",{class:"note"},"These control the strength meter and the shelter loop. They are separate from the mathematical concepts below and never change recipes, physics or free building. Every change is logged with its stated effect."),P("div",{class:"row"},...s),n)}teacher(){const t=this.game,e=t.config,n=wl.map(v=>{const m=Ou.includes(v),f=P("input",{type:"checkbox","data-skill":v,checked:e.activeSkills.includes(v),disabled:!m&&!e.activeSkills.includes(v)}),M=Iu[v]?.alignment.summary??"";return P("label",{class:"chk"+(m?"":" off")},f,`${v}: ${M}${m?"":" (no activity yet: its card is still in review)"}`)}),s=P("input",{type:"number",id:"t-min",value:String(e.numberRange.min),step:"1","aria-label":"range minimum"}),r=P("input",{type:"number",id:"t-max",value:String(e.numberRange.max),step:"1","aria-label":"range maximum"}),o=P("input",{type:"checkbox",id:"t-readout",checked:e.scaffold.elevationReadout}),a=P("textarea",{id:"t-json","aria-label":"configuration JSON",spellcheck:"false"});a.value=JSON.stringify(e,null,2);const l=P("div",{class:"status",id:"t-msg",role:"status"}),c=()=>{l.replaceChildren(...this.teacherMsg.map(v=>P("div",{class:v.err?"err":""},v.text)))};c();const h=()=>({schemaVersion:1,activeSkills:[...this.overlay.querySelectorAll("[data-skill]")].filter(v=>v.checked).map(v=>v.dataset.skill),numberRange:{min:Number(s.value),max:Number(r.value)},allowedRepresentations:e.allowedRepresentations,scaffold:{level:e.scaffold.level,elevationReadout:o.checked},advancement:{policy:e.advancement.policy}}),d=v=>{const m=Vl(v);if(!m.ok){this.teacherMsg=m.errors.map(M=>({text:M,err:!0})),c();return}const f=t.applyConfig(m.config);this.teacherMsg=[{text:f?"Configuration applied and saved in this browser.":"Configuration applied for this session only: this browser is not keeping settings.",err:!f}],this.show("teacher")},u=t.log.counts(),p=(v,m)=>()=>{const f=t.log.all(v),M=`plumbline-${v}-log`,b=t.exportMeta(v);m==="csv"?_a(`${M}.csv`,zu(f,String(b.runId??"")),"text/csv"):_a(`${M}.json`,Hu(v,f,t.config,new Date,b),"application/json"),t.log.log("export",{stream:v,kind:m,events:f.length})},g=P("input",{type:"file",accept:"application/json,.json",id:"t-file","aria-label":"load configuration file"});return g.addEventListener("change",()=>{const v=g.files?.[0];v&&v.text().then(m=>{try{d(JSON.parse(m))}catch{this.teacherMsg=[{text:"That file is not valid JSON.",err:!0}],c()}})}),P("div",{class:"panel",id:"teacher-panel"},P("h2",{},"Teacher settings"),P("p",{class:"note"},"No password: anyone using this computer can open this screen. Settings are stored only in this browser. They govern learning activities and their scaffolds; they never change physics, recipes or free building."),this.survivalSettings(),P("h3",{},"Active skills"),...n,P("h3",{},"Number range (which real contexts count as learning activities; never what is true)"),P("div",{class:"row"},"from",s,"to",r),P("h3",{},"Scaffold"),P("label",{class:"chk"},o,"Show the elevation readout on screen while signed_position is on (default off)"),P("p",{class:"sub"},"Advancement is manual: you decide when to switch skills. Scaffold level and allowed representations are kept in the configuration file but nothing in this slice reads them, so they are not shown as controls."),P("div",{class:"row"},P("button",{class:"primary",id:"t-apply","data-autofocus":!0,onclick:()=>d(h())},"Apply"),P("button",{id:"t-reset",onclick:()=>d(structuredClone(Gl))},"Reset to defaults"),P("button",{id:"t-savefile",onclick:()=>_a("plumbline-teacher-config.json",JSON.stringify(t.config,null,2),"application/json")},"Save to file"),P("label",{},"Load from file ",g)),P("h3",{},"Configuration JSON"),a,P("div",{class:"row"},P("button",{id:"t-applyjson",onclick:()=>{try{d(JSON.parse(a.value))}catch{this.teacherMsg=[{text:"That text is not valid JSON.",err:!0}],c()}}},"Apply JSON")),l,P("h3",{},"Learning evidence (student stream)"),P("p",{class:"note"},"A completed delivery or one correct attempt is not evidence of mastery. A setting on a labelled mark, or with a matching number visible, is tool use. A learning check is a first run on an unlabelled mark with no visible matching number and no earlier run with that dock."),this.evidenceTable(),P("h3",{},`Event log: ${u.student} student events, ${u.bot} bot test events (kept apart)`),P("p",{},"Events from skills you later disable stay in the log and the export. A completed build or one correct attempt is not evidence of mastery."),P("div",{class:"row"},P("button",{id:"t-exp-csv",onclick:p("student","csv")},"Export student log (CSV)"),P("button",{id:"t-exp-json",onclick:p("student","json")},"Export student log (JSON)"),P("button",{id:"t-exp-bot",onclick:p("bot","json")},"Export bot test log (JSON)"),P("button",{id:"t-observer",onclick:()=>this.observerSheet()},"Observer sheet (print)")),P("div",{class:"row"},P("button",{onclick:()=>this.back()},"Back")))}}class jy{group=new an;panels=[];straps=[];mats=[];tints=[];constructor(){const t=(a,l,c)=>{const h=new ie({color:new Zt(a,l,c)});return this.mats.push(h),this.tints.push([a,l,c]),h},e=t(.91,.65,.16),n=t(.23,.25,.32),s=t(.435,.49,.69),r=t(.14,.12,.1),o=(a,l,c,h,d,u,p)=>{const g=new Ht(new ce(a,l,c),p);return g.position.set(h,d,u),this.group.add(g),g};o(.92,.1,.92,0,.05,0,e);for(const[a,l]of[[-.42,-.42],[.42,-.42],[-.42,.42],[.42,.42]])o(.07,.8,.07,a,.45,l,n);o(.92,.06,.07,0,.82,-.2,n),o(.92,.06,.07,0,.82,.2,n);for(let a=0;a<4;a++)this.panels.push(o(.8,.1,.8,0,.15+.115*a,0,s));for(const a of[-.22,.22])this.straps.push(o(.86,.025,.06,0,.3,a,r));o(.1,.9,.1,0,1.2,0,n),o(.7,.45,.1,.35,1.5,0,t(.1,.8,.9)),this.group.scale.setScalar(1.8)}update(t,e){this.group.position.set(t.tray.x+.5,t.plane,t.tray.z+.5),this.panels.forEach((r,o)=>r.visible=o<t.staged);const n=.1+.115*t.staged+.02;this.straps.forEach(r=>{r.visible=t.staged>0,r.position.y=n+.012});const s=r=>Math.max(r,.6);this.mats.forEach((r,o)=>r.color.setRGB(this.tints[o][0]*s(e[0]),this.tints[o][1]*s(e[1]),this.tints[o][2]*s(e[2])))}}function Zy(){const i=new an,t=new ie({color:7306672}),e=new ie({color:4608650}),n=new ie({color:3120800}),s=new Ht(new ce(1.5,.12,.85),t),r=new Ht(new ce(1.52,.04,.87),e);r.position.y=-.07;const o=new Ht(new ce(.2,.2,.9),n),a=o.clone();return o.position.set(-.7,-.12,.45),a.position.set(.7,-.12,.45),i.add(s,r,o,a),i.position.set(0,-.62,-1),i.rotation.x=.28,i.traverse(l=>{l.renderOrder=50;const c=l.material;c&&(c.depthTest=!1)}),i.visible=!1,i}const qh=.9,Kh=i=>[-.825+.55*(i%4),i<4?-.4:.4],ai=3.2;function $h(i,t){const e=Math.sign(i.x-t.x),n=Math.sign(i.z-t.z);return[e*1.3,n*1.3]}class yd{group=new an;tray=new jy;docks=new Map;notch;signs=[];signsBuilt=!1;flying=[];anim=null;stoneMat=new ie({color:7306672});now=0;constructor(){this.group.add(this.tray.group),this.notch=new Ht(new ce(1.06,1.06,1.06),new ie({color:16769126,transparent:!0,opacity:.45,depthWrite:!1})),this.notch.visible=!1,this.group.add(this.notch);for(let t=0;t<4;t++){const e=new Ht(new ce(.5,.16,.5),this.stoneMat);e.visible=!1,this.flying.push(e),this.group.add(e)}}marker(t){let e=this.docks.get(t.key);if(e)return e;const n=new an,s=new Ht(new ce(ai,.14,ai),new ie({color:2067050}));s.position.y=.07;const r=new Ht(new ce(ai+.16,.05,ai+.16),new ie({color:15921906}));r.position.y=.02;const o=new Ht(new ce(.08,2.4,.08),new ie({color:2764606}));o.position.set(ai/2-.15,1.3,ai/2-.15);const a=new Ht(new ce(1.1,.7,.05),new ie({color:15921906}));a.position.set(ai/2-.15-.55,2.25,ai/2-.15),n.add(r,s,o,a);const l=[],c=[],h=new ie({color:1002040});for(let d=0;d<8;d++){const[u,p]=Kh(d),g=new Ht(new ce(.5,.03,.5),h);g.position.set(u,.16,p),g.visible=!1,c.push(g);const v=new Ht(new ce(.5,.16,.5),this.stoneMat);v.position.set(u,.22,p),v.visible=!1,l.push(v),n.add(g,v)}return this.group.add(n),e={group:n,flag:a,frames:c,stack:l},this.docks.set(t.key,e),e}disposeMarker(t){t.group.traverse(e=>{const n=e;if(!n.isMesh)return;n.geometry.dispose();const s=n.material;s!==this.stoneMat&&s.dispose()})}unload(t,e,n,s,r){const[o,a]=$h(t,s);this.anim={dockKey:t.key,start:r,count:e,from:new N(s.x+.5,n+.3,s.z+.5),slot0:t.stock,dock:new N(t.x+.5+o,t.plane+.2,t.z+.5+a)}}buildSigns(t){this.signsBuilt=!0;const e=[[-5,"−5","#e8a21c"],[0,"0","#dfe2ea"],[5,"+5","#2f6fe0"]];for(const[n,s,r]of e){const o=document.createElement("canvas");o.width=256,o.height=128;const a=o.getContext("2d");a.fillStyle="#14161f",a.fillRect(0,0,256,128),a.fillStyle=r,a.fillRect(8,8,240,112),a.fillStyle=n<0?"#2a1a02":n===0?"#1c2034":"#ffffff",a.font="bold 104px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(s,128,70);const l=new Xn(o);l.colorSpace=Cn;const c=new ie({map:l});this.signs.push({mat:c,tint:[1,1,1]});const h=kt+4*n+1;for(const[d,u,p]of[[0,.56,0],[0,-.56,Math.PI],[.56,0,Math.PI/2],[-.56,0,-Math.PI/2]]){const g=new Ht(new di(3.6,1.8),c);g.position.set(t.rail.x+.5+d,h,t.rail.z+.5+u),g.rotation.y=p,this.group.add(g)}}}update(t,e,n,s){this.signsBuilt||this.buildSigns(n);for(const a of this.signs){const l=c=>Math.max(c,.75);a.mat.color.setRGB(l(e[0]),l(e[1]),l(e[2]))}this.tray.update(t,e);for(const[a,l]of this.docks)t.docks.has(a)||(this.group.remove(l.group),this.disposeMarker(l),this.docks.delete(a));this.now=t.clock;const r=this.now,o=this.anim&&r-this.anim.start<qh?this.anim:null;o||(this.anim=null);for(const a of t.docks.values()){const l=this.marker(a),[c,h]=$h(a,t.tray);l.group.position.set(a.x+.5+c,a.plane,a.z+.5+h),l.flag.material.color.setHex(a.mounted?15921906:a.mounting>0?16765040:6976127);const d=Math.min(8,a.stock)-(o&&o.dockKey===a.key?o.count:0),u=Math.min(8,Math.max(a.stock,s(a)));l.stack.forEach((p,g)=>p.visible=g<d),l.frames.forEach((p,g)=>p.visible=g<u&&g>=d)}if(this.flying.forEach((a,l)=>{if(!o||l>=o.count){a.visible=!1;return}const c=Math.min(1,Math.max(0,(r-o.start-l*.1)/(qh-.4)));a.visible=!0;const[h,d]=Kh(Math.min(7,o.slot0+l));a.position.lerpVectors(o.from,new N(o.dock.x+h,o.dock.y,o.dock.z+d),c),a.position.y+=Math.sin(c*Math.PI)*.9}),t.stop!==null){const a=bo(n,t.stop);this.notch.visible=!0,this.notch.position.set(a.x+.5,a.y+.5,a.z+.5)}else this.notch.visible=!1}}const Jy=7,ka=ir,Qy=ir+1.1,tx=[-5,0,5];class ex{constructor(t){this.chapter=t;const e=this.world.terrain.features.hoist;this.hoist=new Do({getBlock:(n,s,r)=>this.world.getBlockEnsured(n,s,r)},e.tray,e.homePlane),this.hoist.listener=n=>this.hoistEvents.push(n),this.loose=new Qu(this.world,this.world.terrain.features.tide.area),this.world.tideLevel=ka,t===1?this.setupBeach():this.setupHoist()}world=new Uo(Jy);player=new Lo(this.world);inventory=Dn.starter();hoist;plan=new Io;input={...In};keysDown=new Set;breaking=!1;hit=null;mining=null;freeCam=null;fov=72;phase=.22;pressRemaining=0;timeScale=1;craft=null;cover=null;beltMark=null;savedFlash=0;bursts=[];hoistEvents=[];pressedStops=[];used={dispatch:0,ret:0,mount:0,press:0};time=0;acc=0;start={x:0,y:0,z:0};stack={x:0,y:0,z:0};ladder={x:0,y:0,z:0};practice=null;loose;fill(t,e,n,s,r,o,a){for(let l=r;l<=o;l++)for(let c=n;c<=s;c++)for(let h=t;h<=e;h++)this.world.setBlock(h,c,l,a)}setupBeach(){const t=this.world.terrain.features.tide,e=(d,u)=>this.world.groundPlane(d,u,90);for(let d=-3;d<=3;d++)for(let u=1;u<=5;u++)this.world.ensureColumn(u,d);this.loose.spawnPile(t.pile.x,t.pile.z);const n=52,s=12,r=e(n,s);this.start={x:n,y:r,z:s};const o=n-6,a=e(o,s);this.fill(o,o,a,a+1,s,s,E.BLUEROCK),this.stack={x:o,y:a,z:s},this.practice=this.loose.add({x:n-2.5,y:e(n-3,s+4)+.08,z:s+4.5,yaw:.5,origin:"dropped",pile:!1});const l=n+8,c=s+1,h=e(l,c);this.fill(l+1,l+3,h-2,e(l+3,c)+8,c-2,c+2,E.CUTSTONE),this.fill(l,l,h,h+6,c,c,E.LADDER),this.ladder={x:l,y:h,z:c},this.inventory.slots[this.inventory.slots.findIndex(d=>d?.id===E.PLAN)]=null,this.player.teleport(n+.5,r+.01,s+.5),this.player.yaw=Math.PI/2-.55,this.player.pitch=0,this.world.tideLevel=ka}setupHoist(){const t=this.world.terrain.features.hoist;this.world.ensureColumn(t.tray.x>>4,t.tray.z>>4);const e=kt-1,n=t.tray.x+1;for(let s=t.homePlane;s<e;s++)this.world.setBlock(n,s,t.tray.z,E.CUTSTONE);this.world.setBlock(n,e,t.tray.z,E.DOCK),this.hoist.syncDocks(),this.inventory=Dn.starter(),this.inventory.add(E.BLUEROCK,8),this.player.teleport(t.controls.x+3.5,t.homePlane,t.controls.z0+1.5),this.fov=80,this.player.yaw=Math.PI/2}target(){return Ql(this.world,this.player.eye(),this.player.forwardVec())}editCtx(){return{world:this.world,plan:this.plan,inventory:this.inventory,hoist:this.hoist,overlapsPlayer:(t,e,n)=>{const s=this.player;return s.x+.3>t&&s.x-.3<t+1&&s.z+.3>n&&s.z-.3<n+1&&s.y+1.8>e&&s.y<e+1},log:()=>{},toast:()=>{},burst:(t,e,n,s)=>this.bursts.push({x:t,y:e,z:n,id:s}),refresh:()=>{}}}pickUpAimed(){const t=this.loose.raycast(this.player.eye(),this.player.forwardVec(),6);return!t||!this.inventory.hasRoom(E.BOARD)?!1:(this.loose.remove(t.board.id),this.inventory.add(E.BOARD,1),!0)}placeSelected(){const t=this.target(),e=this.inventory.selectedStack();return!t||!e?!1:Jl(this.editCtx(),t.x+t.nx,t.y+t.ny,t.z+t.nz,e.id,!0)}useAimed(){const t=this.target();if(!t)return!1;const e=this.world.getBlock(t.x,t.y,t.z),n=this.hoist,s=Vu(e);if(s!==null){if(!tx.includes(s))throw new Error(`the tour must not press the unlabelled stop ${s}`);return this.pressedStops.push(s),n.setStop(s)}if(e===E.DISPATCH)return n.stop===null||!n.dispatch()?!1:(this.used.dispatch++,!0);if(e===E.RETURN)return n.returnTray()?(this.used.ret++,!0):!1;if(e===E.MOUNT){const r=n.activeDock();return!r||!n.mountDock(r.key)?!1:(this.used.mount++,!0)}return e===E.PRESS_BUTTON?this.pressRemaining>0||this.inventory.count(E.BLUEROCK)<Kn||!n.canStartPress()?!1:(this.inventory.take(E.BLUEROCK,Kn),this.pressRemaining=Xl,this.used.press++,!0):!1}update(t){this.acc+=t;let e=0;for(;this.acc>=oe&&e<40;)this.tick(oe),this.acc-=oe,e++;e===40&&(this.acc=0)}tick(t){this.time+=t,this.world.tideLevel=Math.min(Qy,ka+.012*this.time),this.player.step(this.input,t),this.hit=this.target(),this.mine(t);const e=t*this.timeScale;this.hoist.update(e),this.pressRemaining>0&&(this.pressRemaining-=e,this.pressRemaining<=0&&(this.pressRemaining=0,this.hoist.pressOutput())),this.savedFlash>0&&(this.savedFlash=Math.max(0,this.savedFlash-t))}mine(t){const e=this.hit;if(!this.breaking||!e){this.mining=null;return}const n=Jt[this.world.getBlock(e.x,e.y,e.z)];!n||n.hardness===1/0||((!this.mining||this.mining.x!==e.x||this.mining.y!==e.y||this.mining.z!==e.z)&&(this.mining={x:e.x,y:e.y,z:e.z,progress:0}),this.mining.progress+=t,this.mining.progress>=n.hardness&&(Zl(this.editCtx(),e.x,e.y,e.z),this.mining=null))}crackStage(){const t=this.mining;if(!t)return-1;const e=Jt[this.world.getBlock(t.x,t.y,t.z)];return!e||e.hardness===1/0?-1:Math.floor(t.progress/e.hardness*10)}trayUnits(){return(this.hoist.plane-kt)/Ce}}const Qr={pause:"KeyK",next:"KeyN",replay:"KeyB",skip:"Backspace"},La=Math.PI*2,Yh=(i,t)=>{let e=(t-i)%La;return e>Math.PI&&(e-=La),e<-Math.PI&&(e+=La),e},nx=i=>i*i*(3-2*i);class ix{constructor(t,e){this.d=t,this.stage=e}dt=0;say(t){this.d.setStep(t)}*wait(t){let e=0;for(;e<t;)yield,e+=this.dt}down(...t){for(const e of t)this.stage.keysDown.add(e)}up(...t){for(const e of t)this.stage.keysDown.delete(e)}*hold(t,e,n={}){this.down(...t),Object.assign(this.stage.input,n),yield*this.wait(e),this.up(...t);for(const s of Object.keys(n))this.stage.input[s]=s==="forward"||s==="right"?0:!1}*tap(t,e=.3){this.down(t),yield*this.wait(e),this.up(t)}*turnTo(t,e,n=1.7,s=[]){const r=this.stage.player;this.down(...s);for(let o=0;o<900;o++){const a=Yh(r.yaw,t),l=e-r.pitch,c=n*this.dt;if(Math.abs(a)<c&&Math.abs(l)<c){r.yaw=t,r.pitch=e;break}r.yaw+=Math.max(-c,Math.min(c,a)),r.pitch+=Math.max(-c,Math.min(c,l)),yield}this.up(...s)}anglesTo(t,e,n){const s=this.stage.player.eye(),r=t-s[0],o=n-s[2];return{yaw:Math.atan2(-r,-o),pitch:Math.atan2(e-s[1],Math.hypot(r,o))}}*face(t,e,n,s=1.7,r=[]){const o=this.anglesTo(t+.5,e+.5,n+.5);yield*this.turnTo(o.yaw,o.pitch,s,r)}*lookAt(t,e,n,s=1.7){const r=this.anglesTo(t,e,n);yield*this.turnTo(r.yaw,r.pitch,s)}*faceButton(t,e=1.8){const n=this.anglesTo(t.x+.97,t.y+.5,t.z+.5);yield*this.turnTo(n.yaw,n.pitch,e)}*walkTo(t,e,n={}){const s=this.stage.player,r=n.tol??.3;this.down("KeyW",...n.codes??[]);for(let o=0;o<1500;o++){const a=t-s.x,l=e-s.z;if(Math.hypot(a,l)<r)break;const c=Math.atan2(-a,-l),h=Yh(s.yaw,c),d=3*this.dt;s.yaw+=Math.max(-d,Math.min(d,h)),s.pitch+=(0-s.pitch)*Math.min(1,4*this.dt),this.stage.input.forward=Math.abs(h)<.6?1:0,this.stage.input.sprint=!!n.sprint,yield}this.stage.input.forward=0,this.stage.input.sprint=!1,this.up("KeyW",...n.codes??[])}*fly(t,e,n){const s=this.stage,r=this.currentCam(),o=[r.x-Math.sin(r.yaw)*Math.cos(r.pitch)*8,r.y+Math.sin(r.pitch)*8,r.z-Math.cos(r.yaw)*Math.cos(r.pitch)*8];let a=0;for(;;){a+=this.dt;const l=n<=0?1:nx(Math.min(1,a/n)),c=r.x+(t[0]-r.x)*l,h=r.y+(t[1]-r.y)*l,d=r.z+(t[2]-r.z)*l,u=o[0]+(e[0]-o[0])*l,p=o[1]+(e[1]-o[1])*l,g=o[2]+(e[2]-o[2])*l;if(s.freeCam=this.camToward(c,h,d,u,p,g),l>=1)break;yield}}camToward(t,e,n,s,r,o){const a=s-t,l=o-n;return{x:t,y:e,z:n,yaw:Math.atan2(-a,-l),pitch:Math.atan2(r-e,Math.hypot(a,l))}}currentCam(){const t=this.stage;if(t.freeCam)return t.freeCam;const e=t.player.eye();return{x:e[0],y:e[1],z:e[2],yaw:t.player.yaw,pitch:t.player.pitch}}eyes(){this.stage.freeCam=null}*until(t,e=40){let n=0;for(;!t()&&n<e;)yield,n+=this.dt}}class sx{constructor(t,e){this.chapters=t,this.hooks=e}stage=null;chapter=1;phase="playing";current=null;stepNo=0;seen=[];chapterTime=0;lengths={};speedBadge=!1;gen=null;ctx=null;active=!1;get def(){return this.chapters[this.chapter-1]}get chapterCount(){return this.chapters.length}start(t=1){this.active=!0,this.begin(t)}begin(t){const e=this.stage;this.chapter=t,this.stage=new ex(t),this.ctx=new ix(this,this.stage),this.gen=this.def.script(this.ctx),this.phase="playing",this.current=null,this.stepNo=0,this.chapterTime=0,this.hooks.onStage(this.stage,e),this.hooks.onChange?.()}setStep(t){this.current=t,this.stepNo++,this.seen.includes(t.id)||this.seen.push(t.id),this.hooks.onChange?.()}update(t){if(!this.active||!this.stage||!this.ctx||!this.gen||this.phase!=="playing")return;this.ctx.dt=t,this.chapterTime+=t;const e=this.gen.next();this.stage.update(t),this.speedBadge=this.stage.timeScale>1,e.done&&this.finishChapter()}finishChapter(){this.lengths[this.chapter]=Math.round(this.chapterTime*10)/10,this.stage?.keysDown.clear(),this.gen=null,this.chapter<this.chapterCount?(this.phase="between",this.current={id:"between",chapter:this.chapter,text:"",hints:[],card:{title:`Chapter ${this.chapter+1}: ${this.chapters[this.chapter].title}`,sub:"This part is optional. It shows how the quarry hoist machine works.",tag:"Optional"}}):(this.phase="done",this.current={id:"done",chapter:this.chapter,text:"",hints:[],card:{title:"That is the tour",sub:"You can watch it again from the menu any time."}}),this.hooks.onChange?.()}togglePause(){this.phase==="playing"?this.phase="paused":this.phase==="paused"&&(this.phase="playing"),this.hooks.onChange?.()}nextChapter(){this.active&&this.phase!=="done"&&(this.chapter<this.chapterCount?this.begin(this.chapter+1):(this.stage?.keysDown.clear(),this.gen=null,this.phase="done",this.current={id:"done",chapter:this.chapter,text:"",hints:[],card:{title:"That is the tour",sub:"You can watch it again from the menu any time."}},this.hooks.onChange?.()))}replay(){if(!this.active)return;const t=this.phase==="between"?this.chapter:this.chapter;this.begin(t)}skip(){if(!this.active)return;this.active=!1,this.gen=null;const t=this.stage;this.stage=null,this.current=null,this.hooks.onStage(null,t),this.hooks.onExit()}get finished(){return this.phase==="done"}}const fe=(i,t,e=!1)=>({label:i,code:t,wide:e}),xd=fe("W","KeyW"),Md=fe("A","KeyA"),Sd=fe("S","KeyS"),wd=fe("D","KeyD"),To=fe("Space","Space",!0),bd=fe("Shift","ShiftLeft",!0),Rl=fe("F","KeyF"),Ed=fe("G","KeyG"),Td=fe("C","KeyC"),Cl=fe("R","KeyR"),Ad=fe("X","KeyX"),rx=fe("Q","KeyQ"),ox=fe("E","KeyE"),Rd=fe("Esc","Escape",!0),Cd=[fe("←","ArrowLeft"),fe("↑","ArrowUp"),fe("↓","ArrowDown"),fe("→","ArrowRight")],ax=[fe("1","Digit1"),fe("2","Digit2"),fe("3","Digit3"),fe("…","Digit0"),fe("8","Digit8")],Ee={walk:{title:"Walk",caps:[xd,Md,Sd,wd]},look:{title:"Look around",caps:Cd,alt:{mouse:"move",text:"or move the mouse"}},jump:{title:"Jump",caps:[To]},sprint:{title:"Run",caps:[bd]},breakIt:{title:"Break a block (hold)",caps:[Rl],alt:{mouse:"left",text:"or hold the left mouse button"}},place:{title:"Place a block",caps:[Ed],alt:{mouse:"right",text:"or click the right mouse button"}},slot:{title:"Choose a square",caps:ax,alt:{caps:[rx,ox],text:"or Q and E, or the mouse wheel"}},mouseOn:{title:"Start mouse control",caps:[],alt:{lead:"",mouse:"left",text:"click the game once"}},mouseOff:{title:"Let go of the mouse",caps:[Rd]},bench:{title:"Workbench",caps:[Td],alt:{lead:"then",text:"click a block, then click the result. Or use Tab and Enter"}},climbUp:{title:"Climb up",caps:[To]},climbDown:{title:"Climb down",caps:[Ad]},use:{title:"Press a button or use a machine",caps:[Cl]},pick:{title:"Pick up a loose board",caps:[Cl],alt:{caps:[Rl],text:"or hold"}}},le=(i,t,e,n,s={})=>i.say({id:t,chapter:i.stage.chapter,text:e,hints:n,...s});function*lx(i){const t=i.stage,e=t.player,n=t.stack,s=t.ladder;i.say({id:"ch1-card",chapter:1,text:"",hints:[],card:{title:"Chapter 1: Moving and building",sub:"About 90 seconds. Keys are shown on the screen as they are pressed. To skip it, press Backspace or the Skip button at the bottom left."}}),yield*i.wait(3.2),le(i,"walk","Walk with W, A, S and D: forward, left, back and right. Hold Shift to run.",[Ee.walk,Ee.sprint]),yield*i.wait(2),yield*i.hold(["KeyW"],.8,{forward:1}),yield*i.wait(.3),yield*i.hold(["KeyA"],.6,{right:-1}),yield*i.wait(.3),yield*i.hold(["KeyS"],.8,{forward:-1}),yield*i.wait(.3),yield*i.hold(["KeyD"],.6,{right:1}),yield*i.wait(1.6),le(i,"look","To look around, move the mouse. No mouse? Use the arrow keys.",[Ee.look]),yield*i.wait(1.6);const r=e.yaw;yield*i.turnTo(r+.9,0,1.9,["ArrowLeft"]),yield*i.wait(.2),yield*i.turnTo(r-.9,0,1.9,["ArrowRight"]),yield*i.wait(.2),yield*i.turnTo(r,.45,1.9,["ArrowUp"]),yield*i.turnTo(r,0,1.9,["ArrowDown"]),yield*i.wait(.3),i.down("MouseMove"),yield*i.turnTo(r+.6,.15,.9),yield*i.turnTo(r-.5,0,.9),yield*i.turnTo(r,0,.9),i.up("MouseMove"),yield*i.wait(1),le(i,"jump","Press Space to jump.",[Ee.jump]),yield*i.wait(1),yield*i.hold(["Space"],.2,{jump:!0}),yield*i.wait(.9),yield*i.hold(["Space"],.2,{jump:!0}),yield*i.wait(1.8),le(i,"aim","The cross in the middle of the screen is your aim. It picks the block you work on. Click the game once to use the mouse. Press Esc to let go of it.",[Ee.mouseOn,Ee.mouseOff]),yield*i.walkTo(n.x+3.3,n.z+.5),yield*i.lookAt(n.x+.5,n.y+1.5,n.z+.5,1.6),i.down("MouseLeft"),yield*i.wait(.4),i.up("MouseLeft"),yield*i.wait(3),le(i,"belt","Down the left edge is your tool belt. It holds the blocks you carry. Press a number, 1 to 8, to choose a square.",[Ee.slot],{belt:!0}),yield*i.wait(1.4),yield*i.tap("Digit2",.35),t.inventory.select(1),yield*i.wait(1.8),yield*i.tap("KeyE",.3),t.inventory.select(2),yield*i.wait(1),yield*i.tap("KeyQ",.3),t.inventory.select(1),yield*i.wait(1.6),le(i,"break","Hold F, or hold the left mouse button, to break the block under the cross.",[Ee.breakIt],{belt:!0}),yield*i.wait(.6);const o=t.inventory.count(E.BLUEROCK);t.breaking=!0,i.down("KeyF","MouseLeft"),yield*i.until(()=>t.inventory.count(E.BLUEROCK)>o,6),t.breaking=!1,i.up("KeyF","MouseLeft"),yield*i.wait(1.2),le(i,"pack","You broke a Bluerock, the blue-grey stone. It is now in your tool belt: the ringed square went up from 8 to 9.",[],{belt:!0}),t.beltMark={slot:t.inventory.slots.findIndex(v=>v?.id===E.BLUEROCK),from:o,to:o+1},yield*i.wait(4),t.beltMark=null;const a=t.practice;le(i,"take","Point the cross at a loose Board, a flat wooden plank, and press R to pick it up. Holding F works too.",[Ee.pick],{belt:!0}),yield*i.walkTo(a.x,a.z-2.4,{tol:.3}),yield*i.lookAt(a.x,a.y,a.z,1.6),yield*i.wait(1),i.down("KeyR"),t.pickUpAimed(),yield*i.wait(.3),i.up("KeyR");const l=t.inventory.slots.findIndex(v=>v?.id===E.BOARD);t.beltMark={slot:l,from:0,to:1},yield*i.wait(3.8),t.beltMark=null,le(i,"place","Choose the Board square on the tool belt. Point the cross at a block and press G, or click the right mouse button. The block is placed there.",[Ee.place],{belt:!0}),yield*i.wait(.8),yield*i.tap(`Digit${l+1}`,.35),t.inventory.select(l),yield*i.lookAt(n.x+.5,n.y+1,n.z+.5,1.4),yield*i.wait(.8);const c=t.inventory.count(E.BOARD);yield*i.tap("KeyG",.3),i.down("MouseRight"),t.placeSelected(),yield*i.wait(.3),i.up("MouseRight"),yield*i.until(()=>t.inventory.count(E.BOARD)<c,2),yield*i.wait(3);const h=n.x+3,d=n.z-2,u=t.world.groundPlane(h,d,100);le(i,"support","Choose Loam, the brown earth, on the tool belt. A block can stand on the ground as a support. Point at the ground and press G.",[Ee.place],{belt:!0}),yield*i.tap("Digit1",.35),t.inventory.select(0),yield*i.walkTo(h+.5,d+3.2,{tol:.6}),yield*i.lookAt(h+.5,u,d+.5,1.5),yield*i.wait(.8),yield*i.tap("KeyG",.3),t.placeSelected(),yield*i.wait(2.6),le(i,"roof","Put a block on top of the support. A roof is any solid block over your head. It keeps the cold sky off you.",[Ee.place],{belt:!0}),yield*i.lookAt(h+.5,u+1,d+.5,1.5),yield*i.wait(.8),yield*i.tap("KeyG",.3),t.placeSelected(),yield*i.wait(2.8),le(i,"cover","Before you place a roof or a hearth, the game shows what it would do. The Covered sign says when your spot is warm, dry and under a roof.",[],{}),yield*i.lookAt(h+.5,u+2.5,d+.5,.8);const p={x:h,y:u+2,z:d};t.cover={text:"This roof would make your spot Covered",ok:!0,cell:p},yield*i.wait(3.2),t.cover={text:"Not covered: no roof above you",ok:!1,cell:p},yield*i.wait(2.8),t.cover=null,le(i,"bench","Press C to open the workbench. Three Bluerock and a Stalk, the maroon log, make a Hearth. A Hearth gives warmth and light.",[Ee.bench],{belt:!0}),yield*i.tap("KeyC",.4),t.craft={grid:[0,0,0,0],result:null,msg:"Click a block in your pack to add it to the row."},yield*i.wait(1.6),t.craft={grid:[E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK],result:{id:E.HEARTH,count:1},msg:"Three Bluerock and a Stalk make a Hearth."},yield*i.wait(2.4);const g=ec(t.inventory,[E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK]);t.craft={grid:[E.BLUEROCK,E.BLUEROCK,E.BLUEROCK,E.STALK],result:{id:E.HEARTH,count:1},msg:g?`Made a ${Jt[g.out].name}. You now carry ${t.inventory.count(E.HEARTH)}.`:"Not enough materials."},yield*i.wait(3),yield*i.tap("KeyC",.4),t.craft=null,yield*i.wait(1),le(i,"ladder","To climb a ladder, walk into it and hold Space. Space also jumps. To go back down, hold X.",[Ee.climbUp,Ee.climbDown]),yield*i.walkTo(s.x-3,s.z+.5,{tol:.3}),yield*i.turnTo(-Math.PI/2,.2,2.4),yield*i.wait(2),yield*i.walkTo(s.x+.5,s.z+.5,{tol:.15}),yield*i.turnTo(-Math.PI/2,.15,2.4),yield*i.wait(.3),t.input.forward=0,i.down("Space"),t.input.jump=!0,yield*i.turnTo(Math.PI/2,-.2,1.5),yield*i.wait(.9),t.input.jump=!1,i.up("Space"),yield*i.wait(1),i.down("KeyX"),t.input.descend=!0,yield*i.until(()=>e.y<=s.y+.05,6),t.input.descend=!1,i.up("KeyX"),yield*i.wait(1.2),le(i,"save","The game saves by itself. You never have to press a save button.",[],{}),t.savedFlash=3,yield*i.wait(3.4),le(i,"summary","Here are all the controls on one screen.",[],{summary:!0}),yield*i.wait(8)}function*cx(i){const t=i.stage,e=t.world.terrain.features.hoist,n=t.hoist,s=[...n.docks.values()][0];i.say({id:"ch2-card",chapter:2,text:"",hints:[],card:{title:"Chapter 2: The hoist",sub:"About 60 seconds. This part is optional. It shows how one machine works.",tag:"Optional"}}),i.eyes(),yield*i.wait(3.2);const r=[e.rail.x+.5,kt,e.rail.z+.5];i.stage.freeCam=i.camToward(e.rail.x+17,74,e.rail.z-16,r[0],44,r[2]),le(i,"quarry","This is the quarry. The tall pole is a guide rail. A tray rides it up and down, carrying panels. Panels are for building: they glow at night.",[]),yield*i.wait(1),yield*i.fly([e.rail.x+11,66,e.rail.z-12],[r[0],40,r[2]],3.2),le(i,"shaft","Under the quarry is a deep shaft. A ladder on the wall goes down to the machines.",[]),yield*i.fly([e.tray.x+5.5,34,e.tray.z+6.5],[e.tray.x+.5,14,e.tray.z+.5],2.2),yield*i.fly([e.tray.x+5.5,12,e.tray.z+6.5],[e.tray.x+.5,6,e.tray.z-1.5],2.6),i.eyes(),yield*i.wait(.2);const o=ju(e);le(i,"press","At the bottom stands the press. Look at the Press button on the wall and press R. The press needs a few seconds to make a panel.",[Ee.use]),yield*i.faceButton(o),yield*i.wait(.9),t.timeScale=1,i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),yield*i.until(()=>n.staged>0,8),yield*i.face(e.tray.x,e.homePlane,e.tray.z,1.8),le(i,"panel","A finished panel waits on the tray, ready to be sent.",[]),yield*i.wait(2.4);const a=Yu(e);le(i,"mount","Far above, a receiving dock stands beside the rail. Press Mount to fix it on. Mounting takes about eight seconds, so it is sped up here.",[Ee.use]),t.timeScale=4,yield*i.faceButton(a),yield*i.wait(.6),i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),yield*i.fly([e.tray.x+6,kt-6,e.tray.z+7],[s.x+1.5,s.plane,s.z+.5],1.6),yield*i.until(()=>s.mounted,8),yield*i.wait(.8),t.timeScale=1,i.eyes();const l=bo(e,0);le(i,"wall","This is the control wall. Each button sends the tray to a stop. The rail has printed numbers at three places, and this tour only presses those.",[]),yield*i.faceButton({x:l.x,y:l.y+1,z:l.z+1},1.6),yield*i.wait(5),le(i,"stop","Look at the button marked 0 and press R. It lights up. That sets where the tray will stop.",[Ee.use]),yield*i.faceButton(l),yield*i.wait(.7),i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),yield*i.wait(1.4);const c=Ku(e);le(i,"dispatch","Now look at the Dispatch button and press R. The tray rises.",[Ee.use]),yield*i.faceButton(c),yield*i.wait(.6),t.timeScale=4,i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR");const h=()=>{const g=n.plane;t.freeCam=i.camToward(e.tray.x+6,g+3,e.tray.z-7,e.tray.x+.5,g+1,e.tray.z+.5)};let d=0;for(;n.state==="outbound"&&d++<4e3;)h(),yield;le(i,"arrive","The tray stopped level with the dock and unloaded its panel onto the rack. The tray then goes back down by itself.",[]),t.timeScale=1,yield*i.fly([e.tray.x+5.4,kt+3.2,e.tray.z-5.4],[e.tray.x+2.3,kt+.8,e.tray.z-.3],1),yield*i.wait(3.4),t.timeScale=6,yield*i.until(()=>n.state==="home",20),i.eyes(),le(i,"again","Make another panel, then try a different stop. This time the tray goes somewhere else.",[Ee.use]),yield*i.faceButton(o),yield*i.wait(.6),i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),yield*i.until(()=>n.staged>0,8);const u=bo(e,5);for(yield*i.faceButton(u),yield*i.wait(.5),i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),yield*i.wait(.8),yield*i.faceButton(c),yield*i.wait(.4),i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),d=0;n.state==="outbound"&&d++<4e3;)h(),yield;t.timeScale=1,le(i,"miss","The tray went to the stop you chose, which is not where the dock is. It holds there with its panel. Nothing is lost.",[]),yield*i.wait(3.8),i.eyes();const p=$u(e);for(le(i,"return","Press the Return button to bring the tray back down. Then you can try again.",[Ee.use]),yield*i.faceButton(p),yield*i.wait(.7),t.timeScale=6,i.down("KeyR"),t.useAimed(),yield*i.wait(.3),i.up("KeyR"),d=0;n.state==="returning"&&d++<4e3;)t.freeCam=i.camToward(e.tray.x+6,n.plane+3,e.tray.z-7,e.tray.x+.5,n.plane+1,e.tray.z+.5),yield;t.timeScale=1,i.eyes(),le(i,"end2","That is the hoist. It is one machine you can use when you build. You decide what to do with it.",[]),yield*i.wait(3.6)}const hx={1:["walk","look","jump","aim","belt","break","pack","take","place","support","roof","cover","bench","ladder","save","summary"],2:["quarry","shaft","press","panel","mount","wall","stop","dispatch","arrive","again","miss","return","end2"]},ux=[{chapter:1,title:"Moving and building",optional:!1,script:lx},{chapter:2,title:"The hoist",optional:!0,script:cx}],dx=[{caps:[xd,Md,Sd,wd],text:"Walk"},{caps:[To],text:"Jump"},{caps:[bd],text:"Run"},{caps:Cd,text:"Look around",mouse:"or move the mouse"},{caps:[Rl],text:"Break a block (hold)",mouse:"or hold the left mouse button"},{caps:[Ed],text:"Place a block",mouse:"or click the right mouse button"},{caps:[fe("1","Digit1"),fe("…","Digit0"),fe("8","Digit8")],text:"Choose a square on the tool belt",mouse:"or Q and E, or the wheel"},{caps:[Td],text:"Workbench"},{caps:[Cl],text:"Pick up a board, press a button, use a machine"},{caps:[fe("V","KeyV")],text:"Set a Board down"},{caps:[To,Ad],text:"Climb a ladder up and down"},{caps:[Rd],text:"Menu (it saves your world)"}];function Pl(i){return P("span",{class:"tcap"+(i.wide?" wide":""),"data-code":i.code},i.label)}function fx(i){const t={left:"MouseLeft",right:"MouseRight",move:"MouseMove",wheel:"MouseWheel"};return P("span",{class:"tmouse "+i,"data-code":t[i],"aria-hidden":"true"},P("i",{class:"l"}),P("i",{class:"r"}),P("i",{class:"w"}),i==="move"?P("b",{},"↔"):null)}function px(i){const t=i.alt?.lead??"or",e=i.alt?P("span",{class:"talt"+(i.caps.length?"":" alone")},t?P("span",{class:"tor"},t):null,i.alt.mouse?fx(i.alt.mouse):null,...(i.alt.caps??[]).map(Pl),i.alt.text?P("span",{class:"ttext"},i.alt.text):null):null;return P("div",{class:"thint"},P("div",{class:"ttitle"},i.title),P("div",{class:"tcaps"},...i.caps.map(Pl),e))}class mx{constructor(t,e){this.d=t,this.act=e;const n=(r,o,a,l)=>{const c=P("button",{id:`tour-${r}`,type:"button",onclick:l},o,P("kbd",{},a));return this.btns[r]=c,c};this.bar.append(P("span",{id:"tour-bar-label"},"Tour keys"),n("pause","Pause","K",e.pause),n("next","Next chapter","N",e.next),n("replay","Replay","B",e.replay),n("skip","Skip","Backspace",e.skip));const s=P("button",{id:"tour-skipbig",type:"button",onclick:e.skip},"Skip the tour",P("kbd",{},"Backspace"));this.root.append(this.top,this.cross,this.badge,this.saved,this.belt,this.coverEl,this.craftCard,this.fullCard,this.bottom,this.bar,s),window.addEventListener("keydown",this.onKey,!0)}root=P("div",{id:"tour",role:"region","aria-label":"How to play"});top=P("div",{id:"tour-caption","aria-live":"polite"});bottom=P("div",{id:"tour-bottom"});bar=P("div",{id:"tour-bar"});fullCard=P("div",{id:"tour-card"});craftCard=P("div",{id:"tour-craft"});belt=P("div",{id:"tour-belt"});coverEl=P("div",{id:"tour-cover"});lastCover="";cross=P("div",{id:"tour-cross","aria-hidden":"true"});badge=P("div",{id:"tour-badge"});saved=P("div",{id:"tour-saved"},"Saved");lastKeys="";lastBelt="";lastCraft="";lastStep=null;lastPhase="";lastCross=!0;btns={};onKey=t=>{if(!this.d.active||t.target?.matches?.("input, textarea, select")||t.ctrlKey||t.metaKey||t.altKey)return;const n=t.code,s=n===Qr.pause?this.act.pause:n===Qr.next?this.act.next:n===Qr.replay?this.act.replay:n===Qr.skip?this.act.skip:null;s&&(t.preventDefault(),t.stopPropagation(),t.repeat||s())};dispose(){window.removeEventListener("keydown",this.onKey,!0),this.root.remove()}update(){const t=this.d,e=t.stage;if((t.current!==this.lastStep||t.phase!==this.lastPhase)&&this.rebuild(),!e)return;const n=!e.freeCam&&t.phase!=="between"&&t.phase!=="done"&&!(t.current?.card||t.current?.summary);n!==this.lastCross&&(this.lastCross=n,this.cross.hidden=!n);const s=[...e.keysDown].sort().join(",");if(s!==this.lastKeys){this.lastKeys=s;for(const h of this.root.querySelectorAll("[data-code]"))h.classList.toggle("down",e.keysDown.has(h.dataset.code))}const r=e.inventory,o=e.beltMark,a=`${r.selected}|${r.slots.slice(0,8).map(h=>h?`${h.id}:${h.count}`:"-").join(",")}|${o?`${o.slot}:${o.from}:${o.to}`:""}`;if(a!==this.lastBelt){this.lastBelt=a;const h=_d(r);o&&h[o.slot]&&(h[o.slot].classList.add("ring"),h[o.slot].append(P("span",{class:"bdelta"},`${o.from} → ${o.to}`))),this.belt.replaceChildren(...h)}const l=e.craft?JSON.stringify(e.craft):"";if(l!==this.lastCraft){this.lastCraft=l;const h=e.craft;this.craftCard.hidden=!h,h&&this.craftCard.replaceChildren(P("h3",{},"Workbench"),P("div",{class:"recipe-row small"},P("div",{class:"rslots"},...h.grid.map(d=>P("div",{class:"rslot"+(d?" full":"")},d?Ts(d):null))),P("span",{class:"rarrow"}),P("div",{class:"rresult"},h.result?Ts(h.result.id):null,h.result?P("span",{class:"n"},`×${h.result.count}`):null)),P("p",{},h.msg))}const c=e.cover?`${e.cover.ok}|${e.cover.text}`:"";c!==this.lastCover&&(this.lastCover=c,this.coverEl.hidden=!e.cover,this.coverEl.className=e.cover?e.cover.ok?"yes":"no":"",this.coverEl.textContent=e.cover?.text??""),this.saved.classList.toggle("on",e.savedFlash>0),this.syncBadge()}rebuild(){const t=this.d,e=t.current;this.lastStep=e,this.lastPhase=t.phase,this.lastKeys="\0",this.lastBelt="\0",this.lastCraft="\0",this.lastCross=!this.cross.hidden;const n=e?.card??null,s=e?.summary??!1;if(this.fullCard.hidden=!n&&!s,this.top.hidden=!e||!!n||s||!e.text,this.bottom.hidden=!e||!!n||s,this.belt.hidden=!e||!e.belt,this.badge.hidden=!!n,this.fullCard.replaceChildren(),n){const r=t.phase==="between",o=t.phase==="done";this.fullCard.append(P("div",{class:"panel"},n.tag?P("div",{class:"chip"},n.tag):null,P("h1",{},n.title),n.sub?P("p",{class:"big"},n.sub):null,r?P("div",{class:"row"},P("button",{class:"primary","data-autofocus":!0,onclick:this.act.next},"Watch chapter 2"),P("button",{onclick:this.act.skip},"Finish")):o?P("div",{class:"row"},P("button",{class:"primary","data-autofocus":!0,onclick:this.act.skip},"Close"),P("button",{onclick:this.act.replay},"Watch chapter 2 again")):null)),(r||o)&&queueMicrotask(()=>this.fullCard.querySelector("[data-autofocus]")?.focus())}else s&&this.fullCard.append(P("div",{class:"panel wide"},P("h1",{},"Controls"),...dx.map(r=>P("div",{class:"srow"},P("div",{class:"tcaps"},...r.caps.map(Pl)),P("div",{class:"stext"},r.text,r.mouse?P("span",{},` (${r.mouse})`):null))),P("p",{class:"sumnote"},"Watch this tour again any time: choose How to play on the title screen or the pause menu.")));if(e&&e.text){const r=hx[e.chapter],o=r.indexOf(e.id)+1;this.top.replaceChildren(P("div",{class:"tmeta"},`Chapter ${e.chapter}${e.chapter===2?" (optional)":""} · step ${o} of ${r.length}`),P("div",{class:"tsay"},e.text))}else this.top.replaceChildren();this.badge.textContent=t.speedBadge?"Sped up":"",this.bottom.replaceChildren(),e&&this.bottom.append(P("div",{class:"thints"},...e.hints.map(px))),this.btns.pause.firstChild.textContent=t.phase==="paused"?"Resume":"Pause",this.btns.pause.disabled=t.phase==="between"||t.phase==="done",this.btns.next.disabled=t.phase==="done",this.btns.next.firstChild.textContent=t.chapter<t.chapterCount?"Next chapter":"Finish tour",this.bar.classList.toggle("paused",t.phase==="paused"),this.top.classList.toggle("paused",t.phase==="paused"),t.phase==="paused"&&this.top.append(P("div",{class:"tpaused"},"Paused. Press K or the Resume button to go on."))}syncBadge(){const t=this.d.speedBadge?"Sped up":"";this.badge.textContent!==t&&(this.badge.textContent=t)}}const gx=128,vx=1024;function jh(i,t){const e=sc(),n=document.createElement("canvas");n.width=n.height=he;const s=n.getContext("2d"),r=s.createImageData(he,he),o=i%bn*he,a=Math.floor(i/bn)*he;for(let l=0;l<he;l++)for(let c=0;c<he;c++)for(let h=0;h<4;h++)r.data[(l*he+c)*4+h]=e[((a+l)*pi+o+c)*4+h];if(t!==void 0)for(let l=3;l<r.data.length;l+=4)r.data[l]=t;return s.putImageData(r,0,0),n}class Pd{group=new an;water;waterTex;waterMat;boards;boardCap=gx;boardMat;wet;sheen;wetCap=vx;boardGeo=new ce(Oi,Te,Fi);wetGeo=new ce(1.01,1.01,1.01);wetMat;sheenMat;signMats=[];outline;glow;dummy=new Oe;color=new Zt;constructor(t){const e=t.terrain.features.tide.rect,n=e?e.x1-e.x0:1,s=e?e.z1-e.z0:1;this.waterTex=new Xn(jh(Jt[E.WATER].tiles.top,255)),this.waterTex.magFilter=Ae,this.waterTex.minFilter=Ae,this.waterTex.wrapS=this.waterTex.wrapT=sr,this.waterTex.repeat.set(n,s),this.waterTex.colorSpace=Fe,this.waterMat=new ie({map:this.waterTex,transparent:!0,opacity:.62,depthWrite:!1,side:vn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.water=new Ht(new di(n,s),this.waterMat),this.water.rotation.x=-Math.PI/2,this.water.renderOrder=3,e&&this.water.position.set((e.x0+e.x1)/2,t.tideLevel,(e.z0+e.z1)/2),this.water.visible=!!e,this.group.add(this.water);const r=new Xn(jh(Jt[E.BOARD].tiles.side));r.magFilter=Ae,r.minFilter=Ae,r.colorSpace=Fe,this.boardMat=new ie({map:r}),this.makeBoards(),this.wetMat=new ie({color:16777215,transparent:!0,blending:Ua,premultipliedAlpha:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.sheenMat=new ie({color:16777215,transparent:!0,blending:Ui,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),this.makeWet(),this.outline=new Po(new ko(new ce(Oi+.12,Te+.12,Fi+.12)),new ur({color:16777215,depthTest:!1})),this.outline.renderOrder=9,this.glow=new Ht(new ce(Oi+.16,Te+.16,Fi+.16),new ie({color:16769126,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1})),this.glow.renderOrder=8,this.glow.visible=!1,this.group.add(this.glow),this.outline.visible=!1,this.group.add(this.outline)}makeBoards(){this.boards&&(this.group.remove(this.boards),this.boards.dispose()),this.boards=new zi(this.boardGeo,this.boardMat,this.boardCap),this.boards.frustumCulled=!1,this.boards.count=0,this.boards.renderOrder=2,this.group.add(this.boards)}makeWet(){for(const t of[this.wet,this.sheen])t&&(this.group.remove(t),t.dispose());this.wet=new zi(this.wetGeo,this.wetMat,this.wetCap),this.sheen=new zi(this.wetGeo,this.sheenMat,this.wetCap);for(const t of[this.wet,this.sheen])t.frustumCulled=!1,t.count=0,t.instanceColor=new Sl(new Float32Array(this.wetCap*3),3),this.group.add(t);this.wet.renderOrder=4,this.sheen.renderOrder=5}addGauge(t){const e=t.terrain.features.gauge,n=(a,l,c)=>{const h=document.createElement("canvas");h.width=256,h.height=128;const d=h.getContext("2d");d.fillStyle="#14161f",d.fillRect(0,0,256,128),d.fillStyle=l,d.fillRect(8,8,240,112),a&&(d.fillStyle=c,d.font="bold 104px system-ui, sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText(a,128,70));const u=new Xn(h);u.colorSpace=Fe;const p=new ie({map:u});return this.signMats.push(p),p},s=[[.56,0,Math.PI/2],[-.56,0,-Math.PI/2]],r=[[-5,"−5","#e8a21c","#2a1a02"],[0,"0","#dfe2ea","#1c2034"],[5,"+5","#2f6fe0","#ffffff"]];for(const[a,l,c,h]of r){const d=n(l,c,h);for(const[u,p,g]of s){const v=new Ht(new di(5.2,2.6),d);v.position.set(e.x+.5+u,kt+4*a+.9,e.z+.5+p),v.rotation.y=g,this.group.add(v)}}const o=n("","#2b3350","#fff");for(let a=-20;a<=20;a+=4)if(!(a===-20||a===0||a===20))for(const[l,c,h]of s){const d=new Ht(new di(2.6,.5),o);d.position.set(e.x+.5+l,kt+a+.5,e.z+.5+c),d.rotation.y=h,this.group.add(d)}}update(t,e,n,s,r,o){if(t.terrain.features.tide.rect){this.water.position.y=t.tideLevel,this.waterTex.offset.set(o*.01%1,o*.006%1);const d=u=>Math.max(u,.55);this.waterMat.color.setRGB(d(s[0]),d(s[1]),d(s[2]))}const l=d=>Math.max(d,.5);if(this.boardMat.color.setRGB(l(s[0]),l(s[1]),l(s[2])),e.length>this.boardCap){for(;e.length>this.boardCap;)this.boardCap*=2;this.makeBoards()}const c=e.length;for(let d=0;d<c;d++){const u=e[d];this.dummy.position.set(u.x,u.y,u.z),this.dummy.rotation.set(0,u.yaw,u.state==="floating"?.05*Math.sin(o*1.3+u.phase*6.28):0),this.dummy.updateMatrix(),this.boards.setMatrixAt(d,this.dummy.matrix)}if(this.boards.count=c,this.boards.instanceMatrix.needsUpdate=!0,n.length>this.wetCap){for(;n.length>this.wetCap;)this.wetCap*=2;this.makeWet()}const h=n.length;for(let d=0;d<h;d++){const u=n[d];this.dummy.position.set(u.x+.5,u.y+.5,u.z+.5),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.wet.setMatrixAt(d,this.dummy.matrix),this.color.setRGB(1-.34*u.wet,1-.3*u.wet,1-.22*u.wet),this.wet.setColorAt(d,this.color),this.sheen.setMatrixAt(d,this.dummy.matrix),this.color.setRGB(.015*u.wet,.035*u.wet,.06*u.wet),this.sheen.setColorAt(d,this.color)}this.wet.count=h,this.sheen.count=h,this.wet.instanceMatrix.needsUpdate=!0,this.sheen.instanceMatrix.needsUpdate=!0,this.wet.instanceColor&&(this.wet.instanceColor.needsUpdate=!0),this.sheen.instanceColor&&(this.sheen.instanceColor.needsUpdate=!0),r?(this.outline.visible=!0,this.outline.position.set(r.x,r.y,r.z),this.outline.rotation.y=r.yaw,this.glow.visible=!0,this.glow.position.copy(this.outline.position),this.glow.rotation.y=r.yaw):(this.outline.visible=!1,this.glow.visible=!1)}dispose(){this.water.geometry.dispose(),this.waterMat.dispose(),this.waterTex.dispose(),this.boardMat.map?.dispose(),this.boardMat.dispose(),this.boardGeo.dispose(),this.wetGeo.dispose(),this.wetMat.dispose(),this.sheenMat.dispose();for(const t of this.signMats)t.map?.dispose(),t.dispose();this.outline.geometry.dispose(),this.glow.geometry.dispose(),this.glow.material.dispose()}}class _x{constructor(t,e){this.renderer=t,this.stage=e,this.camera.rotation.order="YXZ",this.chunks=new gd(e.world,this.atlas),this.tideView=new Pd(e.world),this.scene.add(this.sky.mesh,this.chunks.group,this.effects.group,this.hoistView.group,this.tideView.group),this.ghost.visible=this.ghostEdges.visible=!1,this.ghost.renderOrder=6,this.ghostEdges.renderOrder=9,this.scene.add(this.ghost,this.ghostEdges);const n=this.eye();this.chunks.preload(n.x,n.z,3)}scene=new Du;camera=new nn(72,16/9,.1,400);sky=new rd;chunks;effects=new cr;hoistView=new yd;atlas=md();tideView;ghostMat=new ie({color:6742208,transparent:!0,opacity:.4,depthWrite:!1});edgeMat=new ur({color:14090226,transparent:!0,opacity:.95});ghostGeo=new ce(1.02,1.02,1.02);edgeGeo=new ko(this.ghostGeo);ghost=new Ht(this.ghostGeo,this.ghostMat);ghostEdges=new Po(this.edgeGeo,this.edgeMat);eye(){const t=this.stage;if(t.freeCam)return t.freeCam;const e=t.player;return{x:e.x,y:e.y+1.62+e.stepPop,z:e.z,yaw:e.yaw,pitch:e.pitch}}settle(){const t=this.eye();for(let e=0;e<400&&!this.chunks.update(t.x,t.z,1e3);e++);this.chunks.flush()}render(t){const e=this.stage,n=this.eye(),s=this.renderer.domElement.width,r=this.renderer.domElement.height;this.camera.aspect=s/Math.max(1,r),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.camera.position.set(n.x,n.y,n.z),this.camera.rotation.set(n.pitch,n.yaw,0),this.camera.updateMatrixWorld(!0);const o=sd(e.phase);this.sky.update(o,this.camera.position),this.chunks.setSky(o.horizon,o.light),this.chunks.update(n.x,n.z,6);for(const l of e.hoistEvents.splice(0))l.type==="arrived"&&l.outcome==="delivered"&&l.dock&&this.hoistView.unload(l.dock,l.staged,l.plane,e.hoist.tray,e.hoist.clock);this.tideView.update(e.world,e.loose.boards,[],o.light,null,e.time);const a=e.cover?.cell??null;this.ghost.visible=this.ghostEdges.visible=!!a,a&&e.cover&&(this.ghost.position.set(a.x+.5,a.y+.5,a.z+.5),this.ghostEdges.position.copy(this.ghost.position),this.ghostMat.color.setHex(e.cover.ok?6742208:16760928),this.edgeMat.color.setHex(e.cover.ok?14090226:16771512),this.ghostMat.opacity=.34+.1*Math.sin(e.time*5)),this.hoistView.update(e.hoist,o.light,e.world.terrain.features.hoist,()=>0);for(const l of e.bursts.splice(0))this.effects.burst(l.x,l.y,l.z,l.id);this.effects.target(e.chapter===1&&e.hit&&e.hit.dist>.05&&!e.freeCam?e.hit:null,e.crackStage()),this.effects.update(t),this.renderer.render(this.scene,this.camera)}dispose(){this.ghostGeo.dispose(),this.edgeGeo.dispose(),this.ghostMat.dispose(),this.edgeMat.dispose(),this.tideView.dispose(),this.chunks.disposeAll(),this.atlas.dispose(),this.scene.clear()}}class rc{constructor(t,e){this.renderer=t,this.onExit=e,this.director=new sx(ux,{onStage:(n,s)=>this.swapStage(n,s),onChange:()=>this.overlay?.update(),onExit:()=>{this.overlay?.dispose(),this.overlay=null,this.onExit()}})}director;view=null;overlay=null;manual=!1;static MAX_DT=.25;start(t=1){const e=new mx(this.director,{pause:()=>this.director.togglePause(),next:()=>this.director.nextChapter(),replay:()=>this.director.replay(),skip:()=>this.director.skip()});this.overlay=e,document.body.append(e.root),this.director.start(t)}swapStage(t,e){e&&this.view&&this.view.stage===e&&(this.view.dispose(),this.view=null),t&&(this.view=new _x(this.renderer,t))}get active(){return this.director.active}frame(t){const e=Math.min(rc.MAX_DT,Math.max(0,t));this.manual||this.director.update(e),this.overlay?.update(),this.view?.render(e)}advance(t,e=1/30){let n=0;for(;n<t&&this.director.active;)this.director.update(e),n+=e;this.overlay?.update()}renderNow(){this.overlay?.update(),this.view?.settle(),this.view?.render(0)}settle(){this.view?.settle()}}const Zs=8,to=40,eo=4,yx=3,Zh=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function xx(i){const n=document.createElement("canvas");n.width=64,n.height=96;const s=n.getContext("2d"),r=[-5,3,6,-2][i%4],o=[2,-3,1,4][i%4];s.shadowColor="rgba(255,120,20,0.9)",s.shadowBlur=10;const a=(c,h)=>{s.beginPath(),s.moveTo(64/2-20+c,88),s.bezierCurveTo(64/2-26+c,96*.55,64/2-10+r*.4,96*.38,64/2+r+o*.3,h),s.bezierCurveTo(64/2+10+r*.4,96*.38,64/2+26-c,96*.55,64/2+20-c,88),s.quadraticCurveTo(64/2,98,64/2-20+c,88),s.closePath()};let l=s.createLinearGradient(0,96,0,6);return l.addColorStop(0,"rgba(255,200,80,0.95)"),l.addColorStop(.5,"rgba(255,120,30,0.85)"),l.addColorStop(1,"rgba(210,50,12,0)"),s.fillStyle=l,a(0,8),s.fill(),s.shadowBlur=0,l=s.createLinearGradient(0,96,0,24),l.addColorStop(0,"rgba(255,250,200,0.95)"),l.addColorStop(.6,"rgba(255,210,90,0.8)"),l.addColorStop(1,"rgba(255,170,40,0)"),s.fillStyle=l,a(9,30+o),s.fill(),n}function Jh(i){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(${i},0.9)`),n.addColorStop(.35,`rgba(${i},0.35)`),n.addColorStop(1,`rgba(${i},0)`),e.fillStyle=n,e.fillRect(0,0,64,64),t}function Mx(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");t.translate(32,32);const e=t.createRadialGradient(0,0,0,0,0,30);return e.addColorStop(0,"rgba(255,255,235,1)"),e.addColorStop(.25,"rgba(255,244,190,0.55)"),e.addColorStop(1,"rgba(255,230,150,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(0,-30),t.quadraticCurveTo(2,-2,30,0),t.quadraticCurveTo(2,2,0,30),t.quadraticCurveTo(-2,2,-30,0),t.quadraticCurveTo(-2,-2,0,-30),t.fill(),i}function Sx(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d");for(let e=0;e<8;e++){const n=92+e*37%5*7;t.fillStyle=`rgb(${n},${n-4},${n+26})`,t.fillRect(e*8,0,8,64),t.fillStyle="rgba(24,20,40,0.55)",t.fillRect(e*8,0,1,64)}return t.fillStyle="rgba(20,16,30,0.35)",t.fillRect(0,52,64,12),t.fillStyle="rgba(255,150,60,0.30)",t.fillRect(0,0,64,7),i}class wx{group=new an;stack;stackMat;collar;collarMat;flameMats=[];flameTex=[];hearthlings=[];halos=[];glowTex;emberTex;glintTex;stackTex;dummy=new Oe;bundles=new Map;ghost;ghostEdges;ring;ringMat;ghostMat;edgeMat;cloth=new ie({color:3116938});cord=new ie({color:15392692});pole=new ie({color:4866648});pennant=new ie({color:16051400,side:vn});bodyGeo=new ce(.62,.42,.5);bandGeo=new ce(.66,.08,.54);knotGeo=new or(.13,8,6);poleGeo=new ce(.05,3.2,.05);flagGeo=new Ye;world=null;shells=null;shellSpots=[];glints=[];pocketAt=-99;constructor(){this.stackTex=new Xn(Sx()),this.stackTex.wrapS=sr,this.stackTex.colorSpace=Fe,this.stackMat=new ie({map:this.stackTex,transparent:!0}),this.stack=new zi(new yo(.24,.4,1.1,8),this.stackMat,Zs),this.stack.frustumCulled=!1,this.stack.count=0,this.group.add(this.stack),this.collarMat=new ie({color:5917266,transparent:!0}),this.collar=new zi(new yo(.34,.25,.16,8),this.collarMat,Zs),this.collar.frustumCulled=!1,this.collar.count=0,this.group.add(this.collar);for(let e=0;e<eo;e++){const n=new Xn(xx(e));n.colorSpace=Fe,this.flameTex.push(n),this.flameMats.push(new tr({map:n,transparent:!0,blending:Ui,depthWrite:!1,opacity:1}))}this.glowTex=new Xn(Jh("255,170,70")),this.emberTex=new Xn(Jh("255,200,120")),this.glintTex=new Xn(Mx());for(let e=0;e<Zs;e++){const n=[];for(let r=0;r<2;r++){const o=new Fr(this.flameMats[0].clone());o.visible=!1,o.renderOrder=8,n.push(o),this.group.add(o)}const s=[];for(let r=0;r<yx;r++){const o=new Fr(new tr({map:this.emberTex,transparent:!0,blending:Ui,depthWrite:!1,opacity:.8}));o.visible=!1,o.renderOrder=8,s.push(o),this.group.add(o)}this.hearthlings.push({flames:n,embers:s})}for(let e=0;e<to;e++){const n=new Fr(new tr({map:this.glowTex,transparent:!0,blending:Ui,depthWrite:!1,opacity:.5}));n.visible=!1,n.renderOrder=7,this.halos.push(n),this.group.add(n)}this.flagGeo.setAttribute("position",new ze(new Float32Array([0,3.2,0,.7,2.95,0,0,2.7,0]),3)),this.ghostMat=new ie({color:6742208,transparent:!0,opacity:.4,depthWrite:!1});const t=new ce(1.02,1.02,1.02);this.ghost=new Ht(t,this.ghostMat),this.ghost.visible=!1,this.ghost.renderOrder=6,this.group.add(this.ghost),this.edgeMat=new ur({color:16777215,transparent:!0,opacity:.95}),this.ghostEdges=new Po(new ko(t),this.edgeMat),this.ghostEdges.visible=!1,this.ghostEdges.renderOrder=9,this.group.add(this.ghostEdges),this.ringMat=new ie({color:6742208,transparent:!0,opacity:.55,side:vn,depthWrite:!1}),this.ring=new Ht(new Hl(Pt.hearthReach-.18,Pt.hearthReach,48),this.ringMat),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,this.ring.renderOrder=6,this.group.add(this.ring)}attachWorld(t){this.world=t;const e=t.terrain.features.pocket;if(e.x1<e.x0)return;let n=1234567;const s=()=>(n=n*1103515245+12345&2147483647)/2147483647;for(let l=0;l<16;l++)this.shellSpots.push({x:e.x0+.3+s()*(e.x1-e.x0+.4),z:e.z0+.3+s()*(e.z1-e.z0+.4),yaw:s()*6.28,s:.8+s()*.6});const r=new or(.17,7,4);r.scale(1,.55,.8);const o=new ie({color:16777215});this.shells=new zi(r,o,this.shellSpots.length),this.shells.frustumCulled=!1;const a=[16773340,16173496,16771504,15324400];this.shellSpots.forEach((l,c)=>this.shells.setColorAt(c,new Zt(a[c%a.length]))),this.group.add(this.shells);for(let l=0;l<9;l++){const c=new Fr(new tr({map:this.glintTex,transparent:!0,blending:Ui,depthWrite:!1,opacity:.8}));c.renderOrder=8,this.group.add(c),this.glints.push({sp:c,x:e.x0+.4+s()*(e.x1-e.x0+.2),z:e.z0+.4+s()*(e.z1-e.z0+.2),lift:.25+s()*.9,ph:s()*6.28,size:1.5+s()*1})}this.refreshPocket()}refreshPocket(){const t=this.world;if(!t||!this.shells)return;const e=new ge,n=new Is;this.shellSpots.forEach((s,r)=>{const o=t.groundPlane(Math.floor(s.x),Math.floor(s.z),100),a=t.getBlock(Math.floor(s.x),o-1,Math.floor(s.z))===E.DUNE;n.setFromEuler(new Un(0,s.yaw,0)),e.compose(new N(s.x,o+.04,s.z),n,new N(a?s.s:0,a?s.s:0,a?s.s:0)),this.shells.setMatrixAt(r,e)}),this.shells.instanceMatrix.needsUpdate=!0;for(const s of this.glints){const r=t.groundPlane(Math.floor(s.x),Math.floor(s.z),100);s.sp.position.set(s.x,r+s.lift,s.z)}}makeBundle(){const t=new an,e=new Ht(this.bodyGeo,this.cloth);e.position.y=.25;const n=new Ht(this.bandGeo,this.cord);n.position.y=.27;const s=new Ht(this.knotGeo,this.cord);s.position.y=.52;const r=new Ht(this.poleGeo,this.pole);r.position.set(.28,1.6,0);const o=new Ht(this.flagGeo,this.pennant);return o.position.x=.28,t.add(e,n,s,r,o),t}update(t,e,n,s,r,o){const a=(m,f)=>(m-o.x)**2+(f-o.z)**2,l=[...e.hearths.values()].sort((m,f)=>a(m.x+.5,m.z+.5)-a(f.x+.5,f.z+.5)).slice(0,Zs),c=1-.5*s;this.stackMat.color.setRGB(c,c,c),this.collarMat.color.setRGB(.1*c,.08*c,.1*c);let h=0,d=0;for(let m=0;m<Zs;m++){const f=this.hearthlings[m],M=l[m],b=M?!this.world||this.world.getBlock(M.x,M.y+1,M.z)===E.AIR:!1;if(!M||!b){for(const A of f.flames)A.visible=!1;for(const A of f.embers)A.visible=!1;M&&d<to&&M.lit&&this.halo(d++,M.x+.5,M.y+.9,M.z+.5,2.2+2.6*s,.35+.35*s);continue}this.dummy.position.set(M.x+.5,M.y+1.55,M.z+.5),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.stack.setMatrixAt(h,this.dummy.matrix),this.dummy.position.set(M.x+.5,M.y+2.18,M.z+.5),this.dummy.updateMatrix(),this.collar.setMatrixAt(h++,this.dummy.matrix);const x=Math.hypot(M.x+.5-o.x,M.y+2.1-o.y,M.z+.5-o.z),L=Zh(.9,2.4,x);for(let A=0;A<f.flames.length;A++){const R=f.flames[A];if(R.visible=M.lit&&L>.01,!R.visible)continue;const k=Math.floor(t*9+A*2+M.x*3)%eo;R.material.map=this.flameTex[(k+eo)%eo];const S=.85+.15*Math.sin(t*13+A*2.1+M.z),y=A===0?1:.7;R.position.set(M.x+.5+(A?.06:-.04),M.y+2.35+.18*y,M.z+.5+(A?-.05:.03)),R.scale.set(.62*y*S,.95*y*(.9+.2*S),1),R.material.opacity=L*(A===0?.95:.7)}for(let A=0;A<f.embers.length;A++){const R=f.embers[A];if(R.visible=M.lit&&L>.01,!R.visible)continue;const k=(t*.55+A/f.embers.length+M.x*.13)%1;R.position.set(M.x+.5+.18*Math.sin(t*2+A*2+M.z),M.y+2.5+k*1.3,M.z+.5+.18*Math.cos(t*1.7+A*3));const S=.12*(1-k*.6);R.scale.set(S,S,1),R.material.opacity=L*(1-k)*.9}M.lit&&d<to&&this.halo(d++,M.x+.5,M.y+1.9,M.z+.5,2.2+.25*Math.sin(t*6+M.x)+2.6*s,.35+.35*s)}let u=99;for(let m=0;m<h;m++){const f=l[m];u=Math.min(u,Math.hypot(f.x+.5-o.x,f.y+1.55-o.y,f.z+.5-o.z))}const p=.28+.72*Zh(1.3,3.2,u);this.stackMat.opacity=p,this.collarMat.opacity=p,this.stack.count=h,this.stack.instanceMatrix.needsUpdate=!0,this.collar.count=h,this.collar.instanceMatrix.needsUpdate=!0;const g=e.lanternSpots().sort((m,f)=>a(m.x+.5,m.z+.5)-a(f.x+.5,f.z+.5));for(const m of g){if(d>=to)break;this.halo(d++,m.x+.5,m.y+.5,m.z+.5,1.6+2.2*s+.1*Math.sin(t*5+m.x),.3+.4*s)}for(let m=d;m<this.halos.length;m++)this.halos[m].visible=!1;if(this.shells){(t-this.pocketAt>1.5||t<this.pocketAt)&&(this.pocketAt=t,this.refreshPocket());for(const m of this.glints){const f=Math.max(0,Math.sin(t*2.3+m.ph))**3,M=m.size*(.35+.9*f);m.sp.scale.set(M,M,1),m.sp.material.opacity=(.25+.75*f)*(1-s),m.sp.visible=s<.5}}const v=new Set;for(const m of n){if(!m.items)continue;v.add(m.id);let f=this.bundles.get(m.id);f||(f=this.makeBundle(),this.bundles.set(m.id,f),this.group.add(f)),f.position.set(m.x,m.y-.06,m.z),f.rotation.y=m.yaw,f.rotation.z=m.state==="floating"?.06*Math.sin(t*1.3+m.phase*6.28):0}for(const[m,f]of this.bundles)v.has(m)||(this.group.remove(f),this.bundles.delete(m));r?(this.ghost.visible=!0,this.ghostEdges.visible=!0,this.ghost.position.set(r.cell.x+.5,r.cell.y+.5,r.cell.z+.5),this.ghostEdges.position.copy(this.ghost.position),this.ghostMat.color.setHex(r.ok?6742208:16760928),this.edgeMat.color.setHex(r.ok?14090226:16771512),this.ghostMat.opacity=.32+.1*Math.sin(t*5),r.ring?(this.ring.visible=!0,this.ring.position.set(r.ring.x,r.ring.y+.06,r.ring.z),this.ring.scale.setScalar(r.ring.r/Pt.hearthReach),this.ringMat.color.setHex(r.ok?6742208:16760928)):this.ring.visible=!1):(this.ghost.visible=!1,this.ghostEdges.visible=!1,this.ring.visible=!1)}halo(t,e,n,s,r,o){const a=this.halos[t];a.visible=!0,a.position.set(e,n,s),a.scale.set(r,r,1),a.material.opacity=o}dispose(){this.stack.geometry.dispose(),this.collar.geometry.dispose(),this.collarMat.dispose(),this.stackMat.dispose(),this.stackTex.dispose();for(const t of this.flameTex)t.dispose();for(const t of this.flameMats)t.dispose();for(const t of this.hearthlings){for(const e of t.flames)e.material.dispose();for(const e of t.embers)e.material.dispose()}for(const t of this.halos)t.material.dispose();for(const t of this.glints)t.sp.material.dispose();this.shells&&(this.shells.geometry.dispose(),this.shells.material.dispose()),this.glowTex.dispose(),this.emberTex.dispose(),this.glintTex.dispose(),this.ghost.geometry.dispose(),this.ghostMat.dispose(),this.ghostEdges.geometry.dispose(),this.edgeMat.dispose(),this.ring.geometry.dispose(),this.ringMat.dispose();for(const t of[this.bodyGeo,this.bandGeo,this.knotGeo,this.poleGeo,this.flagGeo])t.dispose();for(const t of[this.cloth,this.cord,this.pole,this.pennant])t.dispose()}}class bx{ctx=null;gain=null;filter=null;start(){if(!(this.ctx||typeof AudioContext>"u")&&navigator.userActivation?.hasBeenActive)try{const t=new AudioContext,e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);let r=0;for(let c=0;c<e;c++)r=(r+.02*(Math.random()*2-1))/1.02,s[c]=r*3.5;const o=t.createBufferSource();o.buffer=n,o.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=450;const l=t.createGain();l.gain.value=0,o.connect(a).connect(l).connect(t.destination),o.start(),this.ctx=t,this.gain=l,this.filter=a}catch{this.ctx=null}}update(t,e,n){if(!this.ctx||!this.gain||!this.filter)return;e&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const s=e?.04+.08*Math.max(0,Math.min(1,t)):0;this.gain.gain.setTargetAtTime(s,this.ctx.currentTime,.4),this.filter.frequency.setTargetAtTime(380+160*Math.sin(n*.35),this.ctx.currentTime,.5)}}const Ex=7,Qh="slice-3-survival-opening",tu=new Set(["collapse_start","collapse_wake","rest_end","hearth_doused","hearth_relit","hearth_placed","lantern_placed","bundle_recovered","shelter_state","tide_reached_pile","first_pile_touch","board_pickup","board_relocate","pile_board_used","pile_board_consumed","cycle_settled","driftwood_exposed","left_beach_area","after_cycle_summary"]),kd="plumbline.survival.v1";function eu(i){try{const t=JSON.parse(i?.getItem(kd)??"null")?.mode;return t==="gentle"||t==="off"?t:"normal"}catch{return"normal"}}const Tx=()=>{const i=new Uint8Array(6);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(i);else for(let t=0;t<i.length;t++)i[t]=Math.floor(Math.random()*256);return[...i].map(t=>t.toString(16).padStart(2,"0")).join("")};class Ax{canvas;storage;world;renderer;scene=new Du;camera;sky=new rd;effects=new cr;chunks;input;log;host;reader;ui;hoist;activity;plan=new Io;hoistView=new yd;carryView=Zy();busy=0;pressRemaining=0;panelOpenedAt=null;player;inventory;config;state="title";phase=El;scripted=null;scriptedBreak=!1;frozen=!1;frameCount=0;acc=0;last=0;breakTarget=null;breakProgress=0;hit=null;aim="";saveTimer=0;savedSig="";frameTimes=null;tour=null;tide;tideView;survival;survivalView=new wx;preview=null;previewText=null;workPulse=!1;actPulse=!1;waterAudio=new bx;targetBoard=null;boardHold=0;hintsShown=new Set;pausedAtS=null;pausedAtWall=0;saveSoon=!1;packFullToastAt=0;tourReturn="title";lastSaveOk;saveWarned=!1;playMs=0;constructor(t,e,n){this.canvas=t,this.storage=e,this.lastSaveOk=e!==null;const s=Ry(e),r=s?.seed??(Number.isSafeInteger(n)?n:Ex);this.world=new Uo(r),this.config=e_(e),this.log=new nd(e),this.tide=new ed(this.world,(d,u)=>{this.log.log(d,u),tu.has(d)&&(this.saveSoon=!0)}),this.survival=new cd(this.world,this.tide,(d,u)=>{this.log.log(d,u),tu.has(d)&&(this.saveSoon=!0)}),this.tide.realClock=()=>this.survival.activeS,this.renderer=new Bv({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.camera=new nn(72,16/9,.1,400),this.camera.rotation.order="YXZ",this.scene.add(this.sky.mesh),this.chunks=new gd(this.world,md()),this.scene.add(this.chunks.group),this.scene.add(this.effects.group),this.scene.add(this.hoistView.group),this.tideView=new Pd(this.world),this.tideView.addGauge(this.world),this.scene.add(this.survivalView.group),this.survivalView.attachWorld(this.world),this.scene.add(this.tideView.group),this.camera.add(this.carryView),this.scene.add(this.camera),this.player=new Lo(this.world);const o=this.world.terrain.spawnPoint();this.player.teleport(o.x,o.y+.01,o.z),this.player.yaw=Math.PI/2,this.player.pitch=-.17,this.inventory=Dn.starter();let a=!1;if(s)try{this.world.loadEdits(s.edits),this.player.teleport(s.player.x,s.player.y,s.player.z),this.player.yaw=s.player.yaw,this.player.pitch=s.player.pitch,this.inventory=Dn.restore(s.inventory),this.phase=s.phase,this.playMs=s.playMs??0,a=!0}catch{this.inventory=Dn.starter()}this.input=new Py(t,()=>{this.state==="playing"&&this.openMenu()},()=>this.input.requestLock()),this.reader=by({getBlock:(d,u,p)=>this.world.getBlock(d,u,p),isLoaded:(d,u)=>this.world.isColumnLoaded(d,u),playerState:()=>({x:this.player.x,y:this.player.y,z:this.player.z,onGround:this.player.onGround}),countItem:d=>this.inventory.count(d)}),this.host=new Ey(d=>this.config.activeSkills.includes(d)?{world:this.reader,config:this.config,emit:p=>this.log.log(p.kind,p.data,{skillId:p.skillId,standardComponent:p.standardComponent})}:null);const l=this.world.terrain.features.hoist;this.hoist=new Do({getBlock:(d,u,p)=>this.world.getBlockEnsured(d,u,p)},l.tray,l.homePlane),this.activity=new d_({reader:this.reader,hoist:this.hoist,source:()=>this.log.current,now:()=>this.playMs,visible:()=>{const d=this.config.scaffold.elevationReadout&&this.config.activeSkills.includes("signed_position"),u=this.elevationUnits();return{readoutShown:d,readoutValue:d&&u!==null?Math.round(u):null}},setupStartedAt:()=>this.panelOpenedAt,project:d=>x_(this.plan,this.hoist,(u,p,g)=>this.world.getBlockEnsured(u,p,g),d),playLog:(d,u)=>this.log.log(d,u)}),this.host.register(this.activity),this.hoist.listener=d=>this.onHoistEvent(d),this.hoist.stageLimit=()=>qu(this.plan,this.hoist,(d,u,p)=>this.world.getBlockEnsured(d,u,p)),s&&a&&(this.hoist.restore(s.hoist),this.pressRemaining=s.pressRemaining??0,this.activity.restore(s.activity),this.plan.restore(s.plan)),this.hoist.syncDocks();let c=!1,h=!1;if(s&&a)try{c=this.tide.restore(s.tide)}catch{c=!1}if(c&&this.tide.meta)this.log.runId=this.tide.meta.runId,h=!0;else{const d={runId:Tx(),build:Qh,seed:r,settings:{...this.config,survival:{mode:eu(e)}}};this.log.runId=d.runId,this.tide.begin(d,s&&a?this.inventory.count(E.BOARD):0)}if(s&&a?this.survival.restore(s.survival):this.survival.rescan(),this.survival.setMode(eu(e),"settings"),h){const d=this.tide.meta.runId,u=this.log.all("student").reduce((g,v)=>v.run===d&&typeof v.data.activeS=="number"?Math.max(g,v.data.activeS):g,0),p=Math.round(this.survival.activeS*100)/100;this.log.log("run_restored",{savedActiveS:p,loggedActiveS:u,rewoundS:Math.max(0,Math.round((u-p)*100)/100),savedWorldS:Math.round(this.tide.clock.activeS*100)/100})}this.inventory.count(E.DUNE)>0&&!(s&&a)&&this.log.log("starter_sand_audit",{dune:this.inventory.count(E.DUNE)}),this.ui=new Yy(this),this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("pagehide",()=>this.persist()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.persist()}),this.chunks.preload(this.player.x,this.player.z,3),this.log.log("session_start",{seed:r,restored:!!s,skills:this.config.activeSkills}),this.ui.refresh()}stamp(){return{activeS:Math.round(this.survival.activeS*100)/100,worldS:Math.round(this.tide.clock.activeS*100)/100}}setState(t){const e=this.state;this.state=t,this.input.enabled=t==="playing",this.input.clear(),t!=="playing"&&this.input.exitLock(),this.ui.show(t),e==="playing"&&t!=="playing"?(this.persist(),t!=="tour"&&(this.pausedAtS=this.tide.clock.activeS,this.pausedAtWall=Date.now(),this.log.log("play_pause",{to:t,...this.stamp()}))):t==="playing"&&e!=="playing"&&e!=="tour"&&this.pausedAtS!==null&&(this.log.log("play_resume",{from:e,pausedForS:Math.round((Date.now()-this.pausedAtWall)/10)/100,...this.stamp()}),this.pausedAtS=null)}start(){this.waterAudio.start(),this.showStartHint(),this.storage||this.warnNotSaved(),this.setState("playing"),this.input.requestLock()}showStartHint(){this.hintsShown.has("move")||this.tide.clock.activeS>5||(this.hintsShown.add("move"),this.ui.toast("Walk with W A S D. Look with the mouse or the arrow keys.",9),this.log.log("hint_shown",{hint:"move_look",...this.stamp()}))}openMenu(){this.setState("menu")}resume(){this.setState("playing"),this.input.requestLock()}warnNotSaved(){this.saveWarned||(this.saveWarned=!0,this.ui.toast("This browser is blocking storage, so your progress will not be kept. The teacher export still works.",9))}startTour(t=1){this.tour||this.state!=="title"&&this.state!=="menu"||(this.tourReturn=this.state,this.log.log("walkthrough_exposure",{phase:"start",chapter:t,...this.stamp(),openedFrom:this.state}),this.setState("tour"),this.tour=new rc(this.renderer,()=>this.endTour()),this.tour.start(t))}endTour(){const t=this.tour?.director;this.log.log("walkthrough_exposure",{phase:"end",lastChapter:t?.chapter??0,finished:t?.finished??!1,chapterSeconds:t?.lengths??{},...this.stamp()}),this.tour=null,this.setState(this.tourReturn)}setSurvivalMode(t){this.survival.setMode(t,"teacher");try{this.storage?.setItem(kd,JSON.stringify({mode:t}))}catch{}this.ui.refresh()}tourActive(){return this.tour!==null}applyConfig(t){const e=this.config;this.config=t;const n=n_(this.storage,t);return this.log.log("config_change",{before:e,after:t}),this.host.configChanged(),this.ui.refresh(),n}editCtx(){return{world:this.world,plan:this.plan,inventory:this.inventory,hoist:this.hoist,overlapsPlayer:(t,e,n)=>this.overlapsPlayer(t,e,n),log:(t,e)=>this.log.log(t,e),toast:t=>this.ui.toast(t),burst:(t,e,n,s)=>this.effects.burst(t,e,n,s),refresh:()=>this.ui.refreshBelt(),cellOccupied:(t,e,n)=>this.tide.loose.boardsInCell(t,e,n).length>0}}breakBlock(t,e,n){const s=this.world.getBlock(t,e,n),r=Zl(this.editCtx(),t,e,n);return r&&(this.survival.onBlock(t,e,n,this.world.getBlock(t,e,n),s),this.workPulse=!0,this.actPulse=!0,this.tide.noteBlockBroken(s),this.tide.loose.settle()),r}placeBlock(t,e,n,s,r){const o=this.world.getBlock(t,e,n),a=Jl(this.editCtx(),t,e,n,s,r);return a&&(this.tide.noteBlockPlaced(s,t,e,n),this.survival.onBlock(t,e,n,s,o),this.workPulse=!0,this.actPulse=!0),a}canPlaceDock(t,e,n){return this.hoist.canPlaceDock(t,e,n)}overlapsPlayer(t,e,n){const s=this.player;return s.x+.3>t&&s.x-.3<t+1&&s.z+.3>n&&s.z-.3<n+1&&s.y+1.8>e&&s.y<e+1}target(){const t=this.player.eye();return Ql(this.world,t,this.player.forwardVec())}frameInput(t){if(this.scripted)return{move:this.scripted,breaking:this.scriptedBreak};if(this.state!=="playing")return{move:In,breaking:!1};if(this.survival.unconscious){this.input.look(t);for(const n of this.input.takeActions())n==="menu"&&this.handleAction(n);return{move:In,breaking:!1}}const e=this.input.look(t);this.player.yaw+=e.yaw,this.player.pitch=Math.max(-1.55,Math.min(1.55,this.player.pitch+e.pitch));for(const n of this.input.takeActions())this.handleAction(n);return{move:this.input.move(),breaking:this.input.breakHeld()}}handleAction(t){t==="menu"?this.openMenu():t==="craft"?this.setState("craft"):t==="drop"?this.dropBoard():t==="rest"?this.toggleRest():t==="next"?this.inventory.select(this.inventory.selected+1):t==="prev"?this.inventory.select(this.inventory.selected-1):t.startsWith("slot")?this.inventory.select(Number(t.slice(4))):(t==="place"||t==="use")&&this.placeFromHit(t==="use"),this.ui.refreshBelt()}toggleRest(){const t=this.survival;if(t.resting){t.stopRest("tap",this.phase);return}if(!t.startRest(this.phase)){const e=t.mode==="off"?"Strength is switched off, so there is nothing to rest for":t.shelter.ok?"You cannot rest right now":`You cannot rest here: ${t.shelter.missing.join(", ")}`;this.ui.toast(e,4),this.log.log("rest_refused",{missing:t.shelter.missing,mode:t.mode,...this.stamp()})}}pickUpBoard(t){if(t.items){const n=this.survival.recoverBundle(t,this.inventory);return this.actPulse=!0,this.tide.loose.get(t.id)!==t&&(this.targetBoard=null),this.ui.toast(n.left===0?"You have your things back":`Some things did not fit: ${n.left} left in the bundle`,3),this.ui.refreshBelt(),n.recovered>0}if(this.hoist.carrying)return!1;const e=this.tide.pickUp(t,this.inventory);return e&&(this.actPulse=!0),!e&&this.packFullToastAt<Date.now()-4e3&&(this.packFullToastAt=Date.now(),this.ui.toast("Your pack is full")),this.ui.refreshBelt(),e}dropBoard(){if(this.inventory.count(E.BOARD)<1)return this.ui.toast("You have no Boards to set down"),!1;const t=this.target(),e=this.player;let n,s,r;t&&t.ny===1?(n=t.x+.5,s=t.z+.5,r=t.y+1):t?(n=t.x+.5+t.nx*.7,s=t.z+.5+t.nz*.7,r=this.world.groundPlane(Math.floor(n),Math.floor(s),t.y+1)):(n=e.x-Math.sin(e.yaw)*1.6,s=e.z-Math.cos(e.yaw)*1.6,r=this.world.groundPlane(Math.floor(n),Math.floor(s),e.y+2));const o=this.tide.loose.restingY(n,s,r);return this.tide.dropBoard(this.inventory,n,o,s,e.yaw),this.actPulse=!0,this.ui.refreshBelt(),!0}placeFromHit(t=!1){if(t&&this.targetBoard){this.pickUpBoard(this.targetBoard);return}const e=this.target();if(e){const s=this.world.getBlock(e.x,e.y,e.z),r=Jt[s]?.device;if(r==="control"){this.useControl(s);return}if(r==="dock"){this.useDock(e.x,e.y,e.z);return}if(r==="press"){this.usePress();return}}if(t){const s=this.trayDistance();if(s!==null&&(!e||s<e.dist)){this.useTray();return}}if(t)return;if(this.hoist.carrying){this.setDownCarried(e);return}const n=this.inventory.selectedStack();!e||!n||this.placeBlock(e.x+e.nx,e.y+e.ny,e.z+e.nz,n.id,!0)}useControl(t){const e=this.hoist,n=Vu(t);if(this.panelOpenedAt??=this.playMs,n!==null)e.setStop(n)||this.ui.toast("The selector is locked while the tray is away");else if(t===E.DISPATCH)e.stop===null?this.ui.toast("Press a stop button first"):e.dispatch()||this.ui.toast("The tray is already away");else if(t===E.RETURN)e.returnTray()||this.ui.toast("The tray is not held away");else if(t===E.MOUNT){const s=e.activeDock();s?this.useDock(s.x,s.y,s.z):this.ui.toast("No dock stands beside the rail yet")}else t===E.PRESS_BUTTON&&(this.pressRemaining>0?this.ui.toast("The press is working"):this.inventory.count(E.BLUEROCK)<Kn?this.ui.toast(`The press needs ${Kn} Bluerock`):this.startPress())}plannedCellAtAim(){const t=this.player.eye(),e=this.player.forwardVec();let n=null,s=.62;for(const r of this.plan.list()){if(this.world.getBlock(r.x,r.y,r.z)!==E.PLAN)continue;const o=r.x+.5-t[0],a=r.y+.5-t[1],l=r.z+.5-t[2],c=o*e[0]+a*e[1]+l*e[2];if(c<0||c>7)continue;const h=o-e[0]*c,d=a-e[1]*c,u=l-e[2]*c,p=Math.hypot(h,d,u);p<s&&(s=p,n=[r.x,r.y,r.z])}return n}setDownCarried(t){if(!this.hoist.carrying)return!1;const e=this.player,n=[],s=this.plannedCellAtAim();s&&n.push(s),t&&this.world.getBlock(t.x,t.y,t.z)===E.PLAN&&n.push([t.x,t.y,t.z]),t&&n.push([t.x+t.nx,t.y+t.ny,t.z+t.nz]);const r=Math.floor(e.y);n.push([Math.floor(e.x-Math.sin(e.yaw)*1.3),r,Math.floor(e.z-Math.cos(e.yaw)*1.3)]);for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)n.push([Math.floor(e.x)+a,r,Math.floor(e.z)+o]);for(const[o,a,l]of n){if(a<1||!ar(this.world.getBlock(o,a,l))||this.overlapsPlayer(o,a,l))continue;if(this.hoist.setDown(()=>this.world.setBlock(o,a,l,E.STONE_PANEL))){const h=this.plan.has(o,a,l);return this.log.log("panel_installed",{x:o,y:a,z:l,planned:h}),this.ui.toast(h?"Panel installed in a planned cell":"Panel installed. Break it to take it back."),!0}}return this.ui.toast("No room to set it down here"),!1}dockAim(t,e,n){const s=this.hoist.docks.get(`${t},${e},${n}`);return s?(s.plane-kt)%Ce!==0?"This dock sits between gauge marks":s.mounted?this.hoist.carrying?"R: put the panel on the rack":s.stock>0?"R: take a panel from the rack":"":s.mounting>0?`Mounting: ${Math.ceil(s.mounting)} s`:"R: mount this dock on the rail":""}trayDistance(){const t=this.player.eye(),e=this.player.forwardVec(),n=this.hoist.tray,s=[n.x+.5-.9,this.hoist.plane,n.z+.5-.9],r=[n.x+.5+.9,this.hoist.plane+1.6,n.z+.5+.9];let o=0,a=6;for(let l=0;l<3;l++)if(Math.abs(e[l])<1e-9){if(t[l]<s[l]||t[l]>r[l])return null}else{const c=(s[l]-t[l])/e[l],h=(r[l]-t[l])/e[l];if(o=Math.max(o,Math.min(c,h)),a=Math.min(a,Math.max(c,h)),o>a)return null}return o}useTray(){const t=this.hoist;t.state!=="home"?this.ui.toast("The tray is away"):t.carrying?this.handle("putTray")||this.ui.toast(this.busy>0?"Working...":"The tray is full"):this.handle("pickupTray")||this.ui.toast(this.busy>0?"Working...":"Nothing on the tray")}useDock(t,e,n){const s=this.hoist;s.syncDocks();const r=s.docks.get(`${t},${e},${n}`);if(r){if((r.plane-kt)%Ce!==0){this.ui.toast("This dock sits between two gauge marks, so the tray can never level with it");return}this.panelOpenedAt??=this.playMs,r.mounted?s.carrying?this.handle("deliver",r.key)||this.ui.toast("Working..."):r.stock>0?this.handle("pickupRack",r.key)||this.ui.toast("Working..."):this.ui.toast("The rack is empty"):this.ui.toast(r.mounting>0?`Mounting on the rail: ${Math.ceil(r.mounting)} s`:s.mountDock(r.key)?`Mounting on the rail: ${ql} s`:"Cannot mount")}}usePress(){const t=this.hoist;t.carrying?this.handle("depositBay")||this.ui.toast(t.bay>=12?"The bay is full":"Working..."):t.bay>0?this.handle("pickupBay"):this.ui.toast("Nothing waiting in the bay. The Press button on the wall makes a panel.")}handle(t,e){if(this.busy>0)return!1;const n=this.hoist,s=t==="pickupTray"?n.pickupFromTray():t==="pickupBay"?n.pickupFromBay():t==="pickupRack"?e?n.pickupFromRack(e):!1:t==="depositBay"?n.depositToBay():t==="putTray"?n.putOnTray():e?n.deliverToDock(e):!1;return s&&(this.busy=Xu),s}startPress(){if(this.pressRemaining>0||this.inventory.count(E.BLUEROCK)<Kn)return!1;if(!this.hoist.canStartPress()){const t=this.hoist.stageLimit();return this.ui.toast(t!==null&&this.hoist.state==="home"&&this.hoist.staged>=t?"The tray already carries every panel your plan needs.":"The press has nowhere to put another component. Clear the tray or the bay."),!1}return this.inventory.take(E.BLUEROCK,Kn),this.pressRemaining=Xl,this.ui.refreshBelt(),!0}onHoistEvent(t){t.type==="dispatch"?this.log.log("hoist_dispatch",{stop:t.stop,staged:t.staged,docks:this.hoist.docks.size}):t.type==="arrived"?(this.log.log("hoist_arrived",{stop:t.stop,outcome:t.outcome,staged:t.staged}),t.outcome==="delivered"&&t.dock&&this.hoistView.unload(t.dock,t.staged,t.plane,this.hoist.tray,this.hoist.clock)):t.type==="dock_mounted"&&this.log.log("dock_mounted",{}),this.host.withContext("signed_position",e=>this.activity.handle(t,e)),t.type==="dispatch"&&(this.panelOpenedAt=null)}tickMachines(t){this.hoist.update(t),this.pressRemaining>0&&(this.pressRemaining-=t,this.pressRemaining<=0&&(this.pressRemaining=0,this.hoist.pressOutput())),this.busy>0&&(this.busy=Math.max(0,this.busy-t))}elevationUnits(){return this.reader.planeToUnits(this.player.y)}tick(t,e,n=oe){this.player.step(t,n),this.hit=this.target();const s=this.hit?this.world.getBlock(this.hit.x,this.hit.y,this.hit.z):0,r=Jt[s],o=this.trayDistance();this.aim=o!==null&&(!this.hit||o<this.hit.dist)?this.hoist.carrying?"R: put the panel on the tray":"R: take a panel off the tray":r?.device==="dock"?this.dockAim(this.hit.x,this.hit.y,this.hit.z):r?.device==="press"?this.hoist.carrying?"R: put the panel in the bay":"R: take a panel from the bay":r?.device?`R: use ${r.name}`:this.hoist.carrying?"G: set the component down":s===E.STONE_PANEL?"F: take the panel back":s===E.PLAN?"F: remove this plan marker":"",this.updateMining(e,n),this.effects.update(n),this.tickMachines(n);const a=n*this.survival.timeScale(this.phase);this.tide.tick(a,this.player),this.updateBoardTarget(),this.phase=(this.phase+a/Zn)%1;const l=Math.hypot(this.player.vx,this.player.vz)>.6&&!this.survival.unconscious,c=!!(t.forward||t.right||t.jump||t.sprint||t.descend)||e||this.actPulse;this.survival.tick(n,{player:this.player,inv:this.inventory,phase:this.phase,moving:l,sprint:!!t.sprint,working:this.workPulse||e&&!!this.hit,acting:c,spawn:this.spawnSpot()}),this.workPulse=!1,this.actPulse=!1,this.updatePreview(),this.playMs+=n*1e3,this.host.tick(n)}spawnSpot(){const t=this.world.terrain.spawnPoint();return{x:t.x,y:t.y+.01,z:t.z}}updatePreview(){this.preview=null,this.previewText=null;const t=this.survival;if(this.state!=="playing"||t.mode==="off"||t.unconscious||!this.hit)return;const e=this.inventory.selectedStack();if(!e)return;const n=this.hit,s=n.x+n.nx,r=n.y+n.ny,o=n.z+n.nz;if(!ar(this.world.getBlock(s,r,o)))return;const a=this.player,l={x:a.x,y:a.y,z:a.z},c=[...t.hearths.values()];if(e.id===E.HEARTH){const m=uo(this.world,c,l,a.inWater,void 0,{x:s,y:r,z:o});this.preview={kind:"hearth",cell:{x:s,y:r,z:o},ring:{x:s+.5,y:r,z:o+.5,r:Pt.hearthReach},ok:m.ok},this.previewText=m.ok?"Placing the hearth here: your spot would be Covered":`Placing the hearth here: your spot would not be covered (${m.missing.join(", ")})`;return}const h=Jt[e.id];if(!h||!h.solid||h.climbable||e.id===E.LANTERN||e.id===E.DOCK||e.id===E.PLAN)return;const d=this.world.groundPlane(s,o,r-1);if(r<d+2||r>d+1+Pt.coverClearance)return;const u=s===Math.floor(a.x)&&o===Math.floor(a.z)?l:{x:s+.5,y:d,z:o+.5},p=uo(this.world,c,u,!1),g=uo(this.world,c,u,!1,{x:s,y:r,z:o,id:e.id});if(p.covered)return;const v=u===l?"your spot":"the spot under it";this.preview={kind:"roof",cell:{x:s,y:r,z:o},ring:null,ok:g.ok},this.previewText=g.ok?`This roof would make ${v} Covered`:`This roof gives cover to ${v}. Still missing: ${g.missing.filter(m=>m!=="no roof above you").join(", ")||"nothing"}`}updateBoardTarget(){const t=this.player.eye(),e=this.tide.loose.raycast(t,this.player.forwardVec(),6);this.targetBoard=e&&(!this.hit||e.dist<=this.hit.dist)?e.board:null,this.targetBoard&&!this.hoist.carrying&&(this.aim=this.targetBoard.items?"R: open your bundle":"R: pick up this board (or hold F)",this.hintsShown.has("pickup")||(this.hintsShown.add("pickup"),this.log.log("hint_shown",{hint:"pick_up_board",...this.stamp()})))}updateMining(t,e){if(t&&this.targetBoard&&this.inventory.hasRoom(E.BOARD)){this.boardHold+=e,this.boardHold>=.25&&(this.boardHold=0,this.pickUpBoard(this.targetBoard));return}this.boardHold=0;const n=this.hit;if(!t||!n){this.breakTarget=null,this.breakProgress=0;return}const s=this.breakTarget;(!s||s.x!==n.x||s.y!==n.y||s.z!==n.z)&&(this.breakTarget={x:n.x,y:n.y,z:n.z},this.breakProgress=0);const r=Jt[this.world.getBlock(n.x,n.y,n.z)];!r||r.hardness===1/0||(this.breakProgress+=e,this.breakProgress>=r.hardness&&(this.breakBlock(n.x,n.y,n.z),this.breakTarget=null,this.breakProgress=0))}crackStage(){const t=this.breakTarget;if(!t||this.breakProgress<=0)return-1;const e=Jt[this.world.getBlock(t.x,t.y,t.z)];return!e||e.hardness===1/0?-1:Math.floor(this.breakProgress/e.hardness*10)}advance(t,e,n=!1){const s=Math.round(t/oe);for(let r=0;r<s;r++)this.tick(e,n)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}syncCamera(){const t=this.player;this.camera.position.set(t.x,t.y+1.62+t.stepPop,t.z),this.camera.rotation.set(t.pitch,t.yaw,0),this.camera.updateMatrixWorld(!0)}render(){if(this.tour){this.tour.renderNow(),this.frameCount++;return}const t=sd(this.phase);this.syncCamera(),this.sky.update(t,this.camera.position),this.chunks.setSky(t.horizon,t.light);{const n=this.camera.position,s=this.survival.lights().sort((r,o)=>(r[0]-n.x)**2+(r[2]-n.z)**2-((o[0]-n.x)**2+(o[2]-n.z)**2));this.chunks.setNight(t.night,s.slice(0,8)),this.survivalView.update(this.tide.clock.activeS,this.survival,this.tide.loose.boards,t.night,this.preview,this.camera.position)}this.tideView.update(this.world,this.tide.loose.boards,this.tide.wet.list(),t.light,this.targetBoard,this.tide.clock.activeS);const e=this.world.terrain.features.hoist.rail;this.hoistView.group.visible=Math.hypot(this.player.x-e.x,this.player.z-e.z)<48,this.hoistView.update(this.hoist,t.light,this.world.terrain.features.hoist,n=>this.plan.demandFor(n,this.hoist.docks.values(),(s,r,o)=>this.world.getBlockEnsured(s,r,o),this.hoist.staged,this.hoist.carrying)?.unfilled??0),this.carryView.visible=this.hoist.carrying&&this.state==="playing",this.effects.target(this.hit&&this.hit.dist>.05&&this.state==="playing"?this.hit:null,this.crackStage()),this.renderer.render(this.scene,this.camera),this.frameCount++}frame=t=>{requestAnimationFrame(this.frame);const e=this.last?Math.max(0,(t-this.last)/1e3):0,n=Math.min(.1,Math.max(0,(t-this.last)/1e3));if(this.frameTimes&&this.last&&this.frameTimes.push(t-this.last),this.last=t,this.tour){this.tour.frame(e),this.frameCount++;return}this.waterSound();const{move:s,breaking:r}=this.frameInput(n);if((this.state==="playing"||this.scripted)&&!this.frozen){this.acc+=n;let o=0;for(;this.acc>=oe&&o<6;)this.tick(s,r),this.acc-=oe,o++;o===6&&(this.acc=0)}else this.acc=0;this.chunks.update(this.player.x,this.player.z,5),this.ui.frame(n),this.render(),this.autosave(n),this.saveSoon&&(this.saveSoon=!1,this.persist())};run(){requestAnimationFrame(this.frame)}signature(){const t=this.hoist,e=this.tide.census();return[this.world.editVersion,Math.round(this.survival.strength/10),this.survival.collapse!==null,this.tide.loose.boards.length,e.resting,e.floating,e.inPack,e.used,this.tide.phaseKey(),t.actions,t.state,t.staged,t.bay,t.carrying,t.pendingOutput,this.pressRemaining>0,this.inventory.summary().length].join("|")}waterSound(){const e=22+(this.world.tideLevel-46)/.18,n=Math.max(0,1-Math.max(0,this.player.x-e)/30);this.waterAudio.update(n,this.state==="playing",this.tide.clock.activeS)}autosave(t){this.saveTimer+=t,this.saveTimer>8&&(!this.lastSaveOk||this.signature()!==this.savedSig)&&this.persist()}persistBlocked=!1;persist(){if(this.persistBlocked)return!1;this.saveTimer=0;const t=this.player,e=this.signature(),n=Cy(this.storage,{version:3,seed:this.world.seed,edits:this.world.serializeEdits(),player:{x:t.x,y:t.y,z:t.z,yaw:t.yaw,pitch:t.pitch},inventory:this.inventory.serialize(),phase:this.phase,playMs:this.playMs,tide:this.tide.serialize(),survival:this.survival.serialize(),hoist:this.hoist.serialize(),pressRemaining:this.pressRemaining,activity:this.activity.snapshot(),plan:this.plan.serialize()}),s=this.log.save();return this.lastSaveOk=n&&s,this.lastSaveOk?(this.savedSig=e,this.saveWarned=!1):this.storage?this.saveWarned||(this.saveWarned=!0,this.ui.toast("Could not save in this browser. Trying again soon.")):this.warnNotSaved(),this.lastSaveOk}saveOk(){return this.lastSaveOk}elevationReadout(){if(!this.config.scaffold.elevationReadout||!this.config.activeSkills.includes("signed_position"))return null;const t=this.elevationUnits();return(t>0?"+":t<0?"−":"")+Math.abs(t).toFixed(2)}startFrameCapture(){this.frameTimes=[]}stopFrameCapture(){const t=this.frameTimes??[];return this.frameTimes=null,t}exportMeta(t){const e=this.log.all(t),n=new Set(e.map(d=>d.kind)),s=this.tide.meta,r=d=>e.reduce((u,p)=>Math.max(u,typeof p.data[d]=="number"?p.data[d]:0),0),o=r("activeS"),a=r("worldS"),l=[];n.has("tide_start")||l.push("tide_start (the run's start is not in this log)");for(const d of["tide_phase","first_minute_end"])n.has(d)||l.push(`${d} (the cycle was not played that far)`);n.has("cycle_settled")||l.push("cycle_settled (the cycle has not finished)"),n.has("after_cycle_summary")||l.push("after_cycle_summary (the minute after the cycle was not played)");const c=this.log.dropped[t]>0,h=e.filter(d=>d.kind==="run_restored"&&Number(d.data.rewoundS)>0).length;return h>0&&l.push(`${h} restore(s) after a lost tab: events logged after the last save were replayed, so some active-play times repeat`),{runId:s?.runId??null,build:s?.build??Qh,seed:this.world.seed,settings:{...this.config,survival:{mode:this.survival.mode}},activePlaySecondsLogged:o,worldSecondsLogged:a,activePlaySecondsNow:t==="student"?Math.round(this.survival.activeS*100)/100:null,coverage:{complete:l.length===0&&!c,missing:l,truncated:c,routineEventsDropped:this.log.dropped[t],restoresWithRewind:h}}}setStream(t){this.log.current=t}viewChunks(){return fo}defaults(){return structuredClone(Gl)}}function Rx(){try{const i=window.localStorage;return i.getItem("plumbline.probe"),i}catch{return null}}const Cx=document.getElementById("view"),Da=new URLSearchParams(location.search).get("seed"),Px=Da!==null&&/^-?\d{1,9}$/.test(Da)?Number(Da):void 0,kx=!!document.createElement("canvas").getContext("webgl2");try{const i=new Ax(Cx,Rx(),Px);new URLSearchParams(location.search).get("verify")==="1"&&wy(i),i.setState("title"),i.render(),i.run()}catch(i){const t=document.createElement("div");throw t.className="panel",t.style.margin="40px auto",t.textContent=kx?"Something went wrong while starting the game. Reloading the page usually fixes it.":"This game needs WebGL2, which this browser could not start. Try a current version of Chrome.",document.body.append(t),i}
//# sourceMappingURL=index-PgILc3Aa.js.map
