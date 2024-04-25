const abrir = document.querySelector(".hamburguer");
const nav = document.querySelector("#nav");
const close = document.querySelector(".close")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
});

close.addEventListener("click", ()=>{
    nav.classList.remove("visible");
});