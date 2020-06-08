
exports.up = function(knex) {
    return knex.schema.createTable('markets', function(table){
        table.string('email').primary('market_pk');
        table.string('phone', 14).notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('address').notNullable();
                
        table.foreign('email', 'market_fk').references('email').inTable('users');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('markets');
};
