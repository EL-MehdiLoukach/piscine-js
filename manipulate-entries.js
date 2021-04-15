
function filterEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)
    
    valueObject.forEach((element,index)=>{
        
        let bool = funct([element,obj[element]],index,valueObject)

        if(bool){
            entries.push([element,obj[element]])         
        }

    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function mapEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let keyObject = Object.keys(obj)

    keyObject.forEach((key,index)=>{
        let result = funct([key, obj[key]],index)
        entries.push(result[0],result[1])
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

