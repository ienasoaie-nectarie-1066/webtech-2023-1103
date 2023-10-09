//String formatter

function formatString(s, params){
    let modify = s
    for(let i = 0; i < params.length; i++){
        modify = modify.replace('{'+i+'}', params[i])
        //try variant with $
    }
    return modify
}
console.log(formatString("{0} has a {1} {2}", ["Mary", "little", "lamb"]))