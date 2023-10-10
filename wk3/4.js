const sampleArray = [1,2,3,4,5,6,7]
const sumDiv = (array, divisor) => {
    return array.filter(e => e % divisor === 0).reduce((a,e) => a+e, 0)
}
console.log(sumDiv(sampleArray, 2))
//sum of all numbers divisible by divisor in an array using filter and reduce
//filter takes each element and checks against a filtering device, in this case e % divisor === 0
//if element is divisible by divisor
//reduce takes a function to apply to the new array, in this case sum; (a, e) => a + e