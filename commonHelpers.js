import{a as L,S as b,i as c}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const v="43935418-e568f8ae63502e120d68b032c",w="https://pixabay.com/api/",m=async(r,t=1)=>{const i={key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await L.get(w,{params:i})).data}catch{throw new Error("Failed to fetch images")}},S=()=>{const r=document.querySelector(".gallery");r.innerHTML=""},h=r=>{const t=document.querySelector(".gallery"),i=r.map(({webformatURL:o,largeImageURL:e,tags:s,likes:n,views:f,comments:g,downloads:p})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${o}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${n}</p>
            <p><b>Views</b> ${f}</p>
            <p><b>Comments</b> ${g}</p>
            <p><b>Downloads</b> ${p}</p>
          </div>
        </li>
      `).join("");t.insertAdjacentHTML("beforeend",i)},q=document.querySelector("#search-form"),u=document.querySelector("#loader"),a=document.querySelector("#load-more");let l=1,d="";const y=new b(".gallery a");q.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.currentTarget.elements.query.value.trim(),d===""){c.error({title:"Error",message:"Search query cannot be empty!"});return}u.classList.remove("hidden"),a.classList.add("hidden"),S(),l=1;try{const t=await m(d,l);t.hits.length===0?c.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):(h(t.hits),a.classList.remove("hidden"),y.refresh())}catch(t){c.error({title:"Error",message:t.message})}finally{u.classList.add("hidden")}});a.addEventListener("click",async()=>{l+=1,u.classList.remove("hidden"),a.classList.add("hidden");try{const r=await m(d,l);h(r.hits),l*15>=r.totalHits?(a.classList.add("hidden"),c.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):a.classList.remove("hidden");const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),y.refresh()}catch(r){c.error({title:"Error",message:r.message})}finally{u.classList.add("hidden")}});
//# sourceMappingURL=commonHelpers.js.map
