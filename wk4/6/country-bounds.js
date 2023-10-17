const fetch = require('node-fetch')
//promise to get the data from the url, transform it into text, parse the json text to the resolve
function getObjectFromUrl(url){
    return new Promise(resolve =>{
        fetch(url)
        .then(response => response.text())
        .then(text => resolve(JSON.parse(text)))
    })
}
//promise to get the object from the url and then extract the objects into the resolve
function getCountryBounds(country){
    return new Promise(resolve =>{
        getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
        .then(object => resolve({
            minlatitude: object[0].boundingbox[0],
            maxlatitude: object[0].boundingbox[1],
            minlongitude: object[0].boundingbox[2],
            maxlongitude: object[0].boundingbox[3]
        }))
    })
}
//complete all the promises, then display in console the results
function main(){
    getCountryBounds('Germany').then(bounds => console.log(bounds))
}

main()