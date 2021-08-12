const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', require('./routes/routes'))
const PORT = 5000
app.listen(PORT, ()=> console.log("Server is running on port", PORT))