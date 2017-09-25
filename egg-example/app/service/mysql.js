'use strict';

module.exports = app => {
  class Mysql extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(req) {
      try {
        yield app.mysql.delete('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update(req) {
      try {
        yield app.mysql.update('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

  }
  return Mysql;
};
