
function filterKeys(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(element,index)

        if(bool){
            entries.push([element,obj[element]])         
        }
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function mapKeys(obj,funct){
    let obj1 = {}
    let entries = []
    let keyObject = Object.keys(obj)

    keyObject.forEach((key,index)=>{
        entries.push([funct(key,index),obj[key]])
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function reduceKeys(obj,funct, kc = ""){
    
    let keyObject = Object.keys(obj)
    let number = ""
    keyObject.forEach((element,index)=>{
        number = funct(number, element,index,keyObject,kc)
    })
    console.log("wesh la street", kc)
    let bd = ""
    let cb = number.indexOf(keyObject[0])

    for (let i = 0;i < number.length;i++){
        if (i > cb + keyObject[0].length - 1){
            bd += number[i]
        }
    }

    if (kc == "null"){
        return keyObject[0] + bd
    }else{
        return kc + keyObject[0] + bd
    }
}