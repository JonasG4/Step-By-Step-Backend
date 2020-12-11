const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const { PORT, url } = require('./Database')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('BD conectada')).catch(err => console.log(err))

app.listen(PORT, () => console.log('El Servidor está activo en el puerto: ', PORT))