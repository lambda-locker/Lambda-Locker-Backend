
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locker_notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('locker_notes').insert([
        {
          note_date: '2019-06-13',
          note_title: 'My First Note Evarrrrr',
          note_text: 'How far away permanence of the stars tesseract brain is the seed of intelligence white dwarf preserve and cherish that pale blue dot? Tendrils of gossamer clouds muse about the carbon in our apple pies with pretty stories for which there\'s little good evidence the ash of stellar alchemy at the edge of forever. Courage of our questions two ghostly white figures in coveralls and helmets are soflty dancing something incredible is waiting to be known hydrogen atoms emerged into consciousness inconspicuous motes of rock and gas and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          link_to_repo: 'https://github.com/blubrandi/Lambda-Locker',
          note_category: 'Guided Project Notes',
          is_private: false,
          note_author: 2,
          upvotes: 0,
          comments: []
        },
        {
          note_date: '2019-06-13',
          note_title: 'My Second Note Evarrrrr',
          note_text: 'Inconspicuous motes of rock and gas gathered by gravity from which we spring extraplanetary emerged into consciousness dream of the mind\'s eye? Dispassionate extraterrestrial observer hydrogen atoms not a sunrise but a galaxyrise hydrogen atoms with pretty stories for which there\'s little good evidence the ash of stellar alchemy. Vanquish the impossible citizens of distant epochs a mote of dust suspended in a sunbeam a mote of dust suspended in a sunbeam shores of the cosmic ocean vastness is bearable only through love and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          link_to_repo: 'https://github.com/blubrandi/Lambda-Locker',
          note_category: 'Ah HA! Moments',
          is_private: false,
          note_author: 1,
          upvotes: 0,
          comments: []
        },
        {
          note_date: '2019-06-13',
          note_title: 'THIRD',
          note_text: 'Inconspicuous motes of rock and gas gathered by gravity from which we spring extraplanetary emerged into consciousness dream of the mind\'s eye? Dispassionate extraterrestrial observer hydrogen atoms not a sunrise but a galaxyrise hydrogen atoms with pretty stories for which there\'s little good evidence the ash of stellar alchemy. Vanquish the impossible citizens of distant epochs a mote of dust suspended in a sunbeam a mote of dust suspended in a sunbeam shores of the cosmic ocean vastness is bearable only through love and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          link_to_repo: 'https://github.com/blubrandi/Lambda-Locker',
          note_category: 'Ah HA! Moments',
          is_private: false,
          note_author: 1,
          upvotes: 0,
          comments: []
        },
        {
          note_date: '2019-06-13',
          note_title: 'FOURTH',
          note_text: 'Inconspicuous motes of rock and gas gathered by gravity from which we spring extraplanetary emerged into consciousness dream of the mind\'s eye? Dispassionate extraterrestrial observer hydrogen atoms not a sunrise but a galaxyrise hydrogen atoms with pretty stories for which there\'s little good evidence the ash of stellar alchemy. Vanquish the impossible citizens of distant epochs a mote of dust suspended in a sunbeam a mote of dust suspended in a sunbeam shores of the cosmic ocean vastness is bearable only through love and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
          link_to_repo: 'https://github.com/blubrandi/Lambda-Locker',
          note_category: 'Ah HA! Moments',
          is_private: false,
          note_author: 1,
          upvotes: 0,
          comments: []
        },
      ]);
    });
};
