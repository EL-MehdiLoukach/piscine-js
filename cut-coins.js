function round(number){

    if (typeof number!="number"){
        return NaN
    }
    
    let result = 0
    let stringNumber = number.toString()
    let stockStringNum = ""

    for(let i=0;i<=stringNumber.length-1;i++){
        if (stringNumber[i] =="."){
            if (stringNumber[i+1]>=5){
                stockStringNum = stringNumber.slice(0,i)
                if (number<=0){
                    result = parseInt(stockStringNum) - 1
                }else{
                    result = parseInt(stockStringNum) + 1
                }
                return result
            }else{
                stockStringNum = stringNumber.slice(0,i)
                result = parseInt(stockStringNum)
                return result
            }
        }
    }

    return number
}

function ceil(number){

    if (typeof number!="number"){
        return NaN
    }

    let result = 0
    let stringNumber = number.toString()
    let stockStringNum = ""

    for(let i=0;i<stringNumber.length;i++){
        if (stringNumber[i]=="."){
            stockStringNum = stringNumber.slice(0,i)
            if(number>=0){
                result = parseInt(stockStringNum)
                return result +1 
            }else{
                result = parseInt(stockStringNum)
                return result -1 
            }
        }
        
    }
    return number
}

function floor(number){
    if (typeof number!="number"){
        return NaN
    }

    let result = 0
    let stringNumber = number.toString()
    let stockStringNum = ""

    for(let i=0;i<stringNumber.length;i++){
        if (stringNumber[i]=="."){
            stockStringNum = stringNumber.slice(0,i)
            if(number>=0){
                result = parseInt(stockStringNum)
                return result 
            }else{
                result = parseInt(stockStringNum)
                return result -1
            }
        }
        
    }
    return number
}

function trunc(number){
    if (typeof number!="number"){
        return NaN
    }

    let result = 0
    let stringNumber = number.toString()
    let stockStringNum = ""

    for(let i=0;i<stringNumber.length;i++){
        if (stringNumber[i]=="."){
            stockStringNum = stringNumber.slice(0,i)
            result = parseInt(stockStringNum)
            return result
        }
    }
    return number
}

console.log(trunc(-0.05))