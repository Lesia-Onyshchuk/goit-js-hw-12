import{a as C,S as w,i as d}from"./assets/vendor-Dpd1z_xS.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function m(s){return s.map(({webformatURL:i,tags:t,largeImageURL:n,likes:e,views:o,comments:l,downloads:L})=>`<li class="li-item">
             <a class="gallery-link" href="${n}">
               <img class="gallery-img" src="${i}" alt="${t}" width="300">
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
                 <p>${l}</p>
               </li>
               <li>
                 <h2 class="title">Downloads</h2>
                 <p>${L}</p>
               </li>
               </ul>
       </li>`).join("")}const p="47418374-a80c993bb5abb784419bb47e5",y=async(s,i=1)=>{const t=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:i});return(await C.get(`https://pixabay.com/api/?key=${p}&q=${t}`)).data},f=document.querySelector(".form"),c=document.querySelector(".gallery"),r=document.querySelector(".load-more");let A=new w(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});r.setAttribute("hidden",!0);r.style.display="none";function g(){loader.style.display="block"}function h(){loader.style.display="none"}let a="",u=1,b=15;document.addEventListener("DOMContentLoaded",()=>{r.hidden=!0,r.style.display="none"});f.dataset.listenerAdded||(f.addEventListener("submit",s=>{if(s.preventDefault(),a=s.target.elements.search.value.trim(),g(),a)g(),y(a).then(t=>{t.hits.length<b&&(r.setAttribute("hidden",!0),r.style.display="none"),t.hits.length===0&&(r.setAttribute("hidden",!0),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})),c.innerHTML="",c.insertAdjacentHTML("beforeend",m(t.hits)),A.refresh()}).catch(t=>{d.error({title:"Error",message:`An error occurred: ${t.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}).finally(()=>{h()}),r.removeAttribute("hidden"),r.style.display="block";else{d.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),c.innerHTML="",h(),r.hidden=!0,r.style.display="none";return}return f.reset(),a}),f.dataset.listenerAdded=!0);r.addEventListener("click",async()=>{u+=1;try{const s=await y(a,u),i=Math.ceil(s.totalHits/b);c.insertAdjacentHTML("beforeend",m(s.hits));const t=c.firstElementChild;if(t){const{height:n}=t.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}if(u>=i)return r.setAttribute("hidden",!0),r.style.display="none",d.error({title:"Warning",message:"We're sorry, there are no more posts to load",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}catch(s){console.log(s)}});
//# sourceMappingURL=index.js.map
