'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const result = this.ctx.helper.foo(this.ctx.request.query.a);
      const result1 = this.ctx.helper.fdd(this.ctx.request.query.b);
      this.ctx.body = result + ' ' + result1;
    }

    * indexof() {
      this.ctx.body = 'cool guy';
    }

    * sina() {
      const result = yield this.service.home.sina();
      this.ctx.body = result;
    }

    * sohu() {
      const result = yield this.service.home.sohu();
      this.ctx.body = result;
    }

    * mirror() {
      const result1 = yield this.service.mirror.test();
      // invoke the 'mirror' file in service
      const result = yield this.service.home.test();
      // invoke the 'home' file in service, test is a function in the 'home'
      this.ctx.body = result + ' ' + result1;
      // use '+' to link results

    }

    * local() {
      const result = yield this.service.lodash.tet;
      const result1 = yield this.service.home.back;
      const result2 = yield this.service.lodash.maker;
      this.ctx.body = result2 + ' ' + result1 + ' ' + result;
    }

    * gettime() {
      const result = yield this.service.home.time;
      this.ctx.body = result;
    } // --------------time----------------

    * lodash() {
      const result = yield this.service.lodash.test;
      const result1 = yield this.service.lodash.tet;
      const result2 = yield this.service.mirror.test;
      this.ctx.body = result2 + ' ' + result1 + ' ' + result;
    }

  }
  return HomeController;
};
