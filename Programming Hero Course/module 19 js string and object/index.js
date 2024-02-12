const color ={
    red : "red color",
    blue :"blue color",
    "golden rod" : 'golden color' 


}
console.log(color["golden rod"]);



const student ={
    name:"mamun",
    id:1123,
    physics:{
        subject:"HSC physics",
        num:30
    }
}


console.log(student.physics.num);



var number = {eng:10,
    bangla:10,
    math:10
}

// for ( var numbers in number){
//     console.log(numbers);
// }
//  num = numbers.length

const num = Object.keys(number)

 console.log(num.length);

 var sort= [1,4,3,9,0,7,] ;

 const srt = sort.sort()
 console.log(srt);

 var colors = ["red","blue","green","yellow","orange"]

 var revCol =[]

 for (col of colors){
    console.log(col);
    revCol.unshift(col)
 }
 console.log(revCol);