
function filterValues(obj,funct){
    let obj1 = {}
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)
        if(bool){
            obj1 = Object.fromEntries(element,obj[element])
        }
    })
    return obj1
}

function mapValues(array,funct){
    
}

function reduceValues(array1,no = 0){

}