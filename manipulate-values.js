
function filterValues(obj,funct){
    let obj1 = {}
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)

        if(bool){
            const entries = new Map([[element,obj[element]]]);
            obj1 = Object.fromEntries(entries)
        }
    })
    console.log(obj1)
    return obj1
}

function mapValues(array,funct){
    
}

function reduceValues(array1,no = 0){

}