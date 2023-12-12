const gamea = document.querySelector('#gamea')

//#region 
let t=[]
for(let i=0;i<100;i++){
    t.push(i+1)
}
//#endregion
//#region 
    
for(let i=0; i<100; i++){
let pos1= Math.floor(Math.random()*12)
let pos2= Math.floor(Math.random()*12)
let temp=t[pos1]
t[pos1]=t[pos2]
t[pos2]=temp
}

//#endregion

let nextNumber = 1

//#region 

for (let i= 0; i < 12; i++) {
    let szamDoboz = document.createElement ('div')
    szamDoboz.innerText=t[i] 
    gamea.appendChild(szamdoboz)
    szamDoboz.addEventListener('click',function() {
    if (szamDoboz.innerText== nextNumber){
        szamDoboz.classList.add('rejtett')
        nextNumber++
    }
})

}
//#endregion

//#region 
const szamlalo= document.querySelector('#szamlalo')

let ido=0
setInterval(function (){
    szamlalo.innerText= ido
    ido++
},1000)

//#endregion
