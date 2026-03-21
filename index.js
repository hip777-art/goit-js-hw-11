import{S as m,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});document.querySelector(".gallery");document.querySelector(".loader");const n=document.querySelector(".gallery"),c=document.querySelector(".loader-wrap");let s=null;function y(t){const{webformatURL:i,largeImageURL:a,tags:l="",likes:e=0,views:r=0,comments:o=0,downloads:d=0}=t,f=String(l).slice(0,200);return`
<li class="gallery-item">
  <a class="gallery-item__link" href="${a}" title="${f}">
    <img
      class="gallery-item__img"
      src="${i}"
      alt="${f}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${e}</span>
      <span class="gallery-item__info-item">👁 ${r}</span>
      <span class="gallery-item__info-item">💬 ${o}</span>
      <span class="gallery-item__info-item">⬇ ${d}</span>
    </div>
  </a>
</li>`}function g(t){if(!n)return;if(!Array.isArray(t)||t.length===0){n.innerHTML="",s==null||s.refresh();return}const i=t.map(y).join("");n.innerHTML=i,s?s.refresh():s=new m(".gallery a",{captionsData:"title",captionDelay:250})}function p(){n&&(n.innerHTML="")}function h(){c&&c.classList.remove("is-hidden")}function L(){c&&c.classList.add("is-hidden")}const _=document.querySelector(".form");_.addEventListener("submit",t=>{t.preventDefault();const i=t.currentTarget.elements["search-text"].value.trim();if(i===""){u.warning({message:"Please enter a search query!"});return}p(),h(),getImagesByQuery(i).then(a=>{if(a.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(a.hits)}).catch(a=>{console.error(a),u.error({message:"An error occurred. Please try again later."})}).finally(()=>{L(),t.target.reset()})});
//# sourceMappingURL=index.js.map
