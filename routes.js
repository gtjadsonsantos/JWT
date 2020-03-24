const { Router } = require("express")
const jwt = require('jsonwebtoken')
const posts = require('./post')
const  validate = require('./middlewares/validate')
const routes = Router()

const data = {
    username: "jadson",
    password: 123456
}

routes.post("/login", (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    

    if (data.username == username && data.password == password) {
        const token = jwt.sign(data, process.env.SECRET_TOKEN, { expiresIn: '1h' })

        res.send({ token })
    } else {
        res.send({ status: "not authorized" })
    }
})

routes.get('/posts', validate, (req,res,next)=>{
        res.send(posts)
})
module.exports = routes