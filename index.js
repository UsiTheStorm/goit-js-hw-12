import{i as L,a as N,G as T}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const v=t=>{L.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},d=t=>{L.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},$="49754838-8d67938118f09bcabafca9026",E="https://pixabay.com/api/";async function I(t,e=1,o=15){const n={key:$,q:t,image_type:"photo",orientation:"horizontal",per_page:o,page:e};return(await N.get(E,{params:n})).data}const h=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector('button[type="submit"]'),q={selector:".glightbox",loop:!0,openEffect:"zoom"};function p(t,e){return t?!0:(console.error(`${e} element not found in the DOM.`),!1)}function A(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function c(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function y(t){t?(a.disabled=!0,a.textContent="Loading"):(a.disabled=!1,a.textContent="Search")}function M({largeImageURL:t,webformatURL:e,tags:o,likes:n,views:r,comments:i,downloads:s}){const S=A(o);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${S}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="icons/like.svg" width="16" alt="Like icon">
              ${c(n)}
          </span>
          <span class="info-item">
          <img src="icons/view.svg" width="16" alt="View icon">
              ${c(r)}
          </span>
          <span class="info-item">
          <img src="icons/comment.svg" width="16" alt="Comment icon">
              ${c(i)}
          </span>
          <span class="info-item">
          <img src="icons/download.svg" width="16" alt="Download icon">
              ${c(s)}
          </span>
      </div>
  </a>
  </li>`}function O(t){if(!p(h,"Gallery"))return;const e=t.map(M).join("");h.insertAdjacentHTML("beforeend",e),T(q)}function P(){h.innerHTML=""}function G(){p(u,"Loader")&&u.classList.remove("is-hidden")}function R(){p(u,"Loader")&&u.classList.add("is-hidden")}const b=document.querySelector(".form");let l;const f=document.querySelector(".js-guard");let m=1;const x=15;let g=0;async function B(t,e){if(t[0].isIntersecting){console.log("Вжух Вантаж"),e.unobserve(f),m+=1;try{const n=await I(l,m,x);if(!n.hits.length){d("Thats all fellow kids");return}O(n.hits),g+=n.hits.length,g<n.totalHits&&e.observe(f)}catch(n){v("An error occurred while fetching images."),console.error("Error fetching images:",n)}}}const w=new IntersectionObserver(B,{rootMargin:"350px"});b.addEventListener("submit",async t=>{if(t.preventDefault(),l=new FormData(b).get("search-text").trim(),!l){d("Please enter a search query.");return}g=0,m=1,w.unobserve(f),y(!0),P(),G();try{const o=await I(l,m,x);if(!o.hits.length){d("No images found");return}O(o.hits),g+=o.hits.length,o.hits.length<o.totalHits&&w.observe(f)}catch(o){v("An error occurred while fetching images."),console.error("Error fetching images:",o)}finally{R(),y(!1)}t.target.reset()});
//# sourceMappingURL=index.js.map
