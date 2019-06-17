const db = require('../data/dbConfig.js')
const { stringify, parse, boolRes } = require('../utility')

module.exports = {

    find: () => {
        return db('locker_notes').map(note => {
            note = parse(note)
            note = boolRes(note)
            return note
        })
    },

    findBy: filter => {
        return parse(db('locker_notes').where(filter).first())
    }

}
