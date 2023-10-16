class Stream{
    #value;
    #nextValue;
    static #count = 0; //counts number of streams (children) Stream has
    constructor(value, nextValue){
        this.#value = value;
        this.#nextValue = nextValue;
        Stream.#count++;
    }
    get value(){
        return this.#value;
    }
    get next(){
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }
    static get count(){
        return Stream.#count;
    }
}
//constant value
class ConstantStream extends Stream{
    constructor(value){
        super(value, value=>value);

    }
}
//value increasing by 1
class NextIntegerStream extends Stream{
    constructor(){
        super(0, value => value+1);
    }
}
//initialising objects
const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();

console.log(Stream.count)
//my object type
//even numbers
class evenIntegers extends Stream{
    constructor(value){
        super(value, value=>value+2)
    }
}
//initialising with 0
const eventInteger = new evenIntegers(0)
for(let i=0; i<10; i++){
    console.log(`constant [${i}] = ${constant.next}`);
    console.log(`nextInteger [${i}] = ${nextInteger.next}`)
    console.log(`evenInteger[${i}] = ${eventInteger.next}`)
}
