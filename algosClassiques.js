const bonbons = [ 
    "fraise tagada", "dragibus", 
    "schtroumpf", "carambar",
    "pimousse", "mammouth ball"
]

// rechercher une valeur
const valueOk =  "carambar"
const valueKo = "réglisse"

const indexOk = bonbons.findIndex(bonbon => bonbon == valueOk)
console.log(valueOk, "trouvé à la position", indexOk)

const indexKo = bonbons.findIndex(bonbon => bonbon == valueKo)
console.log(valueKo, "non trouvé i.e. position", indexKo)

