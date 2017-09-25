'use strict';

module.exports = app => {
  class ListController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.mysql_n.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.mysql_n.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.mysql_n.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.mysql_n.update(this.ctx.request.body);
    }
  }
  return ListController;
};
