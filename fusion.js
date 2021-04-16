
function fusion(obj1,obj2){
    let result
    let resultArray = []

    if (typeof obj1 == "string" && typeof obj2 == "string"){
        return obj1 + " " + obj2

    }else if (typeof obj1 == "number" && typeof obj2 == "number"){
        return obj1 + obj2
        
    }else if (typeof obj1== "object" && typeof obj2 == "object"){

        if (Array.isArray(obj1) && Array.isArray(obj2)){

            obj1.forEach((element)=>{
                resultArray.push(element)
            })

            obj2.forEach((element)=>{
                resultArray.push(element)
            })

            return resultArray
        }else{
            let arrayKey1 = Object.keys(obj1)
            let arrayKey2 = Object.keys(obj2)
            let objectResult = {}
            arrayKey1.forEach((key1)=>{
                objectResult[key1] = obj1[key1]
            })

            arrayKey2.forEach((key2)=>{
                if (objectResult[key2] != undefined){
                    objectResult[key2] += obj2[key2]
                }
            })
        }
    }

    return result
}
