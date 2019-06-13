
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'estudios',
          password: 'test',
          student_name: 'El Estudio Senor',
          email: 'estudios@myemail.com',
          cohort: 'WEBPT4',
          is_admin: false
        },
        {
          username: 'thebeststudent',
          password: 'test',
          student_name: 'The Best Student',
          email: 'thebeststudent@myemail.com',
          cohort: 'WEB18',
          is_admin: false
        },
      ]);
    });
};