
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('title')
    table.integer('year')
    table.integer('myRating')
    table.string('posterUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
