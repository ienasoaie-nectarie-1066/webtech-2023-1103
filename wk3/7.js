function map(a, f){
    const results = []
    for(const element of a){
        results.push(f(element))
    }
    return results
}
console.log(map([1, 2, 3], e => e * 2))