var mobileOpener = document.querySelector(".mobile-modal__opener")
var mobileModal = document.querySelector(".navbar__mobile-modal")


//animation toogle menu: 
mobileOpener.addEventListener("click", toogleDisplayModal)

function toogleDisplayModal() {
    let traces = document.querySelectorAll(".trace"); 

    if(mobileModal.classList.contains("navbar__mobile-modal--disabled")) {
       //open modal
       mobileModal.classList.remove("navbar__mobile-modal--disabled")
       mobileModal.classList.add("navbar__mobile-modal--enabled")

       traces[0].classList.add("trace1--closed")
       traces[1].classList.add("trace2--closed")
       traces[2].classList.add("trace3--closed")
    } else {
       //close modal
       mobileModal.classList.remove("navbar__mobile-modal--enabled")
       mobileModal.classList.add("navbar__mobile-modal--disabled")

       traces[0].classList.remove("trace1--closed")
       traces[1].classList.remove("trace2--closed")
       traces[2].classList.remove("trace3--closed")
    }
}