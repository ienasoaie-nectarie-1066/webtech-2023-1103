const dictionary = ['white', 'brown', 'black', 'red']

const sample = `
    best
    read
    on
    windy
    nights
`
function checkAcrostic(s, d){
    const target = s.split('\n').filter(e=>e).map(e => e.trim()).map(e => e[0]).join('')
    //splits by newline, filters the elements of the sample, trims to the first letter
    // maps the elements to the first letter, joins them
    return d.indexOf(target) != -1
    //if there is a word composed of the first letters of the sample in the dictionary, returns true
}
console.log(checkAcrostic(sample,dictionary))
    