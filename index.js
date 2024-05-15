const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))
app.use('/api', router)

app.use((error, req, res, next) => {
    res.send({
        status: 500,
        message: '未知错误'
    })
})

app.listen(8888, () => {
    console.log('Server running at http://127.0.0.1:8888')
})