import{a as g,S as p,i as c}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const b="43935418-e568f8ae63502e120d68b032c",L="https://pixabay.com/api/",S=async(e,o=1)=>{const n={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await g.get(L,{params:n})).data}catch{throw new Error("Failed to fetch images")}},v=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},q=e=>{const o=document.querySelector(".gallery"),n=e.map(({webformatURL:s,largeImageURL:t,tags:r,likes:a,views:f,comments:y,downloads:h})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${s}" alt="${r}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${a}</p>
            <p><b>Views</b> ${f}</p>
            <p><b>Comments</b> ${y}</p>
            <p><b>Downloads</b> ${h}</p>
          </div>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",n)},w=document.querySelector("#search-form"),u=document.querySelector("#loader"),l=document.querySelector("#load-more");let i=1,d="";const E=new p(".gallery a");w.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.currentTarget.elements.query.value.trim(),d===""){c.error({title:"Error",message:"Search query cannot be empty!"});return}v(),i=1,l.classList.add("hidden"),m()});l.addEventListener("click",()=>{i+=1,m()});const m=async()=>{u.classList.remove("hidden");try{const e=await S(d,i);e.hits.length===0&&i===1?c.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):(q(e.hits),i*15>=e.totalHits?(l.classList.add("hidden"),c.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):l.classList.remove("hidden"),E.refresh(),P())}catch(e){c.error({title:"Error",message:e.message})}finally{u.classList.add("hidden")}},P=()=>{const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};
//# sourceMappingURL=commonHelpers.js.map
