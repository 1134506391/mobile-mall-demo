'use strict';

const Service = require('egg').Service;

class PhoneBrandService extends Service {
  async findAll2() {
    const { ctx } = this;
    const result = await ctx.model.PhoneBrand.findAll({
      include: [{
        model: this.ctx.model.Phone,
        as: 'phone',
      }],
    });
    return result;
  }
  async findAll() {
    const { ctx } = this;
    const result = await ctx.model.PhoneBrand.findAll({
      include: [{
        model: this.ctx.model.Phone,
        as: 'phone',
      }],
    });
    return result;
  }
  async findOne(id) {
    const { ctx } = this;
    const phoneBrand = await ctx.model.PhoneBrand.findById(id);
    if (!phoneBrand) {
      ctx.throw(404, 'phoneBrand not found');
    }
    return phoneBrand;
  }
  async create(phoneBrand) {
    const { ctx } = this;
    return ctx.model.PhoneBrand.create(phoneBrand);
  }
  async update({ id, updates }) {
    const { ctx } = this;
    const phoneBrand = await ctx.model.PhoneBrand.findById(id);
    if (!phoneBrand) {
      ctx.throw(404, 'phoneBrand not found');
    }
    return phoneBrand.update(updates);
  }
  async destroy(id) {
    const { ctx } = this;
    const phoneBrand = await ctx.model.PhoneBrand.findById(id);
    if (!phoneBrand) {
      ctx.throw(404, 'phoneBrand not found');
    }
    phoneBrand.destroy();
  }
}

module.exports = PhoneBrandService;
