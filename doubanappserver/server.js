const express = require('express')
const app = express()
const film = require('./route/film')
const user = require('./route/register')
app.use('/film',film)
app.use('/user',user)
app.listen(8000)