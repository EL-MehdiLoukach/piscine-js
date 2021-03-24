export function generateLetters(){
    let body = document.querySelector("body")
    let compteurSize = 10
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i =0;i<120;i++){
        let element = document.createElement("div")
        element.textContent = alphabet[Math.floor(Math.random()*alphabet.length)]
        
        compteurSize++
        element.style.fontSize = compteurSize.toString() + "px"

        if (i < 40){
            element.style.fontWeight = "300"
        }else if(i>=40 && i <80 ){
            element.style.fontWeight = "400"
            
        }else{
            element.style.fontWeight = "600"
        }

        body.append(element)
    }
}