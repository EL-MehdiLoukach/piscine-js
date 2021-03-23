function nasa(number){
    let stringFinal =""
    for(let i= 1;i<=number;i++){

        if(i%3==0 && i%5==0){
            if (i==number){
                stringFinal += "NASA"
            }else{
                stringFinal += "NASA "
            }
            continue
        }
        
        if(i%3==0){
            stringFinal += "NA "
            continue
        }

        if (i%5==0){
            stringFinal += "SA "
            continue
        }
        
        stringFinal += i.toString() + " "
        
    }
    return stringFinal
}
console.log(nasa(100))