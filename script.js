const container = document.querySelector('#container');
let isMouseDown = false;
let gridSize;
let canvasSize = 800;
let itemSize;

function getGridSize() {
let response = prompt("Please enter a grid size 1-100");
response = parseInt(response);
if (response>100 || response<1) {
    return "Number is outside of specified range";
}
else{
    gridSize = response*response;
    itemSize = canvasSize/response;
    createGrid();
    }
}

function createGrid() {
for (i=0; i<gridSize; i++) {
const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.cssText = `border: 1px solid black; height: ${itemSize}px; width: ${itemSize}px`;


grid.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    grid.style.backgroundColor = 'black';
    e.preventDefault();
});
grid.addEventListener('mouseup', () => {
    isMouseDown = false;
});
grid.addEventListener('mouseover', () => {
    if(isMouseDown == true) {
        grid.style.backgroundColor = 'black';
    }
});
grid.addEventListener('drag', (e) => {
    e.preventDefault();
})

container.appendChild(grid);
}
}

function removeGrid() {
    container.removeChild(grid);
}

const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', getGridSize);