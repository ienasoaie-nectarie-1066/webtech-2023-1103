function distance(first, second){
    first = first.reduce(function(a,b){
        if(a.indexOf(b) < 0){
            a.push(b)
        }
        return a
    },[])
    second = second.reduce(function(a,b){
        if(a.indexOf(b) < 0){
            a.push(b)
        }
        return a
    },[])
    //return second
    let cntr = 0
    for(let i = 0; i < first.length; i++){
        if(second.indexOf(first[i]) >= 0){
            cntr++
        } 
    }
    return first.length + second.length - cntr*2
}
console.log(distance(['a','a','a'], ['a','c','d','c']))
//------------------------['a']--------['a','c','d']---
//--------------------------1----------------3---------