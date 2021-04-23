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

    const interval = () => {
        setTimeout(()=>{},80000)
    }

    const promiseServer = () => {
        let promise = Promise.all([queryServers("web",query),queryServers("image",query),queryServers("video",query)])
            .then(array => {
                let obj = {
                    "web":array[0],
                    "image": array[1],
                    "video": array[2],
                }
                console.log(obj)
                return obj
            })
        return promise
    }
    return Promise.race([promiseServer()])
}