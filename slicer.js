function slice(array,firstindex,secondIndex){

    let isString = false
    let chaineFinal = ""
    let tableFinale = []

    if (typeof array=="string"){
        isString = true
    }

    if(firstindex < secondIndex){

        for(let i=0;i<array.length;i++){
            if (i>=firstindex && i <=secondIndex){
                if (isString){
                    chaineFinal += array[i]
                }else{
                    tableFinale.push(array[i])
                }
            }
        }
        if (chaineFinal != ""){
            return chaineFinal
        }else{
            return tableFinale
        }
    }else if (firstindex > secondIndex){
        for(let i = array.length-1; i >=0;i--){
            if (i<=firstindex && i >=secondIndex){
                if (isString){
                    chaineFinal += array[i]
                }else{
                    tableFinale.push(array[i])
                }
            }
        }

        if (chaineFinal != ""){
            return chaineFinal
        }else{
            return tableFinale
        }
    }
}

console.log(slice(["h","e","l","l","o"],4,1))