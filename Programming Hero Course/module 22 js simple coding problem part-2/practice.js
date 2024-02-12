
// task--1

const height =[42,56,78,77]


function Height(numbers){
    let low=numbers[0]
    for (number of numbers){

        if (number < low){
            low = number
        }

    }
    return low
}


const lowest = Height(height);

console.log(lowest);



// task--2


const nameArray=["rahim","rafi","robin","ratul","ron","r"];

function Name(names){
    let small = names[0]
    for(list of names){
        if(list.length < small.length){
            small = list
        }
    }
    return small
}


const smallest = Name(nameArray);

console.log(smallest);



// task-----3


function Total (mobileQunatity,tabletQuantity,laptopQuantity){

    const mobilePrice = 20000;
    const tabletPrice = 15000;
    const laptopPrice = 35000;

    const totalMobilePrice = mobilePrice * mobileQunatity;
    const totalTabletPrice = tabletPrice * tabletQuantity;
    const totalLaptopPrice = laptopPrice * laptopQuantity;


    const totalPrice = totalMobilePrice + totalTabletPrice + totalLaptopPrice;

    return totalPrice

}


const totalPrc = Total(5,3,2);

console.log(totalPrc);



// task-----4



const phones =[
    {name:"PhoneA",brand:"iphone",price:95000},
    {name:"PhoneB",brand:"samsung",price:50000},
    {name:"PhoneC",brand:"realme",price:25000},
    {name:"PhoneD",brand:"redmi",price:25000},
    {name:"PhoneE",brand:"walton",price:15000},
    {name:"PhoneF",brand:"oneplus",price:40000},
]


function averagePhonePrice(phones){
    let sum = 0;
    let array = []
    for(phone of phones){
        sum = sum + phone.price
        array.push(phone.price)
    }
    console.log(array);

    const average = sum / array.length
    return average
    
}


const result = averagePhonePrice(phones)

console.log(result);



let myString = "Hello, World";
let lastIndex = myString.length - 1;
let lastCharacter = myString[lastIndex];

console.log("Last character:", lastCharacter);
