import {colors} from "./fifty-shades-of-cold.data.js"

export function generateClasses(){
    let head = document.head
    let elementStyle = document.createElement("style")

    for(let i=0;i <colors.length;i++){
        elementStyle.innerText += "." + colors[i] +"{background:" + colors[i] +"}" 
    }
    head.append(elementStyle)
}

export function generateColdShades(){
    let body = document.querySelector('body')
    for(let i =0;i<colors.length;i++){
        if (colors[i]=="aqua" || colors[i]=="blue"|| colors[i]=="turquoise"|| colors[i]=="green" || colors[i]=="cyan"|| colors[i]=="navy"||colors[i]=="purple"){
            let elementDiv = document.createElement("div")
            elementDiv.innerText = colors[i]
            elementDiv.setAttribute("class",colors[i])
            body.append(elementDiv)
        }
    }
}

export function choseShade(color){

    let div = document.getElementsByTagName("div")
    
    for (let i=0;i<div.length;i++){
        if(div[i].classList.contains(color) ==false){
            div[i].classList.replace(div[i].className,color)
        }
    }
}