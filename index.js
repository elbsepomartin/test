const express = require("express")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Tere')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})