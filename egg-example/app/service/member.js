'use strict';

module.exports = app => {
  class Member extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('member', param); // 'namelist' is the table name
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('member', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * select() {
      let text;
      try {
      /* 
        text = yield app.mysql.select('member', { 
          where: {
            name: [ 'Amy', '' ],
          },
        });
      */
        text = yield app.mysql.select('member');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return text;
    }

    * delete(a) {
      try {
        yield app.mysql.insert('member', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update(s) {
      try {
        yield app.mysql.insert('member', s)
      } catch (q) {
        this.ctx.logger.error(q);
        return false;
      }
      return true;
    }

  }
  return Member;
};

