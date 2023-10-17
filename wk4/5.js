//throwing custom errors
const increaseSalary = (salaries, percentage) =>{
    if(typeof salaries !== typeof []){
        throw new Error('Salaries must come in an array')
    }
    if(typeof percentage !== typeof 1){
        throw new Error('Percentage must be a number')
    }
   /* for(let i=0; i<salaries.length; i++){
        salaries[i] = salaries[i] + salaries[i]*percentage/100
    }*/
    salaries = salaries.map(e=>e+e*percentage/100)
    console.log(salaries)
}
//using the try/catch block
try{
    increaseSalary([100,200,300],1)
    //increaseSalary(100,10)
    //increaseSalary([100,200,300],'a')
}catch(err){
    console.warn(err)
}