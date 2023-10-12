function tidyNumber(n){
  
  let numSorted = n.toString().split('').sort( (a, b) => a - b )

  numSorted = Number(numSorted.join(''))

  return n == numSorted ? true : false

}

console.log(tidyNumber(54312))
console.log(tidyNumber(12345))
// params: n    // a number
// return: boolean
// e.g. tidyNumber(54312)
// results in false


// declare a variable numSorted and assign it to n.toString().split('').sort( (a,b) => a - b )
// reassign numSorted to Number(numSorted.join(''))
// conditional if n == numSorted then return true; else return false

