const sampleArray = [1, 5, 9, 6, 8]
const totalArea = sampleArray.map(e => e*e).reduce((a,e)=> a+e, 0)
console.log(totalArea)