const btn = document.querySelectorAll(".btn");
btn.forEach(button => {
    button.addEventListener('click',btnFunction)
})
function btnFunction() {
    let button = this;
    button.classList.add('clicked');
}