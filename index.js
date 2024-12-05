import{S as b,a as L,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(o){return o.map(({webformatURL:s,tags:t,largeImageURL:l,likes:e,views:r,comments:i,downloads:y})=>`<li class="li-item">
             <a class="gallery-link" href="${l}">
               <img class="gallery-img" src="${s}" alt="${t}" width="300">
             </a>
               <ul class="image-description">
               <li>
                 <h2 class="title">Likes</h2>
                 <p>${e}</p>
               </li>
               <li>
               <h2 class="title">Views</h2>
               <p>${r}</p>
               </li>
               <li>
                 <h2 class="title">Comments</h2>
                 <p>${i}</p>
               </li>
               <li>
                 <h2 class="title">Downloads</h2>
                 <p>${y}</p>
               </li>
               </ul>
       </li>`).join("")}let S=new b(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});const f="47418374-a80c993bb5abb784419bb47e5";let c=2,C=15;const u=document.querySelector(".gallery"),d=document.querySelector(".load-more"),m=async o=>{const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",_limit:C,_page:c});L.get(`https://pixabay.com/api/?key=${f}&q=${s}`).then(t=>{console.log(t),t.data.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),u.innerHTML="",console.log(t),u.insertAdjacentHTML("beforeend",g(t.data.hits)),S.refresh()}).catch(t=>{n.error({title:"Error",message:`An error occurred: ${t.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}).finally(()=>{h()})};d.addEventListener("click",async()=>{try{const o=await m(value);g(o),c+=1,c>1&&(d.textContent="Load more")}catch(o){console.log(o)}});const a=document.querySelector(".form"),$=document.querySelector(".gallery");function p(){loader.style.display="block"}function h(){loader.style.display="none"}a.dataset.listenerAdded||(a.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.search.value.trim();if(p(),t)p(),m(t);else{n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),$.innerHTML="",h();return}a.reset()}),a.dataset.listenerAdded=!0);
//# sourceMappingURL=index.js.map
