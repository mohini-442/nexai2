// preloader
// setTimeout(() => {
//     document.getElementById("preloader").classList.add("opacity-0");
//     document.getElementById("preloader").classList.add("pointer_event_none")
//     document.body.classList.remove("overflow-hidden")
// }, 2000);


// / navbar
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}


window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 300) {
        backtotop.style.display = 'block'
    }
    else {
        backtotop.style.display = 'none'
    }
})

setTimeout(() => {
    document.getElementById("preloader").classList.add("d-none");
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
}
    , 3000);