const CANVAS_BACKGROUND_COLOR = '#fafafa'
const SNAKE_BODY_COLOR = ''
const SNAKE_BORDER_COLOR = ''

const snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150},
]

const gameCanvas = document.getElementById('gameCanvas')
const ctx = gameCanvas.getContext('2d')

ctx.fillStyle = CANVAS_BACKGROUND_COLOR

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)

drawSnake()

function drawSnake() {
  snakePosition.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {
  ctx.fillStyle = SNAKE_BODY_COLOR
  ctx.strokeStyle = SNAKE_BORDER_COLOR

  ctx.fillRect(snakePart.x, snakePart.y, 10, 10)
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)

}