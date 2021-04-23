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
    let a = Promise.all([queryServers("web",query),queryServers("image",query),queryServers("video",query)])
    let b ={}
    console.log(a)
    console.log(typeof a)
}
