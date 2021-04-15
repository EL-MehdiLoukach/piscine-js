
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

function reduceKeys(obj,funct,kc){
    console.log(`wesh ${kc}`)
    let keyObject = Object.keys(obj)
    let number = ""
    keyObject.forEach((element,index)=>{
        if (index == 0){
            number = funct(number, element,index,keyObject)
        }else{
            number = funct(number, element,index,keyObject,kc)
        }
        
    })
    console.log(`abcd${number}dqsdqsdqs${kc}`)
    return number
}