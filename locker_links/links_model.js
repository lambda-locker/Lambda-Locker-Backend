const db = require('../data/dbConfig.js')
const { parse, boolRes } = require('../utility')

module.exports = {
    find: () => {

        return db('locker_links').map(link => {
            link = boolRes(link)
            link = parse(link)
            return link
        })

    },

    findBy: filter => {

        return parse(db('locker_links').where(filter).first());

    }
}
