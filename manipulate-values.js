
function filterValues(obj,funct){
    let array2 = []
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        array2 = funct(element,index)
    })
    return array2
}

function mapValues(array,funct){
    
}

function reduceValues(array1,no = 0){

}