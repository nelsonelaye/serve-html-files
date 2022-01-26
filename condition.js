const fs = require("fs")
const http = require('http')

const port = 1234;

const ifPage = (req, res) => {

    if (req.url === "/fruit") {
        fs.readFile('./fruit.html', (error, data) => {
            if (error) {
                console.log("couldn't read file " + error)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === "/sample") {
        fs.readFile("./sample.html", (error, data) => {
            if (error) {
                console.log("couldn't read file " + error)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === "/staff"){
        fs.readFile("./staff.html", (error, data) => {
            if (error) {
                console.log("couldn't read file " + error)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === "/start") {
        fs.readFile("./start.html", (error, data) => {
            if(error) {
                console.log("can't read file ", error)
            } else {
                res.end(data)
            }
        })
    } else {
        res.end("Thanks for sending your request")
    }
};

const app = http.createServer(ifPage)

app.listen(port, () => {
    console.log("Port " + port + " running")
})