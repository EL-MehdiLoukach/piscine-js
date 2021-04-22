
function getJSON(path,params){

    let Path = path
    let Params = params
    


    return new Promise(function(resolve,reject){
        let parameters = "?"
        let url = Path

        if (Params  != undefined){
            for (let [key,value] of Object.entries(params)){

                parameters += `${checkSpace(key.toString() )}=${checkSpace(value.toString() )}&`

            }
            url += parameters.slice(0,parameters.length - 1)
        }

        fetch(url)
        .then((response) => {
            let obj = response.json()

            for (const key of Object.keys(obj)){
                if (key == "data"){
                    resolve(key)

                }else if (key ==  "error"){
                    reject(key,obj[key])
                }
            }
        })
    })
}

function checkSpace(name){
    let newName = ""

    if (name.includes(" ")){
        newName = name.replaceAll(" ","+")
        return newName
    }

    return name
}

getJSON("/test",{ query: 'hello world', b: 5 })

 