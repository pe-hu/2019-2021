'use strict'

async function whenJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    projects(index);
}

function projects(obj) {
    const nav = document.querySelector('nav');
    const projects = obj.projects;
    for (const project of projects) {
        const projectP = document.createElement('p');
        projectP.innerHTML = `
        <time>${project.from}</time>
        <strong>${project.title}</strong>
        <time>${project.to}</time>
        `
        nav.appendChild(projectP);
        projectP.addEventListener('click', function () {
            document.body.className = "open"
            document.querySelector('#form').textContent = project.form
            document.querySelector('#title').textContent = project.title
            document.querySelector('#open').textContent = project.open
            document.querySelector('#close').textContent = project.close
            document.querySelector('#at').textContent = project.at
            document.querySelector('#entrance').textContent = project.entrance
            const moreinfo = document.querySelector('#link');
            moreinfo.hidden = project.more
            moreinfo.href = project.link
            moreinfo.textContent = "More Info"
            moreinfo.setAttribute('target','_blank')
            document.querySelector('#by').textContent = project.by
        });
    }
}

function articleClose() {
    document.body.classList.remove("open")
};