
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('title').defaultTo('Not Given')
    table.string('director').defaultTo('Not Given')
    table.integer('year').defaultTo(1990)
    table.integer('myRating').defaultTo(5)
    table.string('posterUrl').defaultTo('http://placehold.it/600x900')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
