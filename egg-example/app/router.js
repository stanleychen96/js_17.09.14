'use strict';

module.exports = app => {
  app.get('/', 'home.indexof');
  app.post('/', 'home.indexof');
  app.get('/a', 'home.indexof');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/mirror', 'home.mirror');
  app.get('/lodash', 'home.lodash');
  app.get('/local', 'wc.local');
  app.post('/date', 'home.time');
};

