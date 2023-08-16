const container = document.querySelector('#container');
let isMouseDown = false;
let gridSize = 1024;
let canvasSize = 800;
let itemSize = 25;

createGrid();

function getGridSize() {
const sliderValue = parseInt(slider.value)
    gridSize = sliderValue*sliderValue;
    itemSize = canvasSize/sliderValue;
    createGrid();
}

function createGrid() {
removeGrid();
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
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function clearGrid() {
    const gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(item => {
        item.style.backgroundColor = '';
    })
}

const slider = document.querySelector('#size');
slider.addEventListener('input', getGridSize);

const sliderValueDiv = document.querySelector('#slidervalue');
slider.addEventListener('input', () => {
    sliderValueDiv.textContent = slider.value;
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearGrid);