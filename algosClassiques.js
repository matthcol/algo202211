const bonbons = [ 
    "fraise tagada", "dragibus", 
    "schtroumpf", "carambar",
    "pimousse", "mammouth ball"
]

// rechercher une valeur
const valueOk =  "carambar"
const valueKo = "réglisse"

// sol javascript
const indexOk = bonbons.findIndex(bonbon => bonbon == valueOk)
console.log(valueOk, "trouvé à la position", indexOk)

const indexKo = bonbons.findIndex(bonbon => bonbon == valueKo)
console.log(valueKo, "non trouvé i.e. position", indexKo)

// sol 2, cost O(n)
const value = valueKo // valueOk
let i = 0
for ( ; i < bonbons.length; i++) {
    if (bonbons[i] == value) {
        break
    }
}
if (i == bonbons.length) {
    console.log(value, "pas trouvé")
} else {
    console.log(value, "trouvé à la position", i)
}

// algo find optimal (sorted, indexation)
// cost: O(log n)
// Ex: n=1G ~ 2**30  => cost 30





