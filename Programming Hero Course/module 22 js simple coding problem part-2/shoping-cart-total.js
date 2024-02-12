
const product =[
    {name:"shampoo", price:300 ,quantity:3},
    {name:"shirt", price:700 ,quantity:2},
    {name:"pant", price:900 ,quantity:2},
]

function total(products){
    let total=0;
    for(pro of products){
        total = total + (pro.price * pro.quantity);
    }
    return total
}

const result = total(product);
console.log(result);