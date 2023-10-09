//reduceleft
const sampleArray = [1,2,3,4,5]
function reduceleft(array, update, init){
    let accumulator = init
    for(const element of array){
        accumulator = update(accumulator, element)
    }
    return accumulator
}
console.log(reduceleft(sampleArray, (a,e)=> a+e, 0))