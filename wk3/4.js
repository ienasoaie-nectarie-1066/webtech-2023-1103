const sampleArray = [1,2,3,4,5,6,7]
const sumDiv = (array, divisor) => {
    return array.filter(e => e % divisor === 0).reduce((a,e) => a+e, 0)
}
console.log(sumDiv(sampleArray, 2))