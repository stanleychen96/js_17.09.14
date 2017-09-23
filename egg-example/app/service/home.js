'use strict';

module.exports = app => {
  class Home extends app.Service { // 'home' inherit from 'app.Service' 
    * find() {
      return 'user';
    }
  }
  return Home;
};
