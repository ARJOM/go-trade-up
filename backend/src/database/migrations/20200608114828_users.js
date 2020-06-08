
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.string('email').primary('user_pk');
      table.string('user_name').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
