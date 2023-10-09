const sampleStrings = ["cat", "dog", "donkey", "girraffe", "horse"]
let result = sampleStrings.map(e => e.length)
//e - element
console.log(result)

function getLongerThan(a, n){
    /*let results = []
    for(const element of a){
        if(element.length > n)
            result.push(element)
    }
    */
    return a.filter(e => e.length>n)
}
console.log(getLongerThan(sampleStrings, 3))