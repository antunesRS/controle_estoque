class HomeController{
    async index(req,res){
        res.send("TESTANDO")
    }
}

module.exports = new HomeController()