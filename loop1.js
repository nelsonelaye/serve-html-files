const http = require("http")
const fs = require('fs')

const port = 3344;

let i = 0;

let paths = ["./fruit.html","./sample.html", "./staff.html", "./start.html"]
const loopPage = (req, res) => {

   let  readURl = ['/fruit', '/sample','/staff', '/start']


    do {
        console.log(i)
        fs.readFile(paths[i % paths.length], (error, data) => {
            if(error) {
                console.log("can't read file")
            } else{
                res.end(data)
            }
        })

        i++;
        

    } while(req.url === readURl[i % readURl.length] )
}

const app = http.createServer(loopPage)

app.listen(port, () => {
    console.log("server on " + port)
})