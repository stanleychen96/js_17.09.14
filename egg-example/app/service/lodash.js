'use strict';

const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service { // 'home' inherit from 'app.Service' 
    * test() {
      const zipped = _.zip([ 1, 2 ], [ 10, 20 ], [ 100, 200 ]);
      return _.unzipWith(zipped, _.add);
    }


    * tet() {
      return _.zipWith([ 1, 2 ], [ 10, 20 ], [ 100, 200 ], function(a, b, c) {
        return a + b + c;
      });
    }

    * maker() {
      const users = [
        { user: 'fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'barney', age: 36 },
      ];
      return _.orderBy(users, [ 'user', 'age' ], [ 'asc', 'desc' ]);
    }

    * sampleSize() {
      return _.sampleSize([ 1, 2, 3 ], 4);
    }

  }

  return Lodash; // keep this return with the file name
};
