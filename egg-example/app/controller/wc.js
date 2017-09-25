'use strict';

// example

module.exports = app => {
  class WcController extends app.Controller {
    * local() {
      const result = yield this.service.mirror.test();
      const result1 = yield this.service.lodash.back(5);
      const result2 = yield this.service.lodash.maker();
      this.ctx.body = result2 + ' ' + result1 + ' ' + result;
    }
  }
  return WcController;
};
