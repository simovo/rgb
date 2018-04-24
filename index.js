function randomNumber() {
  return Math.floor(256 * Math.random());
}

function randomColorCode() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box');

let correctAnswer;
let score = 0;
document.querySelector('.score').textContent = score;

function newStage() {
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()]
  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  correctAnswer = Math.floor(Math.random() * 3);
  colorCodeEl.textContent = colorCodes[correctAnswer];
}

boxes.forEach((el, index) => {
  el.addEventListener('click', () => {
    if (correctAnswer === index) {
      alert('맞았습니다!');
      document.querySelector('.modal.right').classList.add('show');
      score++;
    } else {
      alert('틀렸습니다!');
      score = 0;
    }
    document.querySelector('.score').textContent = score;
    newStage();
  })
})

document.querySelector('.modal.right .close').addEventListener('click', () => {
  document.querySelector('.modal.right').classList.remove('show');
})

newStage();