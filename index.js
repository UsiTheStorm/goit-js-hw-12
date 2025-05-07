import{i as v,a as N,G as $}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const x=t=>{v.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},f=t=>{v.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},E="49754838-8d67938118f09bcabafca9026",q="https://pixabay.com/api/";async function I(t,e=1,o=15){const n={key:E,q:t,image_type:"photo",orientation:"horizontal",per_page:o,page:e};return(await N.get(q,{params:n})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),l=document.querySelector('button[type="submit"]');let s=null;const A={selector:".glightbox",loop:!0,openEffect:"zoom"};function y(t,e){return t?!0:(console.error(`${e} element not found in the DOM.`),!1)}function G(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function c(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function b(t){t?(l.disabled=!0,l.textContent="Loading"):(l.disabled=!1,l.textContent="Search")}function M({largeImageURL:t,webformatURL:e,tags:o,likes:n,views:r,comments:i,downloads:a}){const T=G(o);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${T}"
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
              ${c(a)}
          </span>
      </div>
  </a>
  </li>`}function O(t){if(!y(p,"Gallery"))return;const e=t.map(M).join("");p.insertAdjacentHTML("beforeend",e),s&&s.destroy(),s=$(A)}function P(){s&&(s.destroy(),s=null),p.innerHTML=""}function R(){y(m,"Loader")&&m.classList.remove("is-hidden")}function B(){y(m,"Loader")&&m.classList.add("is-hidden")}const w=document.querySelector(".form");let u;const g=document.querySelector(".js-guard");let d=1;const S=15;let h=0;async function D(t,e){if(t[0].isIntersecting){console.log("Вжух Вантаж"),e.unobserve(g),d+=1;try{const n=await I(u,d,S);if(!n||!n.hits||n.hits.length===0){f("Thats all fellow kids");return}O(n.hits),h+=n.hits.length,h<n.totalHits?e.observe(g):f("Thats all fellow kids")}catch(n){x("An error occurred while fetching images."),console.error("Error fetching images:",n)}}}const L=new IntersectionObserver(D,{rootMargin:"350px"});w.addEventListener("submit",async t=>{if(t.preventDefault(),u=new FormData(w).get("search-text").trim(),!u){f("Please enter a search query.");return}h=0,d=1,L.unobserve(g),b(!0),P(),R();try{const o=await I(u,d,S);if(!o||!o.hits||o.hits.length===0){f("No images found");return}O(o.hits),h+=o.hits.length,o.hits.length<o.totalHits&&L.observe(g)}catch(o){x("An error occurred while fetching images."),console.error("Error fetching images:",o)}finally{B(),b(!1)}t.target.reset()});
//# sourceMappingURL=index.js.map
