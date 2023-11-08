var IndexValue = 1;
var SpanNumber = document.querySelectorAll('.number span');
showColor(IndexValue);

function btnSlide(n) {
    showColor(IndexValue = n);
    navigateToPage(n);
}

function SideSlide(n) {
    showColor(IndexValue += n);
    navigateToPage(IndexValue);
}

function showColor(n) {
    var i;
    for (i = 0; i < SpanNumber.length; i++) {
        SpanNumber[i].style.background = "rgba(0,0,0,.3)";
    }
    SpanNumber[n - 1].style.background = "rgba(255,0,255)";
}

const Btn = document.querySelectorAll('button');
Btn.forEach(bt => {
    bt.addEventListener('click', () => {
        Btn.forEach(bt => {
            bt.classList.add('active')
        })
        bt.classList.remove('active')
    })
})

