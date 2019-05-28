'use strict';

const Controller = require('egg').Controller;

class PhoneImgController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.phoneImg.list();
    ctx.body = result;
  }
}

module.exports = PhoneImgController;
