function Sum (numbers){

    let sum = 0;

    for(number of numbers){
        console.log(number);

        sum = sum + number;
    }
    return sum
}


const num = [1,2,3,4,5,6]

const sum= Sum(num);

console.log("sum of number is :",sum);



// evan number of array



function array(numbers){
    let evan =[];
    for (number of numbers){
        if(number % 2 === 0){
            console.log(number);

            evan.push(number)
        }
    }
    return evan
} 

const numb = [1,2,3,4,5,6,7,8]

const newArray = array(numb);

console.log("evan array are :",newArray);


function sumOfArray(numbers){
       let sumArray=0;
    for (number of numbers){
        
        if (number % 2 === 0) {
            console.log(number);
            sumArray = sumArray + number
        }
       
    }

     return sumArray
}

const arrays =[1,2,3,4,5,6,7,8]

const sumsOfArray=sumOfArray(arrays);


console.log("sum of the array is :",sumsOfArray);