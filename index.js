import{i as T,a as $,G as q,d as N}from"./assets/vendor-BPqC0oKr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const S=t=>{T.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},d=t=>{T.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},P="49754838-8d67938118f09bcabafca9026",A="https://pixabay.com/api/";async function x(t,e=1,r=15){const n={key:P,q:t,image_type:"photo",orientation:"horizontal",per_page:r,page:e};return(await $.get(A,{params:n})).data}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),l=document.querySelector('button[type="submit"]'),b=document.querySelector(".scroll-to-top");let s=null;const B={selector:".glightbox",loop:!0,openEffect:"zoom"};function y(t,e){return t?!0:(console.error(`${e} element not found in the DOM.`),!1)}function G(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function c(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function w(t){t?(l.disabled=!0,l.textContent="Loading"):(l.disabled=!1,l.textContent="Search")}function M({largeImageURL:t,webformatURL:e,tags:r,likes:n,views:o,comments:i,downloads:a}){const E=G(r);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${E}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="icons/like.svg" width="16" alt="Like icon">
              ${c(n)}
          </span>
          <span class="info-item">
          <img src="icons/view.svg" width="16" alt="View icon">
              ${c(o)}
          </span>
          <span class="info-item">
          <img src="icons/comment.svg" width="16" alt="Comment icon">
              ${c(i)}
          </span>
          <span class="info-item">
          <img src="icons/download.svg" width="16" alt="Download icon">
              ${c(a)}
          </span>
      </div>
  </a>
  </li>`}function I(t){if(!y(p,"Gallery"))return;const e=t.map(M).join("");p.insertAdjacentHTML("beforeend",e),s&&s.destroy(),s=q(B)}function R(){s&&(s.destroy(),s=null),p.innerHTML=""}function k(){y(f,"Loader")&&f.classList.remove("is-hidden")}function D(){y(f,"Loader")&&f.classList.add("is-hidden")}function C(){window.scrollTo({top:0,behavior:"smooth"})}function H(){const t=window.scrollY||document.documentElement.scrollTop,e=window.innerHeight*1.5;t>=e?b.classList.remove("is-hidden"):b.classList.add("is-hidden")}const j=document.querySelector(".scroll-to-top"),L=document.querySelector(".form");let u;const m=document.querySelector(".js-guard");let g=1;const O=15;let h=0;async function z(t,e){if(t[0].isIntersecting){console.log("Вжух Вантаж"),e.unobserve(m),g+=1;try{const n=await x(u,g,O);if(!n||!n.hits||n.hits.length===0){d("Thats all fellow kids");return}I(n.hits),h+=n.hits.length,h<n.totalHits?e.observe(m):d("Thats all fellow kids")}catch(n){S("An error occurred while fetching images."),console.error("Error fetching images:",n)}}}const v=new IntersectionObserver(z,{rootMargin:"350px"});L.addEventListener("submit",async t=>{if(t.preventDefault(),u=new FormData(L).get("search-text").trim(),!u){d("Please enter a search query.");return}h=0,g=1,v.unobserve(m),w(!0),R(),k();try{const r=await x(u,g,O);if(!r||!r.hits||r.hits.length===0){d("No images found");return}I(r.hits),h+=r.hits.length,r.hits.length<r.totalHits&&v.observe(m)}catch(r){S("An error occurred while fetching images."),console.error("Error fetching images:",r)}finally{D(),w(!1)}t.target.reset()});j.addEventListener("click",()=>{C()});const _=N(H,50);window.addEventListener("scroll",_);
//# sourceMappingURL=index.js.map
