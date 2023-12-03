// Grid Setup
const container = document.querySelector(".container");
const title = document.createElement('div');
const gridContainer = document.createElement('div');
container.appendChild(title);
container.appendChild(gridContainer);
title.setAttribute("class", "title");
gridContainer.setAttribute("class", "gridContainer");
let row = document.getElementsByClassName("row");
let column = document.getElementsByClassName("column");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.setAttribute("class", "grids");
        gridContainer.appendChild(grid);
    }
}


const controls = document.createElement('div');
container.appendChild(controls);
controls.setAttribute("class", "controls");

// Content setup
const titlename = document.createElement('header');
titlename.textContent = "Etch-A-Sketch";
title.appendChild(titlename);

