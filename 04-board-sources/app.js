const board = document.querySelector('#board')
const colors = ['rgb(112, 10, 10)', 'rgb(9, 53, 149)', 'rgb(14, 149, 9)', 'rgb(166, 195, 36)', 'rgb(190, 36, 195)', 'rgb(36, 184, 195)', 'rgb(213, 231, 230)']
const SQUARES_NAMBER = 2000

for (let i = 0; i < SQUARES_NAMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))
    
    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
