
exports.up = function(knex) {
    return knex.schema.createTable('donations', function(table){
        table.string('id').primary('donations_pk');
        table.string('description').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('donations');

};
