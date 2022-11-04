// algorithme d'Euclide
// https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide
let a = 21
let b = 15

// calculer le pgcd
while (b != 0) {
    let t = b
    b = a % b
    a = t
}

console.log("Le pgcd est: ", a)
