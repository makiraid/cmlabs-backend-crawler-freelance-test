(()=>{var e=window.matchMedia("(max-width: 990px)");function n(e){if(e.matches)for(var n=!0,t=4,r=0,a=document.querySelectorAll(".content-description p"),c=[document.querySelector(".campaign-banner-container .banner.enterprise"),document.querySelector(".campaign-banner-container .banner.sme")];n;)a.length>t?(a[t].after(c[r]),r++,t+=4):(a[a.length-1].after(c[r]),r++),r>=c.length&&(n=!1);else{var o=document.querySelectorAll(".content-description .banner"),i=document.querySelector(".campaign-banner-container");o.forEach((function(e){return i.appendChild(e)}))}}document.addEventListener("DOMContentLoaded",(function(){n(e)})),e.addEventListener("change",n)})();