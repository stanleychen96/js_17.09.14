'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.mysql.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.mysql.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.mysql.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.mysql.update(this.ctx.request.body);
    }
  }
  return TestController;
};
