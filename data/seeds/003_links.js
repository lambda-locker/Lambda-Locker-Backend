
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locker_links').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('locker_links').insert([
        {
          link_title: 'Knex Cheatsheet by devhints.io',
          link: 'https://devhints.io/knex',
          link_description: 'A cheatsheet for common Knex code snippets and query builders',
          link_category: 'knex',
          is_private: false,
          link_curator: 1,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'tittle 001',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'title 002',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'title 003',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'title 004',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'title 005',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'title 006',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
        {
          link_title: 'title 007',
          link: 'https://github.com/react-dropzone/react-dropzone',
          link_description: 'Drag and drop React file uploader',
          link_category: 'React',
          is_private: false,
          link_curator: 2,
          upvotes: 0,
          comments: []
        },
      ]);
    });
};
