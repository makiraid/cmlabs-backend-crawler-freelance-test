(()=>{var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,t=/^[0-9]{8,15}$/;document.addEventListener("DOMContentLoaded",(function(){document.getElementById("btn-submit-contributor").addEventListener("click",(function(n){n.preventDefault(),function(){$("#btn-submit-contributor");var n=!0;$("#input-time").val($("input[name='time']:checked").val()),document.getElementById("form-schedule-meeting").querySelectorAll(".form-control").forEach((function(r){r.classList.remove("is-invalid"),r.classList.contains("form-required")&&"email"===r.type&&!r.value.match(e)&&(r.closest(".input-group").querySelector(".invalid-feedback").innerHTML=errorEmailFormat,r.classList.add("is-invalid"),n=!1),"tel"!==r.type||""===r.value.trim()||r.value.match(t)||(r.closest(".input-group").querySelector(".invalid-feedback").innerHTML=errorPhoneNumberFormat,r.classList.add("is-invalid"),n=!1),r.classList.contains("form-required")&&""==r.value.trim()&&(r.classList.add("is-invalid"),r.closest(".input-group").querySelector(".invalid-feedback").innerHTML=errorRequired,n=!1)})),""==$("#input-date").val()&&(n=!1);return n}()&&function(){var e=document.getElementById("btn-submit-contributor");e.setAttribute("disabled","");var t=document.getElementById("form-schedule-meeting"),n=new FormData(t);fetch("/data/schedule",{headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},method:"post",body:n}).then((function(e){return e.json()})).then((function(n){e.removeAttribute("disabled");var r=document.getElementById("toast-error"),i=document.getElementById("toast-success");1==n.status?(getCalendar({}),i.querySelector(".message").innerHTML=n.message,i.style.display="block",setTimeout((function(){i.style.display="none"}),3e3),t.querySelectorAll("input").forEach((function(e){"hidden"!=e.type&&(e.value="")})),t.querySelectorAll("textarea").forEach((function(e){e.value=""})),t.querySelectorAll("select").forEach((function(e){e.selectedIndex=0})),$("button.is-selected").removeClass("is-selected"),$("#input-date").val("")):(r.querySelector(".message").innerHTML=n.message,r.style.display="block",setTimeout((function(){r.style.display="none"}),3e3))})).catch((function(t){e.removeAttribute("disabled"),console.log(t)}))}()}))}),!1)})();