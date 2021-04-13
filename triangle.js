function triangle(word,number){
    let theTriangle = ""
    for (let i=1;i <=number;i++){
        for (let j =1;j<=i;j++){
            theTriangle+=word

            if (j == i && i != number){
                theTriangle += '\n'
            }
        }
    }
  return theTriangle
}

/*let stringFinal = ""
let compteur = 0
function triangle(character,number){
    
    compteur +=1 
    if (number == 1){
        stringFinal +=character
        stringFinal +="\n"
        return stringFinal
    }
    triangle(character,number-1)
    
    for(let i=1;i <=number;i++){
        stringFinal += character
    }

    stringFinal +="\n"
    let a = stringFinal.slice(0,stringFinal.length-1)

    if(number==compteur){
        stringFinal = ""
        compteur=0
        return a 
    }
}

console.log(triangle("b",5))*/