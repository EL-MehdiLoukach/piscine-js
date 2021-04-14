
function invert(obj){
   let obj1 = {}
    let keys = Object.keys(obj)

    keys.forEach((element)=>{
        obj1[obj[element]] = element
    })
    return obj1
}