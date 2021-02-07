const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const router = require("./routes/routes")
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/", router)

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})