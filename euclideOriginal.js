// algorithme d'Euclide
// https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide

/**
 * compute greatest common divider of two natural numbers a and b
 * (original Euclide version)
 * @param {number} a 
 * @param {number} b 
 * @returns {number} greatest common divider
 */
function gcd(a, b) {
    while (a !=b) {
        if (a>b) {
            a = a -b
        } else {
            b = b -a
        }    
    }
    return a
}

module.exports = gcd
