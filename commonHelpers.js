import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="45022873-80f77178c96ea8fdbff7ba9f5";function p(s,t="photo",o="horizontal",n=!0){return fetch(`https://pixabay.com/api/?key=${m}&q=${s}&image_type=${t}&orientation=${o}&safesearch=${n}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function y(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:c,comments:u,downloads:d})=>`
        <div class="gallery-item">
          <a href="${e}">
            <img src="${n}" alt="${r}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b><span>${a}</span></p>
            <p><b>Views</b><span>${c}</span></p>
            <p><b>Comments</b><span>${u}</span></p>
            <p><b>Downloads</b><span>${d}</span></p>
          </div>
        </div>
    `);t.innerHTML=o.join(""),new f(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector("#search"),g=document.querySelector(".gallery"),i=document.querySelector(".loader");h.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.searchQuery.value.toLowerCase();if(t==""){l.error({title:"Error",message:"Please enter a search query!"});return}i.classList.add("loader-show"),i.classList.add("gallery-hide"),g.innerHTML="",p(t).then(o=>{o.hits.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):y(o.hits)}).catch(o=>{l.error({title:"Error",message:`Something went wrong: ${o.message}`})}).finally(()=>{i.classList.remove("loader-show"),i.classList.remove("gallery-hide")})});
//# sourceMappingURL=commonHelpers.js.map
