let board, player

function showBoard() {
  let squares = document.getElementsByTagName('td')
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
    square.addEventListener('click', () => {
      if (!square.innerHTML) {
        board.push(player)
        square.innerHTML = player
        if (player === 'X') player = 'O'
        else player = 'X'
        if (board.length === 9) {
          let node = document.createElement('P')
          let textNode = document.createTextNode('Game Over')
          node.appendChild(textNode)
          node.id = 'gameOverTxt'
          document.getElementById('gameOver').appendChild(node)
        }
      }
    })
  }
}

function restart() {
  document.getElementById('restart').addEventListener('click', () => {
    if (board.length === 9) {
      let parent = document.getElementById('gameOver')
      let child = document.getElementById('gameOverTxt')
      parent.removeChild(child)
    }
    let squares = document.getElementsByTagName('td')
    for (let i=0; i<squares.length; i++) {
      squares[i].innerHTML = ''
      board = []
    }
  })
}

function init() {
  board = []
  player = 'X'
  showBoard()
  restart()
}

init()
