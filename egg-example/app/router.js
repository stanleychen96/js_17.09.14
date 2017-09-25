'use strict';

module.exports = app => {

  // ----------------get----------------

  app.get('/', 'home.indexof'); // a simple example

  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');

  app.get('/mirror', 'home.mirror'); // it is no use

  app.get('/lodash', 'home.lodash'); // check lodash

  app.get('/local', 'wc.local'); // callback

  // ----------------post---------------- 

  app.post('/', 'home.indexof'); // a simple example

  app.post('/date', 'home.gettime'); // get local time

};

