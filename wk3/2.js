//using only filter
const yearsOfBirth = [1996, 2003, 2012, 1987, 2001, 2020]
function getMajor(a1){
    return a1.filter(e => 2023 - e >= 18)
}
console.log(getMajor(yearsOfBirth))

//using map and filter
const results = yearsOfBirth.map(e => 2023 - e).filter(e => e>=18)
console.log(results)