import{a as f,S as g,i as n}from"./assets/vendor-BH9GyP-n.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="49623840-0f31145568b741aa8d3c39eac",y="https://pixabay.com/api/";f.defaults.baseURL=y;const p={key:h,image_type:"photo",orientation:"horizontal",safesearch:!0};function v(o){const a={...p,q:o};return f.get("",{params:a}).then(r=>(console.log(r),r.data)).catch(r=>{throw console.error("Error:",r),r})}const u=document.querySelector(".gallery");function L(o){return o.map(({webformatURL:a,largeImageURL:r,tags:i,likes:e,views:t,comments:l,downloads:m})=>`<li class="gallery-item">
    <a href="${r}" class="gallery-item-link">
    <img class="gallery-item-img" src="${a}" alt="${i}"/>
    </a>
    <div class="gallery-item-info-wrapper">
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Likes</h2>
        <p class="gallery-item-info-value">${e}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Views</h2>
        <p class="gallery-item-info-value">${t}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Comments</h2>
        <p class="gallery-item-info-value">${l}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Downloads</h2>
        <p class="gallery-item-info-value">${m}</p>
      </div>
    </div>
  </li>`).join("")}function b(){u.innerHTML=""}const d=document.querySelector(".loader");function w(){d.hidden=!1}function c(){d.hidden=!0}const S=new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20fill='%23FAFAFB'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20fill='%23FAFAFB'%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.06%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062l-3.97-3.97-3.968%203.97a.753.753%200%200%201-1.225-.244.751.751%200%200%201%20.163-.818L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/svg%3e",import.meta.url).href,s=document.querySelector(".form");console.dir(s);s.addEventListener("submit",A);const P=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,enableKeyboard:!0,disableScroll:!0,fadeSpeed:400,overlayOpacity:1});function A(o){o.preventDefault(),b();const a=s.elements["search-text"].value.trim();console.log(a),a&&(w(),v(a).then(({hits:r})=>{if(r.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",maxWidth:"400",iconUrl:S}),c();return}u.innerHTML=L(r),P.refresh()}).catch(()=>{n.error({title:"Error",message:"Something went wrong. Please try again later!",backgroundColor:"#ef4040",messageColor:"#ffffff"})}).finally(()=>{c()}),s.reset())}
//# sourceMappingURL=index.js.map
