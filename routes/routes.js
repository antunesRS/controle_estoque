const express = require("express")
const app = express()
const router = express.Router()
const auth = require("../auth/auth")
var HomeController = require("../controllers/HomeController")
var AuthController = require("../controllers/AuthController")
var LoginController = require("../controllers/LoginController")
var TaskController = require("../controllers/TaskController")

router.post("/user", LoginController.create)
router.post("/auth", AuthController.doLogin)
router.post("/tasks/create", auth, TaskController.create)
router.get("/tasks", auth, TaskController.getAll)
router.get("/", HomeController.index)

module.exports = router
