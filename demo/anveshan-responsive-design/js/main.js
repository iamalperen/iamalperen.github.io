window.onscroll = function () {
    scroll();
};

const header = document.getElementsByTagName('header')[0];
const sticky = header.offsetTop;

function scroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Prevent CSS Cache
document.getElementById('style').href = "css/styles.css?v=" + Date.now();
