
exports.up = function(knex) {
    return knex.schema.createTable('donations', function(table){
        table.increments('id').primary('donations_pk');
        table.string('decription').notNullable();
        table.float('value').notNullable();
 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('donations');

};
