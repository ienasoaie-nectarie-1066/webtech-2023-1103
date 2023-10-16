//attaching methods to prototype of an existing type
//making all words capitalized
String.prototype.capitalizeWords = function(){
    return this.replace(/\b[a-z]/g, match => match.toUpperCase())
}
//begining of all words, if the letter is lowercase, between a and z
//all the matches have the method .toUpperCase() applied
let word = 'the lazy brown fox jumps over The blah Blah blah'
console.log(word.capitalizeWords())
//implementing a 'times' method to the Number type
Number.prototype.times = function(fun){
    let a = this.valueOf()
    a--
    if(a >= 0){
        //loop for Number times
        fun()
        return a.times(fun)
    }//inelegant way of exiting the function without printing undefined
    else{
        return 'Done'
    }
}
function f(){
    console.log('F')
}
let t = 6
console.log(t.times(f))