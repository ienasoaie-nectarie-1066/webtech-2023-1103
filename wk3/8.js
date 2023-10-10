//reduceleft
//takes an array of elements
const sampleArray = [1,2,3,4,5]
function reduceleft(array, update, init){
    //begins the accumulator at an arbitrary initial point, in this case 0
    let accumulator = init
    for(const element of array){
        //performs the function upon the accumulator and each element of the array
        accumulator = update(accumulator, element)
    }
    return accumulator
}
console.log(reduceleft(sampleArray, (a,e)=> a+e, 0))
//performs the sum of the elements of an array
//array is sampleArray
//function is sum; (a, e) => a + e
//initial point is 0