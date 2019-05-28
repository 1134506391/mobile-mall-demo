'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async clientLogin() {
    const { ctx } = this;
    const body = await ctx.request.body;
    const result = await ctx.service.login.clientLogin(body);
    ctx.body = result;
  }
  async adminLogin() {
    const { ctx } = this;
    const body = await ctx.request.body;
    const result = await ctx.service.login.adminLogin(body);
    ctx.body = result;
  }
}

module.exports = LoginController;
