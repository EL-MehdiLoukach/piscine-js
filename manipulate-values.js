
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
    let obj1 = {}
    let entries = []
    let keyObject = Object.keys(obj)

    keyObject.forEach((key,index)=>{
        entries.push([key,funct(obj[key],index)])
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function reduceValues(obj,funct,kc = 0){
    console.log(`wesh ${kc}`)
    let keyObject = Object.keys(obj)
    let number = 0
    keyObject.forEach((element,index)=>{
        number = funct(number, obj[element],index,keyObject,initial)
    })
    console.log(number)
    return number
}