const playerName = localStorage.getItem('player-name')

function clearStorage () {
  localStorage.removeItem('player-name')
}

clearStorage()