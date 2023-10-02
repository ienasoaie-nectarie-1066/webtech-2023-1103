//representing objects as dictionaries (key/value pairs)
const sampleString = "the quick brown fox jumps over the lazy dog"

function countApp(s){
    const letters = s.split('') //keys
    const result = {} //values
    for(let letter of letters){
        if(letter in result){
            //modifying the value of a key
            result[letter]++
        }
        else{
            result[letter] = 1
        }
    }
    return result
}

console.log(countApp(sampleString))