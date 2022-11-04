// algorithme d'Euclide
// https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide
let a = 21
let b = 15

// calculer le pgcd
do {
    let r = a % b
    a = b 
    b = r
} while (b != 0)

console.log("Le pgcd est: ", a)
