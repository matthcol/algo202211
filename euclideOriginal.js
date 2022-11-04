// algorithme d'Euclide
// https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide
let a = 21
let b = 15


// calculer le pgcd
while (a !=b) {
    if (a>b) {
        a = a -b
    } else {
        b = b -a
    }    
}

console.log("Le pgcd est: ", a)
