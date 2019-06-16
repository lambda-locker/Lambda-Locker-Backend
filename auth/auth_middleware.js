const jwt = require('jsonwebtoken')

module.exports = {
    restricted: (req, res, next) => {
        const token = req.headers.authorization

        token ?
            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        error: 'You are not authorized to view/edit this material.'
                    })
                } else {
                    req.decoded = decoded
                    next()
                }
            })
            :
            res.status(401).json({
                error: 'You are not authorized to view/edit this material.'
            })
    },

    tokenMaker: (user) => {
        const payload = {
            track: user.track,
            user_id: user.id,
            is_admin: user.isAdmin,
            cohort: user.cohort
        }

        const options = {
            expiresIn: '1d',
        }

        return jwt.sign(payload, process.env.SECRET, options)
    },
}