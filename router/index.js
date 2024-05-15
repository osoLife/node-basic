const express = require('express')

const router = express.Router()

router.get('/getUserList', (req, res) => {
    res.send({
        status: 200,
        message: '请求成功',
        data: [
            {
                name: 'osoLife',
                age: 38
            },
            {
                name: 'kobe',
                age: 48
            }
        ]
    })
})

router.post('/postUserData', (req, res) => {
    res.send({
        status: 200,
        message: '提交成功',
        data: null
    })
})

module.exports = router