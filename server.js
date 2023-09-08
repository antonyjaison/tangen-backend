const express = require("express")
const cors = require('cors')
// const path = require("path")

const paymentRoutes = require('./routes/payment.js')
const verifyRoutes = require("./routes/verify.js")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api/payment/",paymentRoutes)

app.use("/api/verify/",verifyRoutes)

// app.use('/confirmation',express.static(path.join(__dirname + '/public')))

app.use((req,res) => {
    res.status(404);
    res.send("<h1>Error 404: Resource not found</h1>")
})

app.listen(4000,() => {
    console.log("Server started")
})

