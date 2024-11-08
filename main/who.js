'use strict'

async function whoJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    projects(index);
};

function projects(obj) {
    for (const project of obj.projects) {
        const projectA = document.createElement('a');
        projectA.innerHTML = `
        <sup>${project.year}</sup>
        ${project.title}
        `;
        projectA.href = project.link;
        projectA.setAttribute('target', '_blank');
        document.querySelector(`#${project.by}`).appendChild(projectA);
    };
};