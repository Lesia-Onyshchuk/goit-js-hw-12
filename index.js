import{a as C,S as A,i as f}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(r){return r.map(({webformatURL:s,tags:o,largeImageURL:n,likes:e,views:t,comments:a,downloads:L})=>`<li class="li-item">
             <a class="gallery-link" href="${n}">
               <img class="gallery-img" src="${s}" alt="${o}" width="300">
             </a>
               <ul class="image-description">
               <li>
                 <h2 class="title">Likes</h2>
                 <p>${e}</p>
               </li>
               <li>
               <h2 class="title">Views</h2>
               <p>${t}</p>
               </li>
               <li>
                 <h2 class="title">Comments</h2>
                 <p>${a}</p>
               </li>
               <li>
                 <h2 class="title">Downloads</h2>
                 <p>${L}</p>
               </li>
               </ul>
       </li>`).join("")}const p="47418374-a80c993bb5abb784419bb47e5",y=async(r,s=1)=>{const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:200,page:s});return(await C.get(`https://pixabay.com/api/?key=${p}&q=${o}`)).data},c=document.querySelector(".form"),d=document.querySelector(".gallery"),i=document.querySelector(".load-more");let S=new A(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});i.setAttribute("hidden",!0);i.style.display="none";function g(){loader.style.display="block"}function h(){loader.style.display="none"}let l="",u=1,b=200;document.addEventListener("DOMContentLoaded",P);function P(){i.hidden=!0,i.style.display="none"}c.dataset.listenerAdded||(c.addEventListener("submit",r=>{if(r.preventDefault(),i.setAttribute("hidden",!0),l=r.target.elements.search.value.trim(),g(),l)g(),y(l).then(o=>{o.hits.length<b&&i.setAttribute("hidden",!0),o.hits.length===0&&(i.setAttribute("hidden",!0),f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})),d.innerHTML="",d.insertAdjacentHTML("beforeend",m(o.hits)),S.refresh()}).catch(o=>{f.error({title:"Error",message:`An error occurred: ${o.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}).finally(()=>{h()}),i.removeAttribute("hidden");else{f.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),d.innerHTML="",h();return}return c.reset(),l}),c.dataset.listenerAdded=!0);i.addEventListener("click",async()=>{u+=1;try{const r=await y(l,u),s=Math.ceil(r.totalHits/b);if(d.insertAdjacentHTML("beforeend",m(r.hits)),u>=s)return i.hidden=!0,f.error({title:"Warning",message:"We're sorry, there are no more posts to load",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}catch(r){console.log(r)}});
//# sourceMappingURL=index.js.map
