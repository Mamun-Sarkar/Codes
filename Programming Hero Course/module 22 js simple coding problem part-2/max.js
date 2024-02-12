
const height =[23,45,6,7,99,9,7,7]

function getMax(numbers){
    let max=numbers[0];
    for(num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max
}


const max = getMax(height);

console.log("highest num of the arry is :",max);