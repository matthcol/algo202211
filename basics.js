let nombrePas = 50
const prixFraiseTagada = 0.1
console.log("Miaou, je fais " + nombrePas + " pas")
console.log(`Miaou, je fais ${nombrePas} pas`)
console.log('J\'ai "un chat"')
nombrePas = 70
console.log(`Miaou, je fais ${nombrePas} pas`)
nombrePas = nombrePas + 20
console.log(`Miaou, je fais ${nombrePas} pas`)
nombrePas += 10
console.log(`Miaou, je fais ${nombrePas} pas`)
nombrePas -= 30
console.log(`Miaou, je fais ${nombrePas} pas`)
console.log(`Une fraise: ${prixFraiseTagada}€`)
console.log(`Deux fraises: ${2*prixFraiseTagada}€`)
console.log(`3 fraises: ${12*prixFraiseTagada}€`)
nombrePas++ // += 1
nombrePas-- // -=1 

const prixTotal = -prixFraiseTagada * (nombrePas - 1000) / (nombrePas + 10)
console.log(`Prix total : ${prixTotal}€`)

console.log("Kilo informatique: " + 2**10)


if (nombrePas < 150){
    console.log("ça n'avance pas")
} else {
    console.log("j'ai bien avancé, une petite sieste s'impose")
}

const bonbons = [ 
        "fraise tagada", "dragibus", 
        "schtroumpf", "carambar",
        "pimousse", "mammouth ball"
    ]

for (let bonbon of bonbons) {
    console.log(bonbon)
}

console.log('🦜')





