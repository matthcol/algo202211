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
    // 1. create empty square
    let square = Array.from(Array(n), () => new Array(n).fill(0))
    
    // 2. fill square with numbers from 1 to n^2
    // start position
    let i = 0
    let j = (n - 1) / 2
    for(let nb = 1; nb <= n**2; nb++) {
        // console.log("Placer le nombre", nb)
        square[i][j] = nb
        // move in L
        let i2 = (i + 2) % n
        let j2 = (j + 1) % n
        if (square[i2][j2] != 0) {
            i2 = (i + 1) % n
            j2 = j
        }
        i = i2
        j = j2
    }
    return square
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

const square3 = build(3)
console.log(square3)
