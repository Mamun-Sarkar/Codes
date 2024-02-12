
function noDuplicate(duplicates){
    let noDup =[]
    for( const duplicate of duplicates){
        if (noDup.includes(duplicate) === false ){
            noDup.push(duplicate)
        }
    }
    return noDup
}

const num =[1,2,3,4,6,7,6,5,4]

const array = noDuplicate(num)

console.log(array);