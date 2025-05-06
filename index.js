import{i as p,a as b,G as L}from"./assets/vendor-DqsV4Fdp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const w=e=>{p.error({title:"❌",message:e,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},m=e=>{p.warning({title:"",message:e,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},v="49754838-8d67938118f09bcabafca9026",O="https://pixabay.com/api/";async function x(e){return(await b.get(O,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",per_page:50}})).data.hits}const u=document.querySelector(".gallery"),l=document.querySelector(".loader"),a=document.querySelector('button[type="submit"]'),I={selector:".glightbox",loop:!0,openEffect:"zoom"};function f(e,t){return e?!0:(console.error(`${t} element not found in the DOM.`),!1)}function N(e){return e?e.split(",").map(t=>t.trim()).filter(t=>t.length>0).slice(0,3).join(","):"Gallery image"}function c(e){const t=Number(e);return Number.isNaN(t)?"N/A":t>=1e6?`${Math.floor(t/1e6)}M`:t>=1e3?`${Math.floor(t/1e3)}K`:String(t)}function d(e){e?(a.disabled=!0,a.textContent="Loading"):(a.disabled=!1,a.textContent="Search")}function $({largeImageURL:e,webformatURL:t,tags:i,likes:n,views:r,comments:o,downloads:s}){const y=N(i);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${e}">
      <img
          class="gallery-image"
          src="${t}" 
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
              ${c(s)}
          </span>
      </div>
  </a>
  </li>`}function S(e){if(!f(u,"Gallery"))return;const t=e.map($).join("");u.insertAdjacentHTML("beforeend",t),L(I)}function q(){u.innerHTML=""}function E(){f(l,"Loader")&&l.classList.remove("is-hidden")}function g(){f(l,"Loader")&&l.classList.add("is-hidden")}const h=document.querySelector(".form");h.addEventListener("submit",async e=>{e.preventDefault();const i=new FormData(h).get("search-text").trim();if(!i){m("Please enter a search query.");return}e.target.reset(),d(!0),q(),E();try{const n=await x(i);if(!n.length){m("No images found for the search query.");return}g(),S(n)}catch(n){w("An error occurred while fetching images."),console.error("Error fetching images:",n)}finally{d(!1),g()}});
//# sourceMappingURL=index.js.map
