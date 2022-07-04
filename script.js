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
