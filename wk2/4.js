function stringDiff(s1,s2) {
    if(s1.length !== s2.length) {
        //implicit type conversions are intrinsic to js
        //use === and !== to check equalities
        return -1
    }
    let diffCount = 0
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            diffCount++
        }
    }
    return diffCount
}

console.log(stringDiff('cat', 'mat'))
console.log(stringDiff('cat','one'))
console.log(stringDiff('cat','cats'))