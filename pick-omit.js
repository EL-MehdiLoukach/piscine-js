function pick(obj,keys){
    let obj1 = {}

    let keyObject = Object.keys(obj)

    keys.forEach((element)=>{
        keyObject.forEach((elements)=>{
            if (element == elements){
                obj1[element] = obj[element]
            }
        })
    })
    return obj1
}
