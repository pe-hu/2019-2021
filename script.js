const hello = document.querySelector('#hello')

function changeMain() {
    const mainAll = document.querySelectorAll('main');
    mainAll.forEach(main => {
        if (main.hidden == false) {
            main.hidden = true;
        } else {
            main.hidden = false;
        }
    })
}

const dialog = document.querySelector('#modal');
function onModal() {
    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
}

const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', () => {
    dialog.close();
});