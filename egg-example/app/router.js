'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/a', 'home.indexof');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/mirror', 'home.mirror');
  app.get('/lodash', 'home.lodash');
};

