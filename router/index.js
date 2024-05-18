const express = require('express')
const jwt = require('jsonwebtoken')

const secretKey = 'osoLife key'

const router = express.Router()

router.get('/setCookie', (req, res) => {
    res.cookie('name', 'osoLife', {
        maxAge: 1000 * 60
    })
    res.cookie('age', 38)
    res.send('设置cookie')
})

router.get('/getCookie', (req, res) => {
    const name = req.cookies['name']
    const age = req.cookies['age']
    res.send('获取到的cookie：' + name + ' ' + age)
})

router.get('/setSession', (req, res) => {
    req.session['height'] = 1.65
    req.session['address'] = 'china'
    res.send('设置session')
})

router.get('/getSession', (req, res) => {
    let height = req.session['height']
    let address = req.session['address']
    res.send('获取到的session：' + height + ' ' + address)
})

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