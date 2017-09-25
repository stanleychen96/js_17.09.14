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

    // -------------set up to get time---------------
    * time() {
      function fa(x) {
        if (x < 10) {
          return '0' + x;
        }
        return x;
      }
      const a = new Date();
      const b = a.getFullYear();
      const c = fa(a.getMonth() + 1);
      const d = fa(a.getDate());
      const e = fa(a.getHours());
      const f = fa(a.getMinutes());
      const g = fa(a.getSeconds());
      return `${b}-${c}-${d}  ${e}:${f}:${g}`;
    }

    * test() {
      return 'home.test';
    }
  }
  return Home;
};
