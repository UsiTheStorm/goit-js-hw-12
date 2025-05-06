import{i as p,a as b,G as L}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const w=t=>{p.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},m=t=>{p.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},v="49754838-8d67938118f09bcabafca9026",O="https://pixabay.com/api/";function x(t){return b.get(O,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",per_page:50}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const u=document.querySelector(".gallery"),l=document.querySelector(".loader"),s=document.querySelector('button[type="submit"]'),I={selector:".glightbox",loop:!0,openEffect:"zoom"};function f(t,e){return t?!0:(console.error(`${e} element not found in the DOM.`),!1)}function N(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function c(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function d(t){t?(s.disabled=!0,s.textContent="Loading"):(s.disabled=!1,s.textContent="Search")}function $({largeImageURL:t,webformatURL:e,tags:i,likes:n,views:r,comments:o,downloads:a}){const y=N(i);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${y}"
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
              ${c(o)}
          </span>
          <span class="info-item">
          <img src="icons/download.svg" width="16" alt="Download icon">
              ${c(a)}
          </span>
      </div>
  </a>
  </li>`}function S(t){if(!f(u,"Gallery"))return;const e=t.map($).join("");u.insertAdjacentHTML("beforeend",e),L(I)}function q(){u.innerHTML=""}function E(){f(l,"Loader")&&l.classList.remove("is-hidden")}function g(){f(l,"Loader")&&l.classList.add("is-hidden")}const h=document.querySelector(".form");h.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(h).get("search-text").trim();if(!i){m("Please enter a search query.");return}t.target.reset(),d(!0),q(),E(),x(i).then(n=>{if(!n.length){m("No images found for the search query.");return}g(),S(n)}).catch(n=>{w("An error occurred while fetching images."),console.error("Error fetching images:",n)}).finally(()=>{d(!1),g()})});
//# sourceMappingURL=index.js.map
