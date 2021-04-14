function map(array,funct){
    let array2 = []
    for(let i =0;i <array.length;i++){
        array2.push(funct(array[i],i,array))
    }
    return array2
}


function flatMap(array,funct){
    let a = []
    recursive(array)
    
    function recursive(element){
        for (let i =0;i <element.length;i++){
            if (typeof element[i]== "object"){
                recursive(element[i])
            }else {
                a.push(funct(element[i]))
            }
        }
    }

    return a
}