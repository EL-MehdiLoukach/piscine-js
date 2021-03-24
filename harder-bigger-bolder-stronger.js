export function generateLetters(){
    let body = document.querySelector("body")
    
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i =0;i<120;i++){
        let element = document.createElement("div")
        element.innerText = alphabet[Math.floor(Math.random()*alphabet.length)]
        element.style.fontSize = "130px"

        if (i < 40){
            element.style.fontWeight = "300"
        }else if(i>=40 && i <80 ){
            element.style.fontWeight = "400"
            
        }else{
            element.style.fontWeight = "600"
            compteur++
        }

        body.append(element)
    }
}