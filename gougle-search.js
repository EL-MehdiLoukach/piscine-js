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
        return new Promise((resolve, reject )=>{
            setTimeout(() => {
                reject('timeout')
            },80)
        })
    }

    const promiseServer = () => {
        return Promise.all( [ queryServers( "web", query ), queryServers( "image", query ), queryServers( "video", query ) ] )
    }
    return Promise.race([promiseServer(),interval()])
        .then( array => {
            let obj = {
                "web": array[ 0 ],
                "image": array[ 1 ],
                "video": array[ 2 ],
            }
            return obj
        } )
}