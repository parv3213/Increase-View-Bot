const request = require("request")

const increaseViews = async () => {
    request("https://camo.githubusercontent.com/5783b249b55a8cb9f77066c64b39e6682d3e1b90af4d2960ba55f7e1ec30a9ec/68747470733a2f2f76697369746f722d62616467652e6c616f62692e6963752f62616467653f706167655f69643d70617276333231332e76697369746f725f636f756e74", (error, response, body) => {
        if (!error){
            console.count("Completed times: ")
        }
    })
    setTimeout(increaseViews, 1000)
}
increaseViews()