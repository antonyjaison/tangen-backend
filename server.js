const express = require("express")
const cors = require('cors')
const paymentRoutes = require('./routes/payment.js')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api/payment/",paymentRoutes)

app.listen(4000,() => {
    console.log("Server started")
})

