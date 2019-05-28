'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login(body) {
    const { ctx } = this;
    const result = await ctx.model.User.findAll({
      where: {
        username: body.username,
      },
    });
    if (!result) {
      ctx.throw(404, 'user not found');
    }
    if (body.password === result[0].password) {
      return result;
    }
    return '账号密码错误';
  }

  async clientLogin(body) {
    const { ctx } = this;
    const clientUser = await ctx.model.ClientUser.findAll({
      where: {
        username: body.username,
      },
    });
    if (!clientUser) {
      ctx.throw(404, 'clientUser not found');
    }
    if (body.password === clientUser[0].password) {
      console.log('账号密码正确');
      return clientUser;
    }
    return '账号密码错误';
  }

  async adminLogin(body) {
    const { ctx } = this;
    const adminUser = await ctx.model.AdminUser.findAll({
      where: {
        username: body.username,
      },
    });
    if (!adminUser) {
      ctx.throw(404, 'adminUser not found');
    }
    if (body.password === adminUser[0].password) {
      return adminUser;
    }
    return '账号密码错误';
  }
}

module.exports = LoginService;
