const form = document.querySelector('.join-form')
const name = document.getElementById('playerName')
const errorPara = document.getElementById('errorText')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (name.value === "") {
    errorPara.textContent = 'You need to type a name'
    setTimeout(() => {
    errorPara.textContent = ""
  }, 1000)
    return
  }
  console.log("form submitted for ", name.value)
  window.localStorage.setItem('player-name', name.value)
  location.replace('/game.html')
})