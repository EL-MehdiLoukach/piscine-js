export function compose(){
    let body = document.querySelector("body")
    document.addEventListener('keydown', (event) => {
        let arrayDiv = [...document.getElementsByClassName("note")]

        if (event.key == "Backspace"){
            arrayDiv[arrayDiv.length-1].remove()
        }else if (event.code == "Space"){
            for(let i=0;i<arrayDiv.length;i++){
                arrayDiv[i].remove()
            }
        }else{
            let elementDiv = document.createElement("div")
            elementDiv.setAttribute("class","note")
            elementDiv.innerText = event.key
            body.append(elementDiv)
        }
    });
}