// Initialize default grid

let gridSize = 16;
let squareColor = '#F78888';
makeGrid(gridSize);
mouseHover();

// Function to make a square grid

function makeGrid(gridSize) {
  clearGrid();
  const container = document.querySelector('#container');
  container.style.outline = 'solid 5px white';
  container.style.margin = 'auto';
  container.style.width = '630px';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i=0; i < gridSize*gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
    };
};

// Function for mouse hover effect

function mouseHover() {
  const square = document.querySelectorAll('.square');
    square.forEach(square => {
      square.style.backgroundColor = squareColor;
      square.style.paddingBottom = '100%';
      square.style.width = '100%';
      square.style.position = 'relative'; 
      square.style.transition = 'all 0.25s linear';
      square.addEventListener('mouseenter', event => {
        square.style.backgroundColor = randomColor();
      });
    });  
};

// Function for random color variable

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return randColor = `rgb(${r},${g},${b})`;
}

// Function for throwback mode hover effect

function throwbackHover() {
  const square = document.querySelectorAll('.square');
    square.forEach(square => {
      square.style.backgroundColor = '#d3d3d3';
      square.style.paddingBottom = '100%';
      square.style.width = '100%';
      square.style.position = 'relative'; 
      square.addEventListener('mouseenter', event => {
        square.style.backgroundColor = '#939799';
      });
    });  
};

// Function to remove squares from grid

function clearGrid() {
  const square = document.querySelectorAll('.square');
  square.forEach((square) => {
    square.remove();
  });
};

// Button to erase hover effect

const erase = document.querySelector('#erase');
const eraseButton = document.createElement('button');
eraseButton.classList.add('main', 'buttons');
eraseButton.textContent = 'Erase';
erase.appendChild(eraseButton);
eraseButton.addEventListener('click', event => {
  const square = document.querySelectorAll('.square');
  square.forEach((square) => {
    square.style.backgroundColor = squareColor;
  });
});

// Button to change squares in grid by asking user for number of squares per side

const size = document.querySelector('#size');
const sizeButton = document.createElement('button');
sizeButton.classList.add('main', 'buttons');
sizeButton.textContent = 'Size';
size.appendChild(sizeButton);
sizeButton.addEventListener('click', event => {
  do {
    gridSize = prompt('How many squares per side? ( 2 - 64 )');
  }
  while ((gridSize < 2) || (gridSize > 64) || isNaN(gridSize));
  makeGrid(gridSize);
  mouseHover();
});

// Button to change background color of squares and buttons

const background = document.querySelector('#background');
const backgroundButton = document.createElement('button');
backgroundButton.classList.add('main', 'buttons');
backgroundButton.textContent = 'Color';
background.appendChild(backgroundButton);
backgroundButton.addEventListener('click', event => {
  squareColor = prompt('What color?');
  makeGrid(gridSize);
  mouseHover();
  const buttonsStyle = document.querySelectorAll('.buttons');
  buttonsStyle.forEach(buttonsStyle => {
    buttonsStyle.style.backgroundColor = squareColor;  
  });
});

// Button to engage throwback mode

const throwback = document.querySelector('#throwback');
const throwButton = document.createElement('button');
throwButton.classList.add('main', 'buttons');
throwButton.textContent = 'Throwback';
throwback.appendChild(throwButton);
throwButton.addEventListener('click', event => {
  document.body.style.backgroundColor = 'red';
  const title = document.querySelector('#title');
  title.textContent = 'Etch-a-Sketch';
  title.style.color = '#e6c200';
  makeGrid(64);
  throwbackHover();
  const disableButton = document.querySelectorAll('.main');
  disableButton.forEach(disableButton => {
  disableButton.disabled = true;
  disableButton.style.cursor = 'default';
  });
  const buttonsStyle = document.querySelectorAll('.buttons');
  buttonsStyle.forEach(buttonsStyle => {
    buttonsStyle.style.backgroundColor = '#d3d3d3'; 
    buttonsStyle.style.border = ''; 
    buttonsStyle.style.outline = '';
  });
  const throwButton = document.querySelectorAll('.throwback');
  throwButton.forEach(throwButton => {
    throwButton.style.backgroundColor = 'white';
    throwButton.style.color = 'black';
  });
});

// Button to restart to default settings

const defaultMode = document.querySelector('#default');
const defaultButton = document.createElement('button');
defaultButton.classList.add('buttons', 'throwback');
defaultButton.textContent = 'Default';
defaultMode.appendChild(defaultButton);
defaultButton.addEventListener('click', event => {
  gridSize = 16;
  squareColor = '#F78888';
  document.body.style.backgroundColor = '#90ccf4';
  const title = document.querySelector('#title');
  title.textContent = 'Etch';
  title.style.color = 'white';
  makeGrid(gridSize);
  mouseHover();
  const disableButton = document.querySelectorAll('.main');
  disableButton.forEach(disableButton => {
  disableButton.disabled = false;
  });
  const buttonsStyle = document.querySelectorAll('.buttons');
  buttonsStyle.forEach(buttonsStyle => {
    buttonsStyle.style.backgroundColor = '#F78888';
    buttonsStyle.style.cursor = 'pointer';
    buttonsStyle.style.outline = 'none';
    buttonsStyle.style.border = 'solid 2.5px white';
  const throwButton = document.querySelector('.throwback');
    throwButton.style.color = 'white';
  });
});

// Style for background and title

document.body.style.backgroundColor = '#90ccf4';
const title = document.querySelector('#title');
title.textContent = 'Etch';
title.style.textAlign = 'center';
title.style.fontFamily = 'Arial';
title.style.fontWeight = 'bold';
title.style.fontSize = 'xx-large';
title.style.color = 'White';

// Style for Grid Container for Buttons

const header = document.querySelector('#header');
header.style.display = 'grid';
header.style.gridTemplateColumns = 'repeat(5, 1fr)';
header.style.width = '200px';
header.style.margin = 'auto';
header.style.gap = '10px';
header.style.justifyContent = 'center';
header.style.paddingBottom = '20px';

// Style for All Buttons

const buttonsStyle = document.querySelectorAll('.buttons');
buttonsStyle.forEach(buttonsStyle => {
  buttonsStyle.style.backgroundColor = squareColor;
  buttonsStyle.style.border = 'solid 2.5px white';
  buttonsStyle.style.color = 'white';
  buttonsStyle.style.fontWeight = 'bold';
  buttonsStyle.style.padding = '15px 32px';
  buttonsStyle.style.textAlign = 'center';
  buttonsStyle.style.fontSize = '16px';
  buttonsStyle.style.fontFamily = 'Arial';
  buttonsStyle.style.cursor = 'pointer';
  buttonsStyle.style.outline = 'none';
});