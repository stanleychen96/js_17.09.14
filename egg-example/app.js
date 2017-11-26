'use strict';

const knex = require('knex')({
  client: 'mysql',
});

  // --------------------------------user------------------------------

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

  // --------------------------------namelist------------------------------

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

  // --------------------------------member------------------------------

  app.beforeStart(function* () {
    const havesisters = yield app.mysql.query(knex.schema.hasTable('mysql').toString());
    if (havesisters.length === 0) {
      const userid = knex.schema.createTableIfNotExists('mysql', function(level) {
        level.increments();
        level.float('float').notNullable().defaultTo(0.0);
        level.decimal('decimal').notNullable().defaultTo(0);
        level.binary('binary').notNullable().defaultTo();
        level.boolean('boolean').notNullable().defaultTo(0);
        level.json('json').notNullable().defaultTo();
        level.text('text').notNullable().defaultTo('');
        level.bigInteger('bigInteger').notNullable().defaultTo(0);
        level.dateTime('dateTime').notNullable().defaultTo('2018-09-09 09:09:09.001001');
        level.time('time').defaultTo(0);
        level.timestamp('create_at').defaultTo(knex.fn.now());
        level.charset('utf8');
      });
      yield app.mysql.query(userid.toString());
    }
  });

  // --------------------------------------------------------------

};
