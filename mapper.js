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
                a.push(element[i])
            }
        }
    }
    return a
}

const tab = [1,2,3,[1,2,5,87]]
const f = (n) => [n,n]
console.log(tab.flatMap(f))
console.log(flatMap(tab,f))