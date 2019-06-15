const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    find,
    findBy,
    findById
};

function find() {
    const getStudentProfile = async studentId => {
        const locker_notes = await database('locker_notes')
            .where({ id: studentId })
            .first()

        const locker_links = await database('locker_links')
            .where({ id: studentId })
            .first()

        return {
            student: {
                id: studentId,
                locker_notes,
                locker_links
            }
        }
    }

}



function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {

    return db('users')
        .where({ id })
        .first();
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}