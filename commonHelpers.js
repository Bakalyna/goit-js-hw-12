import{a as L,S as b,i as f}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const r={form:document.querySelector(".js-form"),galleryElem:document.querySelector(".gallery"),loaderElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn")};async function m(e,o){const c="42320174-3e6043d2cde7399227b0118b6",s="https://pixabay.com/api/",n={key:c,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o};return(await L.get(s,{params:n})).data}const E=new b(".gallery a",{});function p(e){const o=w(e);r.galleryElem.insertAdjacentHTML("beforeend",o),E.refresh()}function x(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-link" alt="" src="${e.previewURL}" />
        </a>
        <ul class="list-content">
          <li class="list-text">
            <p class="list-text-item">Likes <span>${e.likes}</span></p>
          </li>
          <li class="list-text">          
            <p class="list-text-item">Views <span>${e.views}</span></p>
          </li>
          <li class="list-text">           
            <p class="list-text-item">Comments <span>${e.comments}</span></p>
          </li>
          <li class="list-text">           
            <p class="list-text-item">Downloads <span>${e.downloads}</span></p>
          </li>
        </ul>
        </li>`}function w(e){return e.map(x).join("")}r.form.addEventListener("submit",S);r.btnLoadMore.addEventListener("click",v);let l,i,u;async function S(e){if(e.preventDefault(),l=e.target.firstElementChild.value.trim(),i=1,g(),l!==""){try{const o=await m(l,i);console.log(o),u=Math.ceil(o.totalHits/15),o.hits.length===0&&a(),r.galleryElem.innerHTML="",p(o.hits)}catch{a()}y(),h()}}async function v(){if(i+=1,l!==""){try{g();const e=await m(l,i);e.hits.length===0&&a(),p(e.hits),M()}catch{a()}y(),h()}}function O(){r.btnLoadMore.classList.remove("is-hidden")}function P(){r.btnLoadMore.classList.add("is-hidden")}function h(){console.log(i,u),i>=u?(P(),f.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"600px"})):O()}function g(){r.loaderElem.classList.remove("is-hidden")}function y(){r.loaderElem.classList.add("is-hidden")}function a(){f.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"600px"})}function M(){const e=r.galleryElem.firstElementChild.getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
