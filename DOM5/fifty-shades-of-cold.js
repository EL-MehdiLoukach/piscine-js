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
        if (colors[i].includes("aqua") || colors[i].includes("blue")|| colors[i].includes("turquoise")|| colors[i].includes("green") || colors[i].includes("cyan")|| colors[i].includes("navy")||colors[i].includes("purple")){
            colors[i].con
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