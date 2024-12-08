import{a as w,S,i as f}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function m(i){return i.map(({webformatURL:s,tags:r,largeImageURL:n,likes:e,views:o,comments:a,downloads:C})=>`<li class="li-item">
             <a class="gallery-link" href="${n}">
               <img class="gallery-img" src="${s}" alt="${r}" width="300">
             </a>
               <ul class="image-description">
               <li>
                 <h2 class="title">Likes</h2>
                 <p>${e}</p>
               </li>
               <li>
               <h2 class="title">Views</h2>
               <p>${o}</p>
               </li>
               <li>
                 <h2 class="title">Comments</h2>
                 <p>${a}</p>
               </li>
               <li>
                 <h2 class="title">Downloads</h2>
                 <p>${C}</p>
               </li>
               </ul>
       </li>`).join("")}const h="47418374-a80c993bb5abb784419bb47e5",y=async(i,s=1)=>{const r=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s});return(await w.get(`https://pixabay.com/api/?key=${h}&q=${r}`)).data},g=document.querySelector(".form"),l=document.querySelector(".gallery"),t=document.querySelector(".load-more");let b=new S(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});t.setAttribute("hidden",!0);t.style.display="none";function u(){loader.style.display="block"}function p(){loader.style.display="none"}let c="",d=1,L=15;document.addEventListener("DOMContentLoaded",()=>{t.hidden=!0,t.style.display="none"});g.addEventListener("submit",i=>{if(i.preventDefault(),d=1,c=i.target.elements.search.value.trim(),u(),c)u(),y(c).then(r=>{r.hits.length<L&&(t.setAttribute("hidden",!0),t.style.display="none"),r.hits.length===0&&(t.setAttribute("hidden",!0),f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})),l.innerHTML="",l.insertAdjacentHTML("beforeend",m(r.hits)),b.refresh()}).catch(r=>{l.innerHTML="",t.setAttribute("hidden",!0),t.style.display="none",f.error({title:"Error",message:`An error occurred: ${r.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}).finally(()=>{p()}),t.removeAttribute("hidden"),t.style.display="block";else{f.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),l.innerHTML="",p(),t.hidden=!0,t.style.display="none";return}return g.reset(),c});t.addEventListener("click",async()=>{d+=1;try{u();const i=await y(c,d),s=Math.ceil(i.totalHits/L);l.insertAdjacentHTML("beforeend",m(i.hits)),b.refresh();const r=l.firstElementChild;if(r){const{height:n}=r.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}if(d>=s)return t.setAttribute("hidden",!0),t.style.display="none",f.error({title:"Warning",message:"We're sorry, there are no more posts to load",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}catch(i){console.log(i)}finally{p()}});
//# sourceMappingURL=index.js.map
