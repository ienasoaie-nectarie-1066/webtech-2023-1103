function formatString(s, param){
    let modified = s
    for(const par in param){
        modified = modified.replace('{'+par+'}', param[par])
    }
    return modified
}
console.log(formatString("{name} has a {attribute} {pet}", {name: "Mary", attribute: "little", pet: "lamb"}))