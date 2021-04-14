
function filterValues(array1,funct){
    let array2 = []
    for(let i = 0;i<array1.length;i++){
        funct(array1[i],i,array1)
    }
    return array2
}

function mapValues(array,funct){

    let array2 = []
    for(let i =0;i <array.length;i++){
        array2.push(funct(array[i],i,array))
    }

    return array2
}

function reduceValues(array1,no = 0){
    const tableau = array1.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    },no)
    return tableau
}