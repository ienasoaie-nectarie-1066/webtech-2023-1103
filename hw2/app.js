function addTokens(input, tokens){
    if(typeof input != 'string') 
        throw new TypeError('Invalid input')
    if(input.length < 6)
        throw new TypeError('Input should have at least 6 characters')
    for(let i = 0; i<tokens.length; i++){
        if(typeof tokens[i].tokenName != typeof ''){
            throw new TypeError("Invalid array format")
        }
    }
    let mod = input
    for(let i = 0; i<tokens.length; i++){
        mod = mod.replace('...','${'+tokens[i].tokenName+'}')
    }
    return mod
}

const app = {
    addTokens: addTokens
}

module.exports = app;

//console.log(addTokens("string of words man ...","tokens"))