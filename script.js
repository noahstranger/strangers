var x=Object.defineProperty;var w=(i,e,t)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(w(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const m=document.body,h=document.documentElement,S=(i="img")=>new Promise(e=>{imagesLoaded(document.querySelectorAll(i),{background:!0},e)}),u=(i,e,t)=>(1-t)*i+t*e,I=(i,e,t,o)=>Math.hypot(t-i,o-e),g=i=>{let e=0,t=0;return i||(i=window.event),i.touches?i.touches.length>0&&(e=i.touches[0].pageX,t=i.touches[0].pageY):i.pageX||i.pageY?(e=i.pageX,t=i.pageY):(i.clientX||i.clientY)&&(e=i.clientX+m.scrollLeft+h.scrollLeft,t=i.clientY+m.scrollTop+h.scrollTop),{x:e,y:t}},M=(i,e)=>I(i.x,i.y,e.x,e.y);class O{constructor(e){r(this,"DOM",{el:null,inner:null});r(this,"defaultStyle",{scale:1,x:0,y:0,opacity:0});r(this,"timeline",null);r(this,"rect",null);this.DOM.el=e,this.DOM.inner=this.DOM.el.querySelector(".content__img-inner"),this.getRect(),this.initEvents()}initEvents(){this.resize=()=>{gsap.set(this.DOM.el,this.defaultStyle),this.getRect()},window.addEventListener("resize",()=>this.resize())}getRect(){this.rect=this.DOM.el.getBoundingClientRect()}}let n,d,l;n={x:0,y:0};l={...n};d={...n};const p=i=>{i.touches?n=g(i.touches[0]):n=g(i)};window.addEventListener("mousemove",p);window.addEventListener("touchmove",p);class v{constructor(e){r(this,"DOM",{el:null});r(this,"images",[]);r(this,"imagesTotal",0);r(this,"imgPosition",0);r(this,"zIndexVal",1);r(this,"activeImagesCount",0);r(this,"isIdle",!0);r(this,"threshold",80);r(this,"onImageActivated",()=>{this.activeImagesCount++,this.isIdle=!1});r(this,"onImageDeactivated",()=>{this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)});this.DOM.el=e,this.images=[...this.DOM.el.querySelectorAll(".content__img")].map(o=>new O(o)),this.imagesTotal=this.images.length;const t=()=>{l={...n},requestAnimationFrame(()=>this.render()),window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t)};window.addEventListener("mousemove",t),window.addEventListener("touchmove",t)}render(){let e=M(n,d);l.x=u(l.x||n.x,n.x,.3),l.y=u(l.y||n.y,n.y,.3),e>this.threshold&&(this.showNextImage(),d=n),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}mapSpeedToSize(e,t,o){return t+(o-t)*Math.min(e/200,1)}mapSpeedToBrightness(e,t,o){return t+(o-t)*Math.min(e/70,1)}mapSpeedToBlur(e,t,o){return t+(o-t)*Math.min(e/90,1)}mapSpeedToGrayscale(e,t,o){return t+(o-t)*Math.min(e/90,1)}showNextImage(){let e=n.x-l.x,t=n.y-l.y,o=Math.sqrt(e*e+t*t);++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const s=this.images[this.imgPosition];let a=this.mapSpeedToSize(o,.3,2),c=this.mapSpeedToBrightness(o,0,1.3),f=this.mapSpeedToBlur(o,20,0),y=this.mapSpeedToGrayscale(o,600,0);gsap.killTweensOf(s.DOM.el),s.timeline=gsap.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(s.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:l.x-s.rect.width/2,y:l.y-s.rect.height/2},{duration:.8,ease:"power3",scale:a,filter:`grayscale(${y*100}%) brightness(${c*100}%) blur(${f}px)`,x:n.x-s.rect.width/2,y:n.y-s.rect.height/2},0).fromTo(s.DOM.inner,{scale:2},{duration:.8,ease:"power3",scale:1},0).to(s.DOM.el,{duration:.4,ease:"power3.in",opacity:0,scale:.2},.45)}}S(".content__img-inner").then(()=>{document.body.classList.remove("loading"),new v(document.querySelector(".content"))});
