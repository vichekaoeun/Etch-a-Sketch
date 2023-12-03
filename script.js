// Grid Setup
const container = document.querySelector(".container");
const title = document.createElement('div');
const grid = document.createElement('div');
const controls = document.createElement('div');
container.appendChild(title);
container.appendChild(grid);
container.appendChild(controls);
grid.setAttribute("class", "grids");
title.setAttribute("class", "title");
controls.setAttribute("class", "controls");

// Content setup
const titlename = document.createElement('header');
titlename.textContent = "Etch-A-Sketch";
title.appendChild(titlename);


