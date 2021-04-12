function nasa(number){
    let chaine = ""
    for (let i =1;i <= number;i++){
        if (i%3 ==0 && i%5==0){
            if(i== number){
                chaine +="NASA"
            }else{
                chaine +="NASA "
            }
            
        }else if (i%3==0){
            if(i== number){
                chaine +="NA"
            }else{
                chaine +="NA "
            }
        }else if (i%5 == 0){
            if(i== number){
                chaine +="SA"
            }else{
                chaine +="SA "
            }
        }else{
            chaine += i.toString()
        }
    }
    return chaine
}

console.log(nasa(10))
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