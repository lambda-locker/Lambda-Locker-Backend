
exports.up = function (knex, Promise) {
    return knex.schema

        .createTable('users', tbl => {
            tbl.increments()

            tbl.string('username', 128).unique().notNullable()
            tbl.string('student_name', 128).notNullable()
            tbl.string('email', 128).unique().notNullable()
            tbl.string('cohort', 128).notNullable()
            tbl.boolean('is_admin').notNullable()

        })

        .createTable('locker_notes', tbl => {
            tbl.increments()

            tbl.date('note_date').notNullable()
            tbl.string('note_title', 256).unique().notNullable()
            tbl.text('note_text').notNullable()
            tbl.string('note_category').notNullable()
            tbl.boolean('is_private').notNullable()

            tbl.integer('note_author').unsigned().references('id').inTable('users').onDelete('RESTRICT').onUpdate('CASCADE')

        })

        .createTable('locker_links', tbl => {
            tbl.increments()

            tbl.string('link_title', 256).unique().notNullable()
            tbl.text('link').notNullable()
            tbl.text('link_description')
            tbl.text('link_category', 128).notNullable()

            tbl.integer('link_curator').unsigned().references('id').inTable('users').onDelete('RESTRICT').onUpdate('CASCADE')
        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableOfExists('users')
        .dropTableOfExists('locker_notes')
        .dropTableOfExists('locker_links')
};
