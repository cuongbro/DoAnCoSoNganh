var IndexValue = 3;
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

function navigateToPage(pageNumber) {
    var pageURL;

    // Gán URL cho từng trang dựa vào số trang
    switch (pageNumber) {
        case 1:
            pageURL = 'https://localhost:44363/Main/DSPhong';
            break;
        case 2:
            pageURL = 'https://localhost:44363/Main/DSPhong2';
            break;
        case 3:
            pageURL = 'https://localhost:44363/Main/DSPhong3';
            break;
        case 4:
            pageURL = 'https://localhost:44363/Main/DSPhong4';
            break;
        case 5:
            pageURL = 'https://localhost:44363/Main/DSPhong5';
            break;
        default:
            break;
    }
    window.location.href = pageURL;
}
