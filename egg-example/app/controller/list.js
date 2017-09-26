'use strict';

module.exports = app => {
  class ListController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.copy.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.copy.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.copy.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.copy.update(this.ctx.request.body);
    }
  }
  return ListController;
};
