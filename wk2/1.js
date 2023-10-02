/*
const sayHello = (name) => {
    console.log(`Hello ${name}!`)
}
*/

let sayHello = (name) => `Hello ${name}!`
//console.log(sayHello('Andrei'))
console.log(process.argv)

if (process.argv.length > 2){
    console.log(sayHello(process.argv[2]))
} else {
    console.log('Not enough parameters')
}
// js types
// basic types: number (floating point); string; bool
// complex types: arrays, objects