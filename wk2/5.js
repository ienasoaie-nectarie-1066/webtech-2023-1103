function add(a,b,c){
    return a+b+c
}

console.log(add(1,2,3)) //base example
console.log(add(1,2,3,4)) //will work, ignores the additional variables
console.log(add(1,2)) //NaN
console.log(add(1,"man",3)) //concatenates

let sampleArray = [1,2,3]