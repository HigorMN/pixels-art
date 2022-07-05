function createPixel(pixel, borda) {
  const pixelBord = document.getElementById('pixel-board');
  pixelBord.style.width = borda;

  for (let index = 0; index < pixel; index++) {
    const createDiv = document.createElement('div');
    createDiv.className = 'pixel white';
    pixelBord.appendChild(createDiv);
  }
}

createPixel(25, '310px');

function colorSelected() {
  const colorsSelected = document.getElementsByClassName('color selected');
  const colors = document.getElementsByClassName('color');
  const colorBlack = document.getElementById('black');
  const colorRed = document.getElementById('red');
  const colorBlue = document.getElementById('blue');
  const colorGreen = document.getElementById('green');
  colorBlack.classList.add('selected');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      if (colorsSelected.length === 1) {
        colorBlack.className = 'color';
        colorRed.className = 'color';
        colorBlue.className = 'color';
        colorGreen.className = 'color';
        event.target.className = 'color selected';
      }
    });
  }
}

colorSelected();

let colorsSelected = document.getElementsByClassName('color selected');
function pixelCores() {
  const pixelClass = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelClass.length; index += 1) {
    pixelClass[index].addEventListener('click', function (event) {
      if (colorsSelected.black) {
        event.target.id = 'black';
        event.target.className = 'pixel';
      }
      if (colorsSelected.red) {
        event.target.id = 'red';
        event.target.className = 'pixel';
      }
      if (colorsSelected.blue) {
        event.target.id = 'blue';
        event.target.className = 'pixel';
      }
      if (colorsSelected.green) {
        event.target.id = 'green';
        event.target.className = 'pixel';
      }
    });
  }
}

pixelCores();

function clearLimp() {
  const clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', function () {
    const pixelClass = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelClass.length; index += 1) {
      pixelClass[index].className = 'pixel white';
      pixelClass[index].id = '';
    }
  });
}

clearLimp();

function pixelCreate() {
  const boxNumber = document.getElementById('board-size');
  const buttonVQV = document.getElementById('generate-board');

  buttonVQV.addEventListener('click', function () {
    const calc = boxNumber.value * boxNumber.value;
    const soma = 62 * boxNumber.value
    if (calc >= 25) {
      removePixel();
      createPixel(calc, `${soma}px`);
      pixelCores();
    } 
    if(calc >= 2500){
      removePixel();
      createPixel(2500, '3100px')
      pixelCores();
    }
    else {
      alert('Board inválido!');
    }
  });
}

pixelCreate();

function removePixel() {
  const pixelBord = document.getElementById('pixel-board');
  pixelBord.innerHTML = '';
}
