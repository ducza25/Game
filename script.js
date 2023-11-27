const gamea = document.querySelector('#gamea')



for (let i= 0; i < 12; i++) {
    let szamdoboz;
    szamdoboz = document.createElement ('div')
szamdoboz.innerHTML = i + 1
gamea.appendChild(szamdoboz)

szamdoboz.addEventListener('click',function (){
  this.classList.add('rejtett')
})
    
}
