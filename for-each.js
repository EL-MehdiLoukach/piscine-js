function forEach(array,funct){
    let tab = []
    for (let i=0;i <array.length;i++){
        tab.push(funct(array[i],i,tab))
    }
    return tab
}