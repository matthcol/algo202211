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


module.exports = gcd
