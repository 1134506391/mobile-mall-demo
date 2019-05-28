'use strict';

const Service = require('egg').Service;

class PhoneImgService extends Service {
  async list() {
    const { ctx } = this;
    const result = await ctx.model.PhoneImg.findAndCountAll();
    return result;
  }
}

module.exports = PhoneImgService;
