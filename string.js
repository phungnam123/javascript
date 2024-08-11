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
console.log(myjob.replace('fullstack', 'frontend')) // frontedn developer f
console.log(myjob.charAt(0))
const newStr = 'backend'
//              012345
//substr: Lay ra 1 phan cua chuoi
//substr(index,length)
console.log(newStr.substr(0, 4)) // back

//substring: Lay ra ky tu cua 1 chuoi
//substring(index,index)
console.log(newStr.substring(1, 4))

//// Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ `Developer D` thành chữ `Developer and Designer`, sau đó repeat 2 lần;
const myStr3 = '      Frontend Developer D        '

console.log(
  myStr3
    .trim()
    .replace('Developer D', 'Developer and Designer')
    .toUpperCase()
    .repeat(2)
)
