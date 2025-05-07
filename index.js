import{i as w,a as x,G as S}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const L=t=>{w.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},f=t=>{w.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},N="49754838-8d67938118f09bcabafca9026",T="https://pixabay.com/api/";async function v(t,e=1,i=15){const o={key:N,q:t,image_type:"photo",orientation:"horizontal",per_page:i,page:e};return(await x.get(T,{params:o})).data}const m=document.querySelector(".gallery"),u=document.querySelector(".loader"),c=document.querySelector('button[type="submit"]'),$={selector:".glightbox",loop:!0,openEffect:"zoom"};function h(t,e){return t?!0:(console.error(`${e} element not found in the DOM.`),!1)}function q(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function l(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function p(t){t?(c.disabled=!0,c.textContent="Loading"):(c.disabled=!1,c.textContent="Search")}function E({largeImageURL:t,webformatURL:e,tags:i,likes:o,views:r,comments:n,downloads:s}){const O=q(i);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${O}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="icons/like.svg" width="16" alt="Like icon">
              ${l(o)}
          </span>
          <span class="info-item">
          <img src="icons/view.svg" width="16" alt="View icon">
              ${l(r)}
          </span>
          <span class="info-item">
          <img src="icons/comment.svg" width="16" alt="Comment icon">
              ${l(n)}
          </span>
          <span class="info-item">
          <img src="icons/download.svg" width="16" alt="Download icon">
              ${l(s)}
          </span>
      </div>
  </a>
  </li>`}function I(t){if(!h(m,"Gallery"))return;const e=t.map(E).join("");m.insertAdjacentHTML("beforeend",e),S($)}function A(){m.innerHTML=""}function M(){h(u,"Loader")&&u.classList.remove("is-hidden")}function P(){h(u,"Loader")&&u.classList.add("is-hidden")}const y=document.querySelector(".form");let a;const g=document.querySelector(".js-guard");let d=1;const G=15;let b=0;const R={rootMargin:"350px"},B=new IntersectionObserver(D,R);async function D(t,e){if(console.log(t),t[0].isIntersecting){console.log("Вжух Вантаж"),e.unobserve(g),d+=1;try{console.log(a);const o=await v(a,d,G);if(!o.hits.length){f("Thats all");return}I(o.hits),b+=o.hits.length,b<o.totalHits&&e.observe(g)}catch(o){L("An error occurred while fetching images."),console.error("Error fetching images:",o)}}}y.addEventListener("submit",async t=>{if(t.preventDefault(),a=new FormData(y).get("search-text").trim(),!a){f("Please enter a search query.");return}t.target.reset(),p(!0),A(),M();try{const i=await v(a,d);if(!i.hits.length){f("No images found for the search query.");return}I(i.hits),B.observe(g)}catch(i){L("An error occurred while fetching images."),console.error("Error fetching images:",i)}finally{P(),p(!1)}});
//# sourceMappingURL=index.js.map
