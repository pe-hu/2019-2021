function changeMain() {
    const mainAll = document.querySelectorAll('main');
    mainAll.forEach(main => {
        if (main.hidden == false) {
            main.hidden = true;
        } else {
            main.hidden = false;
        }
    })
    pRandom();
};

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
};

function pRandom() {
    const allP = document.querySelectorAll('#main p');
    allP.forEach(p => {
        p.style.top = getRandom(10, 90) + "%";
        p.style.left = getRandom(10, 90) + "%";
        p.hidden = false;
    })
};

document.addEventListener("DOMContentLoaded", () => {
    pRandom()
});