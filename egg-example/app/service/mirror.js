'use strict';

module.exports = app => {
  class Mirror extends app.Service { // 'home' inherit from 'app.Service' 
    * test() {
      return 'user';
    }
  }
  return Mirror; // keep this return with the file name
};
