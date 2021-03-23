function chunk(array,size){

    let tableFinal = []

    if(array.length%size == 0){
        for(let i=0;i<array.length;i+=size){
            tableFinal.push(array.slice(i,i+size))
        }
    }else{
        tableFinal = array.slice(-size)
    }

    return tableFinal
}