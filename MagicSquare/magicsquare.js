function isMagic(square){
    const n = square.length
    // 1. compute magical sum: n(n^2+1)/2
    const magicSum = n*(n**2+1)/2
    // 2. check each row
    for (let row of square) {
        let sum = 0
        // compute sum of this row
        for (let v of row){
            sum += v
        }
        // TODO
        if (sum != magicSum) {
            return false
        }
    }
    // 3. check each column
    // 4. les "diagonales"
    // TODO 5. use all numbers from 1 to n^2 (once each)
    return true
}

function build(n){
    return [[1, 1], 
            [1, 2]]
}

const squareOk = 
    [[2, 7, 6],
     [9, 5, 1],
     [4, 3, 8]]

// rows 1 & 3 are Ko
const squareKoRow = 
     [[2, 3, 6],
      [9, 5, 1],
      [4, 7, 8]]

const squareKoColumn = 
      [[2, 7, 6],
       [1, 5, 9],
       [4, 3, 8]]
  
const squareKoDiag = 
       [[2, 7, 6],
        [4, 3, 8],
        [9, 5, 1]]
    

const ok = isMagic(squareOk)
// console.log(squareOk)
console.log("square ok", ok)

const koR = isMagic(squareKoRow)
const koC = isMagic(squareKoColumn)
const koD = isMagic(squareKoDiag)
console.log("squares ko", koR, koC, koD)