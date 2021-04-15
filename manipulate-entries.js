
function filterEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)
        let boole = funct(element,index)
        if(bool && boole){
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
        entries.push([key,funct(obj[key],index)])
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function reduceEntries(obj,funct,kc = 0){
    console.log(`wesh ${kc}`)
    let keyObject = Object.keys(obj)
    let number = kc
    keyObject.forEach((element,index)=>{
        number = funct(number, obj[element],index,keyObject)
    })
    console.log(number)
    return number
}