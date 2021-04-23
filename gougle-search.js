function queryServers(serverName,q){

    const url1 = () => {
        return new Promise((resolve) => {
            serverName = serverName.split(" ").join("+")
            q = q.split(" ").join("+")

            let url = `/${serverName}?q=${q}`
            resolve(url)
        })
    }

    const url2 = () => {
        return new Promise((resolve) => {
            serverName = serverName.split(" ").join("+")
            q = q.split(" ").join("+")

            let url = `/${serverName}_backup?q=${q}`
            resolve(url)
        })
    }

    return Promise.race([url1(),url2()])
}
