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
console.log(`3 fraises: ${3*prixFraiseTagada}€`)
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

// foreach element of ...
for (let bonbon of bonbons) {
    console.log(bonbon)
}

console.log('🦜')

// index : 0 to length - 1
// NB: loop variable has type string !
for (let indexString in bonbons) {
    let index = Number.parseFloat(indexString)
    console.log(`- ${index+1}: ${bonbons[index]}`)
}

// old C loop
for (let i=0; i < bonbons.length; i++) {
    console.log(`* ${i+1}: ${bonbons[i]}`)
}

bonbons.forEach(b => console.log(b))

bonbons.forEach((b,i) => console.log(`~ ${i+1}: ${b}`))

const indexChoice = 2
const bonbon = bonbons[indexChoice]
console.log(`bonbon choisi à l'indice ${indexChoice} : ${bonbon}`)

let cpt = 60
while (cpt >= 0) {
    console.log(`Explosion dans ${cpt} secondes`)
    cpt -= 5
}

cpt = 0
do {
    console.log(`Le chat a fait ${cpt} pas`)
    cpt += 100
} while (cpt <= 1000)



