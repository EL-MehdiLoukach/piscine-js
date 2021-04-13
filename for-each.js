function forEach(array,funct){
    let tab = []
    for (let i=0;i <array.length;i++){
        tab.push(funct(i))
    }
    return tab
}