// algorithme d'Euclide
// https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide

/**
 * compute greatest common divider of two natural numbers a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number} greatest common divider
 */
function gcd(a,b){
    do {
        let r = a % b
        a = b 
        b = r
    } while (b != 0)
    return a
}

// use function gcd
const x = 21
const y = 15
const g = gcd(x, y)
console.log("Le pgcd de", x, "et", y, "est", g)

// toutes les combinaisons entre 2 entiers de 1 à 21
// 1, 1
// 1, 2
// ...
// 1, 21
// 2, 2
// 2, 3
// ...
// 2, 21
// ..
// 21, 21
const max = 21
for (let i=1; i <= max; i++) {
    for (let j=i; j <= max; j++) {
        const gIJ = gcd(i,j)
        console.log("Le pgcd de", i,"et",j,"est",gIJ)
    }
}





