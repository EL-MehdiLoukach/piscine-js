function multiply(number,number1){
    let calcul = 0
    for(let i=0;i<number1;i++){
        calcul += number
    }
    return calcul
}

function divide(number,number1){
    for(let i =0;i<=number;i++){
        if (i*number1==number){
            return i
        }
    }
    return 0
}

function modulo(number,number1){
    let calcul =number - ((Math.round(number/number1))*number1)
    return calcul
}   

console.log(modulo(9,4))