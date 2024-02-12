function evanOdd(str){
    console.log(str);
    const len = str.length;

    console.log(len);

    if(len % 2 === 0){
        console.log("evan number");
        return true
    }
    else{
        console.log("odd number");
        return false
    }
}

console.log(evanOdd("dhaka")); 



function dubleOrTriple(num,bol) {

    if(bol === true){
        const result = num * 2;
        return result
    }
    else{
        const result = num * 3;
        return result
    }
    
}

console.log(dubleOrTriple(5,true));
console.log(dubleOrTriple(5,false));