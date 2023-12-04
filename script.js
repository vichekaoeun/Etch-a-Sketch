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

// Loop to initialize Grid
for (i = 0; i < 16; i++) {
    const row = document.createElement('div');

    for (j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.setAttribute("class", "grids");
        gridContainer.appendChild(grid);

        // Drawing Mechanic
        grid.addEventListener('mouseover', function () {
            this.classList.add("change-color");
        });
    }

    gridContainer.appendChild(row);
}


const controls = document.createElement('div');
container.appendChild(controls);
controls.setAttribute("class", "controls");

// Content setup
const titlename = document.createElement('header');
titlename.textContent = "Etch-A-Sketch";
title.appendChild(titlename);

