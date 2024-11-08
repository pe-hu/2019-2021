'use strict'

async function whenJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    projects(index);
};

function projects(obj) {
    for (const project of obj.projects) {
        const li = document.createElement('li');
        li.innerHTML = `
        <time>${project.from}</time>
        <time>${project.to}</time>
        <strong>${project.title}</strong>
        `;
        document.querySelector('menu').appendChild(li);

        li.addEventListener('click', function () {
            fiveWs(project)
        }, false);
    };
};

async function projectJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    thisProject(index);
};

function thisProject(obj) {
    document.title = obj.title + ' | ' + obj.info.from + ' - ' + obj.info.to;
    const thisProject = document.querySelector('header strong');
    const startThis = document.querySelector('header #start');
    const endThis = document.querySelector('header #end');
    thisProject.textContent = obj.title;
    startThis.textContent = obj.info.from;
    endThis.textContent = obj.info.to;
    fiveWs(obj.info);

    let thisHTML = document.createElement("section");
    document.querySelector('menu').appendChild(thisHTML);
    if (obj.html) {
        for (const html of obj.html) {
            let element = document.createElement(html.element);
            element.innerHTML = html.inner;
            thisHTML.appendChild(element);
        };
    };

    if (obj.img) {
        for (const img of obj.img) {
            let figure = document.createElement("figure");
            figure.id = img.id;
            thisHTML.appendChild(figure);

            figure.style.backgroundImage = `url(${img.img[0]})`;

            let left = document.createElement("span");
            left.setAttribute("dir", "ltr");
            figure.appendChild(left);
            left.addEventListener("click", () => {
                pre(img.img, figure)
            });

            let right = document.createElement("span");
            right.setAttribute("dir", "rtl");
            figure.appendChild(right);
            right.addEventListener("click", () => {
                next(img.img, figure)
            })

            if (img.alt) {
                let figcaption = document.createElement("figcaption");
                figure.appendChild(figcaption);
                for (const alt of img.alt) {
                    figcaption.innerHTML += alt;
                }
            }
        };
    }
};

let i = 0;
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
    query.style.backgroundImage = `url('${arr[i]}')`;
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
    query.style.backgroundImage = `url('${arr[i]}')`;
};

function fiveWs(project) {
    const title = document.querySelector('#title');
    if (project.link) {
        title.innerHTML = `
        <a href="${project.link}" target="_blank">
        ${project.title}
        </a>
        `;
    } else if (project.project) {
        title.innerHTML = `
        <a href="?project=${project.project}">
        ${project.title}
        </a>
        `;
    } else {
        title.innerHTML = `<b>${project.title}</b>`;
    };

    document.querySelector('#form').textContent = project.form;
    document.querySelector('#open').textContent = project.open;
    document.querySelector('#close').textContent = project.close;
    document.querySelector('#at').textContent = project.at;
    document.querySelector('#entrance').textContent = project.entrance;
    document.querySelector('#by').textContent = project.by;
};