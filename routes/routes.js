const express = require("express")
const app = express()
const router = express.Router()
const auth = require("../auth/auth")
var HomeController = require("../controllers/HomeController")
var AuthController = require("../controllers/AuthController")
var LoginController = require("../controllers/LoginController")
var ProductController = require("../controllers/ProductController")

router.post("/user", LoginController.create)
router.post("/auth", AuthController.doLogin)
router.post("/products/create", auth, ProductController.create)
router.get("/products", auth, ProductController.getAll)
router.get("/", HomeController.index)

module.exports = router
