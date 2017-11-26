'use strict';

module.exports = app => {
  return {
    schedule: {
      interval: '1m',
      type: 'all',
      disable: app.config.env === 'local', // 本地开发环境不执行
    },
    * task(ctx) {
      const res = yield ctx.curl('http://www.sohu.com/cache', {
        contentType: 'json',
      });
      ctx.app.cache = res.data;
    },
  };
};
