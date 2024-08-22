const navHide = document.querySelector("#navHide");
const navOpen = document.querySelector("#navOpen");
const navClose = document.querySelector("#navClose");

navOpen.addEventListener("click", () => {
    navHide.classList.add("visible");
})

navClose.addEventListener("click", () => {
    navHide.classList.remove("visible");
})