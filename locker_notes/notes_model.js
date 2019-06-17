const db = require('../data/dbConfig.js')
const { stringify, parse } = require('../utility')

module.exports = {

    find: () => {
        return db('locker_notes').select('id', 'note_date', 'note_title', 'note_text', 'link_to_repo', 'note_category', 'is_private', 'note_author').map(note => parse(note))
    },

    findBy: filter => {
        return parse(db('locker_notes').where(filter).first())
    }

}
