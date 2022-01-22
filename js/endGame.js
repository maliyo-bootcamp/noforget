const playerName = localStorage.getItem('player-name')
const retryButton = document.getElementById("retry")

function clearStorage () {
  localStorage.removeItem('player-name')
}

retryButton.addEventListener("click", () => {
  console.log('trying to retry')
  location.replace("/")
})

clearStorage()