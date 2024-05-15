const express = require('express')
const jwt = require('jsonwebtoken')

const secretKey = 'osoLife key'

const router = express.Router()

router.post('/login', (req, res) => {
    const token = jwt.sign({ name: 'osoLife' }, secretKey, { expiresIn: '0.5h' })
    res.send({
        status: 200,
        message: '登录成功',
        token
    })
})

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