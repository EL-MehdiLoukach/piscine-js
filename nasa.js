function nasa(number){
    chaine = ""
    for (let i =1;i <= number;i++){
        if (i%3 ==0 && i%5==0){
            chaine +="NASA"
        }else if (i%3==0){
            chaine += "NA"
        }else if (i%5 == 0){
            chaine += "SA"
        }else{
            chaine += i.toString()
        }
    }
    return chaine
}


/*function nasa (number){
    let stringFinal = ""
    for(let i=1;i<=number;i++){

        if (i%5==0&&i%3==0){
            if(i==number){
                stringFinal += "NASA"
            }else{
                stringFinal += "NASA" + " "
            }
            continue
        }

        if (i%3==0){
            if(i == number){
                stringFinal +="NA"  
            }else{
                stringFinal +="NA" + " "
            }
            continue
        }

        if (i%5==0){
            if(i == number){
                stringFinal +="SA"  
            }else{
                stringFinal +="SA" + " "
            }
            continue
        }

        if (i == number){
            stringFinal += i.toString()
        }else{
            stringFinal += i.toString()+ " "
        }

        
    }

    return stringFinal
}

console.log(nasa(100))*/