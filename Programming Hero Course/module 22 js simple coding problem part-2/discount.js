
function discount (quantity){
    const below100Price = 100;
    const above100Price = 90;
    const above200Price = 80;

    if(quantity <= 100){
        const total = below100Price * quantity;
        return total
    }
    else if (quantity <= 200){
        const firstTotal= 100 * below100Price;
        const remaining = quantity - 100;
        const remainingTotal = remaining * above100Price
        const total = firstTotal + remainingTotal;
        return total
    }
    else{
        const firstTotal= 100 * below100Price;
        const secondTotal = 100 * above100Price;
        const remaining = quantity - 200;
        const remainingTotal = remaining * above200Price;
        const total = firstTotal + secondTotal + remainingTotal;
        return total
    }
    
}
const product = 300
const result = discount(product)
console.log(result);