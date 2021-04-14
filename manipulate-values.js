
function filterValues(obj,funct){
    let obj1 = {}
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)
        if(bool){
            Object.fromEntries([element,obj[element]])
        }
    })
    return array2
}

function mapValues(array,funct){
    
}

function reduceValues(array1,no = 0){

}