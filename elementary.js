function multiply(number,number1){
    let calcul = 0
    let NUMBER = number
    let NUMBER1 = number1

    if (number <0 ){
        let a = number.toString()
        let c = a.slice(1,number.length)
        NUMBER = parseFloat(c)
    }

    if (number1 < 0){
        let a = number1.toString()
        let c = a.slice(1,number1.length)
        NUMBER1 = parseFloat(c)
    }

    for(let i=0;i<NUMBER1;i++){
        calcul += NUMBER
    }

    if(number <0 && number1<0){
        return calcul
    }

    if (number<0 ||number1<0){
        let c = "-"+calcul.toString()
        let resultFinal = parseFloat(c)

        return resultFinal
    }
    
    return calcul
}

function divide(number,number1){
    for(let i =0;i<=number;i++){
        if (multiply(i,number1)==number){
            return i
        }
    }
    return 0
}

function modulo(number,number1){
    let calcul =number - (multiply((Math.round(divide(number/number1))),number1))
    return calcul
}   
console.log(multiply(-22,-123))
//console.log(modulo(9,4))

