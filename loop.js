const http = require("http")
const fs = require('fs')

const port = 3333;

let i = 0;

const loopPage = (req, res) => {

    let files = [ {
        url: '/fruit',
        path:  "./fruit.html"
        },

        {
        url: '/sample',
        path: "./sample.html"
        },

        {
        url: '/staff',
        path: "./staff.html"
        },

        {
        url: '/start',
        path:"./start.html"
        }

    ]



    while(req.url === files[i].url) {
        console.log(i)
        fs.readFile(files[i].path, (error, data) => {
            if(error) {
                console.log("can't read file")
            } else{
                res.end(data)
            }
        })
        i++;
        break;
        
       
    } 
}

const app = http.createServer(loopPage)

app.listen(port, () => {
    console.log("server on " + port)
})