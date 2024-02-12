
// task----1


function Far(celc){
    fahrenheit = celc*(9/5)+32;

    return fahrenheit
}

const fahr = Far(37);

console.log(fahr);


// task----2


const numbers =[5,6,11,22,98,5]


function repet(numbers){
    let rep = []
    for(number of numbers){
        if(number  === 5 ){
            rep.push(number)
        }
        else{

        }
    }

    console.log(rep);
    const result= rep.length;

    return result


}

const repet1 = repet(numbers)

console.log(repet1);





// task----3




function vowel(vows){

    let array=[];
    for(vowel1 of vows){
        if(vowel1.includes("a") ===  true){
            array.push(vowel1)
        }
        else if(vowel1.includes("e") ===  true){
            array.push(vowel1)
        }
        else if(vowel1.includes("i") ===  true){
            array.push(vowel1)
        }
        else if(vowel1.includes("o") ===  true){
            array.push(vowel1)
        }
        else if(vowel1.includes("u") ===  true){
            array.push(vowel1)
        }


        
    }
    console.log(array);

    const result = array.length;
    return result
}


const sen = "bangladesh is my country";

const result = vowel(sen)

console.log(result);




// task----4

console.log(Math.sqin(2,3));