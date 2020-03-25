
exports.up = function(knex) {
  return knex.schema
    .createTable('incidents', function (table) {
       table.increments('id').primary();
       
       table.string('title', 128).notNullable();
       table.string('description', 255).notNullable();
       table.float('value').notNullable();

       table.string('ong_id').notNullable();
       table.foreign('ong_id').references('id').inTable('ongs');
    });  
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('incidents');  
};