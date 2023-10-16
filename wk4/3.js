//memoization
function fibGen(){
    const cache = [1,1]
    const fib = (index) =>{
        if(index < cache.length) {
            console.log('Found '+index)
            return cache[index]
        }
        else{
            console.log('Caluclated '+index)
            cache[index] = fib(index-1)+fib(index-2)
            return cache[index]
        }
    }
    return fib
}
const fib = fibGen()
console.log(fib(1))
console.log(fib(5))
console.log(fib(3))
//exponential function - individual work
function expGen(){
    const cache = [1]
    const exp=(index)=>{
        if(index < cache.length){
            console.log('found '+index)
            return cache[index]
        }
        else{
            console.log('calculated '+index)
            cache[index] = exp(index-1)*2 //2^x exponential function
            return cache[index]
        }
    }
    return exp
}
const exponent = expGen()
console.log(exponent(1))
console.log(exponent(3))
console.log(exponent(2))