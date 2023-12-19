const gamea = document.querySelector('#gamea')
const startButton = document.querySelector('#start')
const szamlalo = document.querySelector('#szamlalo')
let t = []
let ido
let idozito
let nextNumber

function initNumbers() {
  for (let i = 0; i < 100; i++) {
    t.push(i + 1)
  }
}

function shuffleNumbers() {
  for (let i = 0; i < 100; i++) {
    let pos1 = Math.floor(Math.random() * 12)
    let pos2 = Math.floor(Math.random() * 12)
    let temp = t[pos1]
    t[pos1] = t[pos2]
    t[pos2] = temp
  }
}

function createBoxes() {
  for (let i = 0; i < 12; i++) {
    let szamDoboz = document.createElement('div')
    // szamDoboz.innerText = t[i]
    szamDoboz.classList.add('rejtett')
    gamea.appendChild(szamDoboz)

    szamDoboz.addEventListener('click', function () {
      if (szamDoboz.innerText == nextNumber) {
        szamDoboz.classList.add('rejtett')
        nextNumber++

        if (nextNumber == 13) {
          clearInterval(idozito)
        }
      }
    })
  }
}

function fillShowBoxes() {
  const szamdobozok = gamea.querySelectorAll('div')
  let i = 0
  for (szamDoboz of szamdobozok) {
    szamDoboz.innerText = t[i]
    szamDoboz.classList.remove('rejtett')
    i++
  }
}

function startTimer() {
  idozito = setInterval(function () {
    szamlalo.innerText = ido / 10
    ido++
  }, 1000)
}

initNumbers()
createBoxes()

startButton.addEventListener('click', function () {
  clearInterval(idozito)
  nextNumber = 1
  ido = 0
  shuffleNumbers()
  fillShowBoxes()
  startTimer()
})
