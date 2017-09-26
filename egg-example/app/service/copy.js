'use strict';

module.exports = app => {
  class Copy extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('namelist', param); // 'namelist' is the table name
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('namelist', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(req) {
      try {
        yield app.mysql.delete('namelist', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update(req) {
      try {
        yield app.mysql.update('namelist', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

  }
  return Copy;
};
