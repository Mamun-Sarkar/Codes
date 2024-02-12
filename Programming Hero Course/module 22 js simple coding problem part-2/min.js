

const phones =[
    {name:"samsung",price:20000},
    {name:"iphone",price:200000},
    {name:"walton",price:10000},
    {name:"realme",price:30000},
]


function min(prices){
    let min = prices[0]
    for(pr of prices){
        if(pr.price < min.price){

            min = pr;
        }
    }
    return min
}


const result = min(phones);

console.log(result);