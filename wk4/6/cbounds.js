const fetch = require('node-fetch')
//await the url data, await text from url, await json
async function getObjectFromUrl(url){
    const response = await fetch(url)
    const text = await response.text()
    return JSON.parse(text)
}
//await getting the object from the url and return the data
async function getCountryBounds(country){
    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
    return{
        minlatitude: object[0].boundingbox[0],
        maxlatitude: object[0].boundingbox[1],
        minlongitude: object[0].boundingbox[2],
        maxlongitude: object[0].boundingbox[3]
    }
}
//await the data and then display on console
async function main(){
    const bounds = await getCountryBounds('Germany')
    console.log(bounds)
}

main()