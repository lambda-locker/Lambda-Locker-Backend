
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const usersRouter = require('../locker_users/users_router.js')

const server = express()
server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.send(
        `<h1>This thing works!</h1>`
    )
})

server.use('/users', usersRouter)

module.exports = server