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

function divide(resultat,multiplicateur){
    let resultatDivision = 0
    let RESULTAT = resultat
    let MULTIPLICATEUR = multiplicateur

    if (multiplicateur == 0 || resultat==0){
        return 0
    }

    if (RESULTAT < 0){
        RESULTAT = -RESULTAT
    }

    if (MULTIPLICATEUR < 0){
        MULTIPLICATEUR = -MULTIPLICATEUR
    }

    for (let i=RESULTAT-1;i>=1;i--){
        if (multiply(i,MULTIPLICATEUR) <= RESULTAT){
            console.log("i:",i)
            resultatDivision += i
            console.log("division:",resultatDivision)
            RESULTAT -= multiply(i,MULTIPLICATEUR)
            console.log("resultat:",RESULTAT)
        }
    }

    if (resultat < 0 || multiplicateur <0){
        resultatDivision = -resultatDivision
        return resultatDivision
    }
    

    return resultatDivision
}

function modulo(number,number1){
    let calcul =number - (multiply((Math.round(divide(number,number1))),number1))
    return calcul
}   
console.log(divide(235,5))

