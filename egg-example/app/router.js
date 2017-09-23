'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/a', 'home.indexof');
};

