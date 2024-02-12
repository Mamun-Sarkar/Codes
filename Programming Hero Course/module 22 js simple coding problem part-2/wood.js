function wood(chairQuantitiy,tableQuantitiy,bedQuantitiy){

    const cWood= 3;
    const tWood=10;
    const bedWood=50;


    const cTotalWood= chairQuantitiy *cWood;
    const tTotalWood = tableQuantitiy * tWood;
    const bedTotalWood = bedQuantitiy * bedWood;


    const totalWood = cTotalWood + tTotalWood + bedTotalWood;

    return totalWood
}


const result = wood(6,1,2)


console.log(result);