'use strict';

const field = document.querySelector('.field');
const cellSize = 100;
const empty = {
    top: 0,
    left: 0
};

const cells = [];
cells.push(empty);


for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = i;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        left: left,
        top: top,
        element: cell
    })

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    field.append(cell);
}







