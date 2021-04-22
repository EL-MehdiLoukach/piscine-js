
function getJSON(path,params){

    let Path = path
    let Params = params

    let parameters = "?"
    let url = Path

    if (Params  != undefined){
        for (let [key,value] of Object.entries(params)){

            parameters += `${checkSpace(key)}=${checkSpace(value.toString() )}&`

        }
        url += parameters.slice(0,parameters.length - 1)
    }

    return new Promise(function(resolve,reject){

        fetch(url)
        .then(response => response.json())
        .then((obj) => {
            console;log(obj)
            for (const key of Object.keys(obj)){
                if (key == "data"){
                    resolve(obj.data)

                }else if (key ==  "error"){
                    console.log(obj.error)
                    reject(obj.error)
                }
            }
        })
    })
}

function checkSpace(name){
    let newName = ""

    if (name.includes(" ")){
        newName = name.split(" ").join("+")
        return newName
    }

    return name
}

//getJSON("/test",{ query: 'hello world', b: 5 })

 