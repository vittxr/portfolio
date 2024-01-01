sidebar = document.querySelector(".navbar__mobile-modal")
anchor_nav = document.querySelectorAll(".navbar__mobile-list a")

anchor_nav.forEach((e, index) => {
    anchor_nav[index].addEventListener("click", closeMobileSidebar)
})

function closeMobileSidebar() {
    sidebar.classList.remove("navbar__mobile-modal--enabled")
    sidebar.classList.add("navbar__mobile-modal--disabled")

    let traces = document.querySelectorAll(".trace"); 
    traces[0].classList.remove("trace1--closed")
    traces[1].classList.remove("trace2--closed")
    traces[2].classList.remove("trace3--closed")
}