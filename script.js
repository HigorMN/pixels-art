function createPixel(pixel, borda) {
  let pixelBord = document.getElementById('pixel-board');
  pixelBord.style.width = borda;

  for (let index = 0; index < pixel; index++) {
    let createDiv = document.createElement('div');
    createDiv.className = 'pixel white';
    pixelBord.appendChild(createDiv);
  }
}

createPixel(25, '310px');

function colorSelected() {
  let colorsSelected = document.getElementsByClassName('color selected');
  let colors = document.getElementsByClassName('color');
  let colorBlack = document.getElementById('black');
  let colorRed = document.getElementById('red');
  let colorBlue = document.getElementById('blue');
  let colorGreen = document.getElementById('green');
  colorBlack.classList.add('selected');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      if (colorsSelected.length === 1) {
        console.log(event.target.id);
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
  let pixelClass = document.getElementsByClassName('pixel');
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
  let clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', function () {
    let pixelClass = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelClass.length; index += 1) {
      pixelClass[index].className = 'pixel white';
      pixelClass[index].id = '';
    }
  });
}

clearLimp();
