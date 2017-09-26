'use strict';

module.exports = app => {
  class AddController extends app.Controller {
    * first() {
      this.ctx.body = yield this.service.mysql.add(this.ctx.request.body);
    }

  }
  return AddController;
};
