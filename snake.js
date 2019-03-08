const CANVAS_BACKGROUND_COLOR = '#fafafa'

const gameCanvas = document.getElementById('gameCanvas')
const ctx = gameCanvas.getContext('2d')

ctx.fillStyle = CANVAS_BACKGROUND_COLOR

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)