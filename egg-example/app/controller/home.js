'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();

    }
    * indexof() {
      this.home.find = 'cool guy';
    }
  }
  return HomeController;
};
