
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.string('id').primary('product_pk');

        table.string('market').notNullable();
        table.string('product_name').notNullable();
        table.float('price').notNullable();
        table.string('photo').notNullable();
        table.string("description").notNullable();


        table.foreign('market', 'product_fk').references('email')
        .inTable('markets');
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');

};
