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

const controls = document.createElement('div');
container.appendChild(controls);
controls.setAttribute("class", "controls");
const sizebtn = document.createElement('button');

controls.appendChild(sizebtn);
sizebtn.setAttribute("class", "sizebtn");
sizebtn.textContent = "Resize"

row = 16;
column = 16;

// Resize grid button
sizebtn.addEventListener('click', () => {
    row = prompt("Enter your desired row length");
    column = prompt("Enter your desired column length");
    createGrid(row, column);
})
createGrid(row, column)

// Loop to initialize Grid
function createGrid() {
    for (i = 0; i < row; i++) {
        const row = document.createElement('div');

        for (j = 0; j < column; j++) {
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
}



// Content setup
const titlename = document.createElement('header');
titlename.textContent = "Etch-A-Sketch";
title.appendChild(titlename);

