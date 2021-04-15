
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
        let result = funct([key, obj[key]],index,keyObject)
        entries.push(result)
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function reduceEntries(obj,funct,kc){

    if (kc == undefined){
        kc = ""
    }
    
    let keyObject = Object.entries(obj)
    let number

    if (typeof kc == "string" || kc == null){

        number = keyObject.reduce(funct,kc)
        let bd  = ""
        for (let i = 0;i < number.length;i++){
            if (i > number.indexOf(keyObject[0]) + keyObject[0].length - 1 ){
                bd += number[i]
            }
        }
        console.log(bd)

        if (kc == null){
            return  keyObject[0] + bd
        }

        return kc + keyObject[0] + bd
    }else{
        number = keyObject.reduce(funct,kc)
    }
    
    return number
}

