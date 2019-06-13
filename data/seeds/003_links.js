
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          link_title: 'Knex Cheatsheet by devhints.io',
          link: 'https://devhints.io/knex',
          link_description: 'A cheatsheet for common Knex code snippets and query builders'
          link_category: 'knex',
          is_private: false,
          link_curator: 1
        },
        {
          link_title: 'React Dropzone on Github',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader'
          link_category: 'React',
          is_private: false,
          link_curator: 2
        },
      ]);
    });
};
