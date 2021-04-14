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
    let keyObject = Object.keys(obj)

    if(typeof keys == "string"){
        keyObject.forEach((elements)=>{
            if(keys != elements){
                obj1[keys] = obj[keys]
            }
        })
    }else{
        keys.forEach((element)=>{
            keyObject.forEach((elements)=>{
                if(element != elements){
                    obj1[element] = obj[element]
                }
            })
        })
    }
    return obj1
}