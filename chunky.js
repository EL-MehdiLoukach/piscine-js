function chunky(array,size){

    let tableFinal = []

    if(array.length%size == 0){
        for(let i=0;i<array.length;i+=size){
            tableFinal.push(array.slice(i,i+size))
        }
    }else{
        tableFinal = array.slice(-size)
    }

   
    console.log(tableFinal)
}

chunky([5,4,8,7,2,5,6,89],3)