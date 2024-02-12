
function calculateMoney(ticketSale) {

    let income = (ticketSale * 120)-(500 + (8 * 50));
  
    if (ticketSale < 0){
  
      income = "Invalid Number";
    }
  
    return income
  
      }

      console.log(calculateMoney(50));
  
  
  






      
    function checkName(name) {
            
        if (name.charAt(name.length - 1) === "a"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "y"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "i"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "e"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "o"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "u"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "w"){
             return "Good Name";
        }

        else if(typeof name !== "string"){
            return "Invalid"
        }
        else{
            return "bad name"
        }
    }

        
        console.log(checkName("iftee"));






        


        

        function deleteInvalids(arrays){
            let newArrays = [];
           if (Array.isArray(arrays) == false ){
                console.log("Invalid Array");
            }
            else{
            for (const newArray of arrays){ 
                
                if (typeof newArray === "number") {

                    newArrays.push(newArray)

                    newArrays = newArrays.filter(Boolean)
                }

                
            }
                }

            return newArrays

        }

        console.log(deleteInvalids([23,45,"string",NaN,undefined,3,457,8,9]));














        


        function monthlySavings(arrays , livingCost) {

            if(Array.isArray(arrays) === true && typeof livingCost === "number"){
                
            let sum = 0;
            for(let array of arrays){

                if (array >= 3000) {

                    array = array - (array * 0.2);

                }

                sum = sum + array
            }

            const savings = sum - livingCost;

            if(savings < 0 ){
                return "Earn More"
            }
            else{

            return savings
            }


            }

            else{
                return "Invalid Input"
            }



           
            }


console.log(monthlySavings([5000,6000,7000],14000));










let objects = { name: "kolimuddin" , birthYear: 1999 , siteName : "google" }

function password(obj) {

    
    if (Object.keys(obj).includes("name") === true && Object.keys(obj).includes("birthYear") === true && Object.keys(obj).includes("siteName") === true ){


        
            return obj.siteName.charAt(0).toLocaleUpperCase()+obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;

      
      
        
    }
 else{
        
      return "Invalid"
    }



}
 const result1 = password(objects)
console.log( result1);


let objects1 = { name: "kolimuddin" , birthYear: 1999 , siteName : "google" }


BirthYear = objects1.birthYear.toString().length;





console.log(BirthYear);
