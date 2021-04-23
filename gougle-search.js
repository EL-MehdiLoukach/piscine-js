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
    console.log(getJSON())
    return Promise.race([url1(),url2()])
}

function gougleSearch(query){
    Promise.all([queryServers("web",query),queryServers("image",query),queryServers("video",query)])
        .then(el => console.log(el))
}

gougleSearch("hne9n4a9hq6")
