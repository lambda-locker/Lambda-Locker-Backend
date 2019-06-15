const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('../locker_users/users_model.js')
const { tokenMaker } = require('../auth/auth_middleware')

router.post('/', async (req, res) => {
    const { body } = req

    if (body && body.username && body.password && body.student_name && body.email && body.cohort && body.is_admin) {

        body.password = bcrypt.hashSync(body.password, 10)

        try {

            const post = await Users.add(body)

            console.log(post)

            const user = await Users.findById(post.id)

            const token = tokenMaker(user)

            res.status(200).json(user)

        } catch (err) {

            console.log(err)

            res.status(500).json({
                error: 'Internal Server Error',
                err
            })

        }

    } else {
        res.status(404).json({
            error: 'You must include a username, password, student_name, email, cohort, and is_admin in your request.'
        })
    }
})

module.exports = router
