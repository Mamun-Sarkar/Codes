function doMath(num1,num2){
    const sum = num1+ num2 ;
    const diff = sum-num2;
    const mult = diff * sum;
    const result = mult / 2
    return result
}

const result = doMath(5,5)

console.log(result);


function isEvan(num){
    if(num % 2 === 0 ){
        return true
    }
    else{
        return false
    }
}

console.log(isEvan(5));
console.log(isEvan(10));


function isOdd(num3){
    if(num3 % 2 === 1){
        return true
    }
    return false
}

console.log(isOdd(5));
console.log(isOdd(10));