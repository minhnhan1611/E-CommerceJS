const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, res) => {
    res.json("server is running")
});

app.listen(port, () => {
    console.log("Server running the port : " + port)
})