function pick(obj,keys){
    let obj1 = {}

    let keyObject = Object.keys(obj)

    if (typeof keys == "string"){
        keyObject.forEach((elements)=>{
            if (keys == elements){
                obj1[keys] = obj[keys]
            }
        })
        
    }else {
        keys.forEach((element)=>{
            keyObject.forEach((elements)=>{
                if (element == elements){
                    obj1[element] = obj[element]
                }
            })
        })
    }

    return obj1
}

function omit(obj,keys){
    const obj2 = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key != keys) {
            obj2[key] = obj[key]
        }
    })
    return obj2
}

let c = ["name","age"]

let fc = {
    name:"Pierre",
    age:45,
    couleur:"bleu"
}

console.log(omit(fc,c))