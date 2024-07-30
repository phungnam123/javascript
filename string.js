// const name = 'Nam'
// console.log(name)

// console.log(typeof name)

const name = 'Nam'
const job = 'fullstack Developer'

const str1 = 'My name is Nam and my job is fullstack Developer'
// console.log(str1)
//c1:
const str2 = 'My name is ' + name + 'my job is ' + job
// console.log(str2)
//c2:
const str3 = `My name is ${name} and my job is ${job}`
console.log(str3)

//split
const myjob = 'fullstack developer f'
console.log(myjob.length)
console.log(myjob.split(' ')) // [fullstack,developer]

console.log(myjob.toLowerCase()) // fullstack developer
console.log(myjob.toUpperCase()) // FULLSTACK DEVELOPER

console.log(myjob.startsWith('fullstack')) //true
console.log(myjob.endsWith('developer')) // true

console.log(myjob.includes('full')) //true
console.log(myjob.includes('abc')) // false

console.log(myjob.indexOf('f'))
console.log(myjob.lastIndexOf('f'))

console.log(myjob.slice(0, 9))
console.log(myjob.replace('fullstack', 'frontend'))
console.log(myjob.charAt(0))
