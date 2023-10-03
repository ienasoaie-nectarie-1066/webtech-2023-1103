function add(a,b,c){
    return a+b+c
}

console.log(add(1,2,3)) //base example
console.log(add(1,2,3,4)) //will work, ignores the additional variables
console.log(add(1,2)) //NaN
console.log(add(1,"man",3)) //concatenates

let sampleArray = [1,2,3]

function buildArray(source, ...args){
    //js version of foreach, using "of"
    for(let element of args){
        source.push(element)
    }
    return source
}

console.log(buildArray([1,2,3],4,5,6,7,8))