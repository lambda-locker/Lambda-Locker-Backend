const router = require('express').Router()

const Users = require('../locker_users/users_model.js')
const { restricted, tokenMaker } = require('../auth/auth_middleware')

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
    Users.findById(req.params.id)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err))
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const { password, username, studentname, email } = req.body
    Users.update(id, { password, username, studentname, email })
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'Cannot update user' })
        });
})

router.delete('/:id', restricted, (req, res) => {
    Users.remove(req.params.id)
        .then(user => {
            res.status(200).json({ message: 'User has been deleted' })
        })
        .catch(error => {
            res.status(500).json({ error, message: 'Error deleting user.' })
        })
})

module.exports = router