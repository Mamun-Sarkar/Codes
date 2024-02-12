
function add(num1,num2){
    const result = num1 + num2 ;

    return result
}
function subtract(num1,num2){
    const result = num1 - num2 ;

    return result
}
function multiply(num1,num2){
    const result = num1 * num2 ;

    return result
}
function divide(num1,num2){
    const result = num1 / num2 ;

    return result
}


function calc (a,b,operation){
    if (operation === "add"){
        return add(a,b)
    }
    else if(operation === "substract") {
        return subtract(a,b)
    }
    else if (operation === "multiply"){
        return multiply(a,b)
    }
    else if (operation === "divide"){
        return divide(a,b)
    }
}

let result = calc(3, 3, "multiply")

console.log(result);
 result = calc(6, 3, "divide")

console.log(result);
 result = calc(9, 3, "substract")

console.log(result);
 result = calc(3, 3, "add")

console.log(result);