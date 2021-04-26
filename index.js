const bodyParser = require("body-parser")
const express = require("express")
const cors = require('cors');
const connection = require("./database/connection")
const app = express()
const router = require("./routes/routes")
const port = 3000

var corsOptions = {
    origin: ['http://localhost:8200', 'http://localhost:8100'],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

connection.authenticate().then(() => {
    console.log('banco conectado.')
})
.catch((msg) => {
    console.log(msg)
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/", router)

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})
