const http = require("http")
const fs = require("fs")

const port = 0001;

const reqPage = (req, res) => {
    switch(req.url) {
        case "/one":
            
    }
}

const app = http.createServer()

app.listen(port, () => {
    console.log("server runnig cool")
})
