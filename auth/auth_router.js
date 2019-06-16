const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('../locker_users/users_model.js')
const { tokenMaker } = require('../auth/auth_middleware')

router.post('/register', async (req, res) => {

    let { body } = req

    if (body && body.username && body.password && body.student_name && body.email && body.cohort && body.is_admin) {

        const { username } = body

        body.password = bcrypt.hashSync(body.password, 10)

        try {

            const check = await Users.findBy(username)

            if (!check) {

                const post = await Users.add(body)

                console.log(post)

                const user = await Users.findById(post.id)

                const token = tokenMaker(user)

                res.status(200).json({
                    message: `Welcome, ${username}!`,
                    id: user.id,
                    track: user.track,
                    cohort: user.cohort,
                    is_admin: user.is_admin,
                    token
                })

            } else {
                res.status(400).json({
                    error: 'User already exists.'
                })
            }


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

router.post('/login', async (req, res) => {

    let { username, password } = req.body

    if (username && password) {

        try {

            const user = await Users.findBy(username)

            if (user) {

                if (bcrypt.compareSync(password, user.password)) {

                    const token = tokenMaker(user)

                    res.status(200).json({
                        message: `Welcome, ${username}!`,
                        id: user.id,
                        track: user.track,
                        cohort: user.cohort,
                        is_admin: user.is_admin,
                        token
                    })

                } else {

                    res.status(400).json({
                        error: `Password does not match ${username}'s password. Please try again.`
                    })

                }

            } else {

                res.status(400).json({
                    error: `Username '${username}' does not exist. Please try again.`
                })

            }


        } catch (err) {

            console.log(err)

            res.status(500).json({
                error: 'Internal Server Error.'
            })

        }

    } else {

        res.status(400).json({
            error: 'You must include a username and password. Please try again.'
        })

    }

})

module.exports = router
