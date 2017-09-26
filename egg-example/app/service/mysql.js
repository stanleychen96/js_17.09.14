'use strict';

module.exports = app => {
  class Mysql extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param); // 'user' is the table name
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) { //  if use select, don't need parameter
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

    * add() {
      const conn = yield app.mysql.beginTransaction(); // 初始化事务
      try {
        yield conn.update('user', { id: 2, age: 12345 }); // 第一步操作
        yield conn.update('namelist', { id: 1, age: 47 }); // 第二步操作
        yield conn.commit(); // 提交事务
      } catch (err) {
        // error, rollback
        yield conn.rollback(); // 一定记得捕获异常后回滚事务！！
        this.ctx.logger.error(err);
        return false;
      }
      return true;
    }

    * trainning() {
      const conn = yield app.mysql.beginTransaction(); // 初始化事务
      try {
        yield conn.insert('user', { id: 211, age: 12345 }); // 第一步操作
        yield conn.insert('user', { id: 112, age: 543 }); // 第二步操作
        yield conn.update('namelist', { id: 100, age: 12345 }, {});
        yield conn.commit(); // 提交事务
      } catch (err) {
        // error, rollback
        yield conn.rollback(); // 一定记得捕获异常后回滚事务！！
        this.ctx.logger.error(err);
        return false;
      }
      return true;
    }

  }
  return Mysql;
};
