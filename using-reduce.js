

function adder(array1,no = 0){
    const tableau = array1.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    },no)
    return tableau
}

function sumOrMul(array1,no = 0){
    const reduced = array1.reduce((accumulator,element)=>{
        if (element %2==0){//pair
            return accumulator * element
        }else{ // impair
            return accumulator + element
        }
    },no)
    return reduced
}

function funcExec(array1, no){

    const reduced = array1.reduce((accumulator,currentValue)=>{
        return currentValue(accumulator)
    },no)

    return reduced
}

console.log(adder([1, 2, 3, 4]))