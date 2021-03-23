function nasa(number){
    let stringFinal =""
    for(let i= 1;i<=number;i++){

        if (i==1){
            stringFinal += i.toString() + " "
            continue
        }

        if(i%3==0 && i%5==0){
            if (i==number){
                stringFinal += "NASA"
                continue
            }else{
                stringFinal += "NASA "
            }
        }else if(i%3==0){
            stringFinal += "NA "
        }else if(i%5==0){
            stringFinal += "SA "
        }else{
            stringFinal += i.toString() + " "
        }
    }
    return stringFinal
}
console.log(nasa(100))