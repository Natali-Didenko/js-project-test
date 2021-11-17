const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['rgb(112, 10, 10)', 'rgb(9, 53, 149)', 'rgb(14, 149, 9)', 'rgb(166, 195, 36)', 'rgb(190, 36, 195)', 'rgb(36, 184, 195)', 'rgb(213, 231, 230)']

let time = 0
let score = 0


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})


timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time')) 
        screens[1].classList.add('up')
    startGame()
    }
})


board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
function decreaseTime() {
    if (time === 0) {
        finishGame()
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.background = getRandomColor();
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function setColor(element) {
    element.style.backgroundColor = colors
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}