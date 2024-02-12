



function calculateMoney(ticketSale) {

  let income = (ticketSale * 120)-(500 + (8 * 50));

  if (ticketSale < 0){

    income = "Invalid Number";
  }

  return income

    }




 




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
       else if (name.charAt(name.length - 1) === "A"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "Y"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "I"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "E"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "O"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "U"){
             return "Good Name";
        }
       else if (name.charAt(name.length - 1) === "W"){
             return "Good Name";
        }



        else if(typeof name !== "string"){
            return "Invalid"
        }
        else{
            return "bad name"
        }

        
        
        

        }
      

        console.log(checkName("EEEE"));
        






    



     


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








        function password(obj) {

          
            if (Object.keys(obj).includes("name") === true && Object.keys(obj).includes("birthYear") === true && Object.keys(obj).includes("siteName") === true  && obj.birthYear.toString().length === 4){

                
                    return obj.siteName.charAt(0).toLocaleUpperCase()+obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;

              
              
                
            }


            else{
                
              return "Invalid"
            }


        
        }
  








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


