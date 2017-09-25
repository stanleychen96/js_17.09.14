'use strict';

module.exports = app => {

  // ----------------get----------------

  app.get('/', 'home.indexof'); // a simple example

  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');

  app.get('/mirror', 'home.mirror'); // it is no use

  app.get('/lodash', 'home.lodash'); // check lodash

  app.get('/local', 'lodash.local'); // callback

  // ----------------post---------------- 

  app.post('/', 'home.indexof'); // a simple example

  app.post('/date', 'home.gettime'); // get local time

  app.post('/size', 'lodash.longtime'); // 09-25 lodash trainning 

  app.post('/mysql_g', 'test.get');
  app.post('/mysql_c', 'test.create');
  app.post('/mysql_u', 'test.update');
  app.post('/mysql_d', 'test.delete');

  app.post('/n_g', 'list.get');
  app.post('/n_c', 'list.create');
  app.post('/n_u', 'list.update');
  app.post('/n_d', 'list.delete');
};
