const bodyParser = require("body-parser")
const express = require("express")
const connection = require("./database/connection")
const app = express()
const router = require("./routes/routes")
const port = 3000

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
