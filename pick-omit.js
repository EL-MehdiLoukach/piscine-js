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

    let obj1 = {}
    let objectKeys = Object.keys(obj)

    if (typeof keys == "string"){   
        objectKeys.forEach((element)=>{
            if (element != keys){
                obj1[element] = obj[element]
            }
        })
    }else{
        objectKeys.forEach((element)=>{
            let a = false
            keys.forEach((elements)=>{
                if (element == elements){
                    a = true
                }
            })

            if (!a){
                obj1[element] = obj[element]
                a = false
            }
        })
    }

    return obj1
}

let c = "name"

let fc = {
    name:"Pierre",
    age:45,
    couleur:"bleu"
}

console.log(omit(fc,c))