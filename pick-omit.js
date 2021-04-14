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

    return obj1
}

let c = ["name","age"]

let fc = {
    name:"Pierre",
    age:45,
    couleur:"bleu"
}

console.log(omit(fc,c))