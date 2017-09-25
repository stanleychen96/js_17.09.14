'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments(); // create 'id'
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });

  app.beforeStart(function* () {
    const hasbrothers = yield app.mysql.query(knex.schema.hasTable('namelist').toString());
    if (hasbrothers.length === 0) {
      const userlist = knex.schema.createTableIfNotExists('namelist', function(desk) {
        desk.increments();
        desk.string('name').notNullable().defaultTo('');
        desk.integer('age').notNullable().defaultTo(0);
        desk.timestamp('create_at').defaultTo(knex.fn.now());
        desk.charset('utf8');
      });
      yield app.mysql.query(userlist.toString());
    }
  });

};
