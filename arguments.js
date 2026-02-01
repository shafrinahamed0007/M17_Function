function doubleIt(number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log("I'll call the function");
doubleIt(15);
console.log('-----------------------');
doubleIt(88);
console.log('-----------------------');
doubleIt(873);

console.log('-----------------------');



const number = 55;
doubleIt(number);

console.log('-----------------------');


const money = 112;
doubleIt(money);


//
function difference(x,y){
    const diff = x-y;
    console.log(x, y, "difference is", diff);
}

const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);