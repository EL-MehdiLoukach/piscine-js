function map(array,funct){
    array2 = []
    for(let i =0;i <array.length;i++){
        array2.push(funct(array[i],i,array))
    }
    return array2
}