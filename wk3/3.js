const sampleArray = [1, 5, 9, 6, 8]
const totalArea = sampleArray.map(e => e*e).reduce((a,e)=> a+e, 0)
//produces the sum of the squares of sampleArray
console.log(totalArea)
function sumOfDiv(a, d){
    return result = a.map(e => e%d == 0).reduce((t,e)=> t+e, 0)
}
console.log(sumOfDiv(sampleArray, 3))