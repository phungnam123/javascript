//Number(value)

console.log(Number('4')) //4
console.log(Number('4.5')) //4
console.log(Number('This is a string')) //NaN
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number('')) //0

console.log(String(4.5)) // "4.5"
console.log(String(null)) //"null"
console.log(String(undefined)) //"undefined"
console.log(String(NaN)) // "NaN"
console.log(String(false)) // "false"
console.log(String(true)) // "true"

//Boolean(value): true or false

console.log(Boolean(0)) //false
console.log(Boolean('')) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) // false
console.log(Boolean(false)) //false

console.log(Boolean(1)) // true
console.log(Boolean('nam')) // true
console.log(Boolean(true)) // true
