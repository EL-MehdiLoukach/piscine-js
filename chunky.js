function chunk(array,size){

    let tableFinal = []
    
    for(let i=0;i<array.length;i+=size){
        tableFinal.push(array.slice(i,i+size))
    }
    
    return tableFinal
}
