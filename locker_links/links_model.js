const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findBy
}

function find() {
    return db('locker_links').select('id', 'link_title', 'link', 'link_description', 'link_category', 'is_private', 'link_curator')
}

function findBy(filter) {
    return db('locker_links').where(filter);
}