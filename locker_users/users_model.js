const db = require('../data/dbConfig.js');
const { stringify, parse, boolUse, boolRes } = require('../utility')

module.exports = {
  add,
  update,
  remove,
  find,
  findBy,
  findById
};

async function find() {
  const users = await db('users');

  for (let user of users) {
    user.resources = {
      notes: await db('locker_notes').where({ note_author: user.id }),
      links: await db('locker_links').where({ link_curator: user.id })
    };
  }

  return await users.map(user => {
    user.resources.notes = user.resources.notes.map(note => parse(note)).map(note => boolRes(note))
    return boolUse(user)
  });
}

function findBy(username) {
  return db('users').where({ username }).first();
}

async function findById(id) {
  const user = await db('users')
    .where({ id })
    .first();

  const notes = await db('locker_notes').where({ note_author: id });

  const links = await db('locker_links').where({ link_curator: id });

  return {
    ...user,
    notes: parse(notes),
    links: parse(links)
  };
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function update(id, changes) {
  stringify(changes)

  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}

// PAST ATTEMPTS:
// const getStudentProfile = async studentId => {
//     const locker_notes = await database('locker_notes')
//         .where({ id: studentId })
//         .first()

//     const locker_links = await database('locker_links')
//         .where({ id: studentId })
//         .first()

//     return {
//         student: {
//             id: studentId,
//             locker_notes,
//             locker_links
//         }
//     }
// }

// router.get('/', restricted, async (req, res) => {
//     const requests = []

//     try {
//         const users = await db(users)
//         for (i = 0; i < users.length; i++) {
//             users[i].notes = await notesById(users[i].business_requesting)
//             users[i].volunteer_assigned = await Users.findVolunteerByID(users[i].volunteer_assigned)
//             requests.push(r)
//         }
//         res.status(200).json(requests)
//     } catch (err) {
//         res.send(err)
//     }
// })

// const users = await db('users')
// .join('locker_links', 'users.id', 'locker_links.link_curator')
// .innerJoin('locker_notes', 'users.id', 'locker_notes.note_author')
// .select(
//   'users.student_name',
//   'users.email',
//   'users.cohort',
//   dbAccess.raw('COUNT(locker_notes.id) as notes')
// )

// .join('locker_notes as notes', 'notes.note_author', 'users.id')
// .join('locker_links as links', 'links.link_curator', 'users.id')
// .select(
//   'users.student_name',
//   'users.email',
//   'users.cohort',
//     db.raw('COUNT(notes.id) as notesPosted'),
//   db.raw('COUNT(links.id) as linksPosted')
// )
// .groupBy('users.id');

// .count('locker_links.id as links')
// .count('locker_notes.id as notes')
// .groupBy('users.id');

//   return users;

// NON-WORKING CODE:

// for (i = 0; i < users.length; i++) {
//             users[i].notes = await notesById(users[i].business_requesting)
//             users[i].volunteer_assigned = await Users.findVolunteerByID(users[i].volunteer_assigned)
//             requests.push(r)
//         }
