
function inchToFeet(inch){

    const feet = inch / 12;
    const newFeet = parseInt(feet);
    const inches = inch % 12;
    const result = newFeet + " feet " + inches +" inches ";
    return result


}

const height =inchToFeet(75);

console.log(height);