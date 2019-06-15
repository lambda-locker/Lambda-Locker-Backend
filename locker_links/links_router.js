const router = require('express').Router()

const Links = require('../locker_links/links_model.js')

router.get('/', (req, res) => {
    Links.find()
        .then(links => {
            res.json(links)
        })
        .catch(err => res.send(err))
})

module.exports = router