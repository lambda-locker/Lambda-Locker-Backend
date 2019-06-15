const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findBy
}

function find() {
    return db('locker_notes').select('id', 'note_date', 'note_title', 'note_text', 'link_to_repo', 'note_category', 'is_private', 'note_author')
}

function findBy(filter) {
    return db('locker_notes').where(filter)
}
