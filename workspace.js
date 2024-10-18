function sayHello(name){
    console.log("Hello " + name);
}

sayHello("John");

function sumNnum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumNnum(10));

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero");
    } 
    return a/b;
}