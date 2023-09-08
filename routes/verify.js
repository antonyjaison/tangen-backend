const express = require("express")
const router = express.Router()
const { sendEmail } = require("../controller/verifyController")

router.post("/email",sendEmail)

module.exports = router