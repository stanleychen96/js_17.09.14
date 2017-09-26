'use strict';

module.exports = app => {
  class MemberController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.member.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.member.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.member.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.member.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.member.select(this.ctx.request.body);
    }
  }
  return MemberController;
};
