function queryServers(serverName,q){

    const url1 = () => {
        return new Promise((resolve) => {
            serverName = serverName.split(" ").join("+")
            q = q.split(" ").join("+")
            let url = `/${serverName}?q=${q}`
            resolve(getJSON(url))
        })
    }

    const url2 = () => {
        return new Promise((resolve) => {
            serverName = serverName.split(" ").join("+")
            q = q.split(" ").join("+")
            let url = `/${serverName}_backup?q=${q}`
            resolve(getJSON(url))
        })
    }
    return Promise.race([url1(),url2()])
}

function gougleSearch(query){
    let b = {}
    setTimeout(()=>{
        Promise.all([queryServers("web",query),queryServers("image",query),queryServers("video",query)])
            .then(array =>{
                array.forEach((element,index)=>{
                    if (index === 0){
                        b["web"] = element
                    }else if (index === 1){
                        b["image"] = element
                    }else if (index === 2){
                        b["video"] = element
                    }
                })
                console.log("hello")
            })
            .catch((element) => element)
    },800)
    //console.log(b)
}
