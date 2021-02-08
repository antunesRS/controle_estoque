class HomeController{
    async index(req,res){
        res.json({resposta: "TESTANDO"})
    }
}

module.exports = new HomeController()