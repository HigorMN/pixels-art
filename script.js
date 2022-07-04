function createPixel(pixel, borda) {
  let pixelBord = document.getElementById('pixel-board');
  pixelBord.style.width = borda;

  for (let index = 0; index < pixel; index++) {
    let createDiv = document.createElement('div');
    createDiv.className = 'pixel';
    pixelBord.appendChild(createDiv);
  }
}

createPixel(25, '360px');

function colorSelected() {
  let colorsSelected = document.getElementsByClassName('color selected');
  let colors = document.getElementsByClassName('color');
  let colorBlack = document.getElementById('black');
  let colorRed = document.getElementById('red');
  let colorBlue = document.getElementById('blue');
  let colorGreen = document.getElementById('green');
  colorBlack.classList.add('selected')

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      if (colorsSelected.length === 1) {
        colorBlack.className = 'color'
        colorRed.className = 'color'
        colorBlue.className = 'color'
        colorGreen.className = 'color'
        event.target.className = 'color selected';
      }
    });
  }
}

colorSelected();
