function leapYear(year){
    if(year % 4 ===0){
        return true
    }
    else{
        return false
    }
}
const Year = leapYear(2024);

console.log(Year);