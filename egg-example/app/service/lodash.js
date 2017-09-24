'use strict';

const _ = require('lodash');
module.exports = app => {
  class lodash extends app.Service { // 'home' inherit from 'app.Service' 
    * test() {
      const zipped = _.zip([ 1, 2 ], [ 10, 20 ], [ 100, 200 ]);
      return yield _.unzipWith(zipped, _.add);
    }

    * tet() {
      const zipped = _.zip([ 1, 2 ], [ 10, 20 ], [ 100, 200 ]);
      return yield _.unzipWith(zipped, _.add);
    }
  }
  return lodash; // keep this return with the file name
};
