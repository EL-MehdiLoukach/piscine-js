

function adder(array1,no){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array1.reduce(reducer,no)
}

function sumOrMul(array1,no){
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