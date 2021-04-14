
function filterValues(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)

        if(bool){
            entries.push([element,obj[element]])         
        }
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function mapValues(obj,funct){
    console.log(obj)
    
}

function reduceValues(array1,no = 0){

}