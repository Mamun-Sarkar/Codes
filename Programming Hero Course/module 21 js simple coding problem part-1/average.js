function oddAverage(numbers){
    const odds=[]
    for(number of numbers){
        if(number % 2 === 1){
            console.log(number);

            odds.push(number)
        }
    }
    
    let sum =0;
    for (number of odds){
        sum = sum + number
    }

    const count = odds.length;

    const avr = sum / count

    return avr


}

const num =[1,2,3,4,5,6,8,9,9,11]

const average = oddAverage(num);

console.log("average of odds is :", average);