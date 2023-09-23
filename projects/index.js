'use strict'

async function whoJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    projects(index);
}

function projects(obj) {
    const modal = document.querySelector('#modal');
    const projects = obj.projects;
    for (const project of projects) {
        const projectA = document.createElement('a');
        projectA.href = project.link;
        projectA.setAttribute('target', '_blank');
        projectA.innerHTML = `
        <small>${project.by}</small>
        <time>${project.year}</time>
        <strong>${project.title}</strong>
        `
        modal.appendChild(projectA);
    }
}