'use strict';

module.exports = app => {
  class Home extends app.Service { // 'home' inherit from 'app.Service' 
    * find() {
      return 'user';
    }

    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }

    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');// app.curl(URL)
    }

    * test() {
      return 'home.test';
    }
  }
  return Home;
};
