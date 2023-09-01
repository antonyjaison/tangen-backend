const express = require("express")
const router = express.Router();
const { generateAccessToken,makePaymentRequest } = require("../controller/paymentController")
const { verifyAccessToken } = require("../middleware/middleware.js")

router.get('/access-token',generateAccessToken)

router.post('/make-payment',verifyAccessToken,makePaymentRequest)

module.exports = router