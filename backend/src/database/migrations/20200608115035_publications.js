
exports.up = function(knex) {
    return knex.schema.createTable('publications', function(table){
        table.increments ('id').primary('publication_pk');
        table.string('description').notNullable();
        table.date('publication_date').notNullable();
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('publications');

};
