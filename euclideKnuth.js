// algorithme d'Euclide
// https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide

/**
 * compute greatest common divider of two natural numbers a and b
 * (Knuth version)
 * @param {number} a 
 * @param {number} b 
 * @returns {number} greatest common divider
 */
function gcd(a,b) {
    // calculer le pgcd
    while (b != 0) {
        let t = b
        b = a % b
        a = t
    }
    return a
}

module.exports = gcd