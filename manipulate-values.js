
function filterValues(obj,funct){
    let array2 = []
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)
        if(bool){
            array2.push(obj[element])
        }
    })
    return array2
}

function mapValues(array,funct){
    
}

function reduceValues(array1,no = 0){

}