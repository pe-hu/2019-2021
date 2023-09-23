let i = 0;

function slideIMG(arr, query) {
    document.querySelector(query).style.backgroundImage = `url('${arr[i]}')`
};

function next(arr, query) {
    if (i == 0) {
        i++;
    } else if (i == 1) {
        i++;
    } else if (i < arr.length - 1) {
        i++;
    } else if (i == arr.length - 1) {
        i = 0;
    }
    document.querySelector(query).style.backgroundImage = `url('${arr[i]}')`;
    console.log(i)
};

function pre(arr, query) {
    if (i == 0) {
        i = arr.length - 1;
    } else if (i == 1) {
        i--;
    } else if (i < arr.length - 1) {
        i--;
    } else if (i == arr.length - 1) {
        i--;
    }
    document.querySelector(query).style.backgroundImage = `url('${arr[i]}')`;
    console.log(i)
};