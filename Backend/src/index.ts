import express from "express"

const app = express()

app.route("/").get((req, res) => {
    res.send("hi")
})

app.listen(3000)