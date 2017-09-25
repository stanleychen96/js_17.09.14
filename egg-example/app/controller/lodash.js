'use strict';

// example

module.exports = app => {
  class LodashController extends app.Controller {
    * local() {
      const result = yield this.service.lodash.tet();
      const result1 = yield this.service.lodash.test(5);
      const result2 = yield this.service.lodash.maker();
      this.ctx.body = result2 + ' ' + result1 + ' ' + result;
    }

    * longtime() {
      const result = yield this.service.lodash.sampleSize;
      this.ctx.body = result;
    }
  }
  return LodashController;
};
