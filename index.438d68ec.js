!function(){const e=document.querySelector(".button-menu"),t=document.querySelector(".modal");e.addEventListener("click",(()=>{e.classList.toggle("is-open"),t.classList.toggle("is-hidden")}));const o="THEME";body=document.querySelector("body"),themeSwitcher=document.querySelector(".theme-switcher"),localStorage.getItem(o)&&(body.classList.toggle(localStorage.getItem(o)),"dark"===localStorage.getItem(o)&&(themeSwitcher.checked=!0)),themeSwitcher.addEventListener("change",(e=>{e.target.checked?(body.classList.toggle("dark"),localStorage.setItem(o,"dark")):(body.classList.toggle("dark"),localStorage.setItem(o,"light"))}))}();
//# sourceMappingURL=index.438d68ec.js.map