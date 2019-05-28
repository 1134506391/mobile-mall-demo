'use strict';

const Service = require('egg').Service;

class PhoneService extends Service {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.model.Phone.findAll({
      include: [{
        model: this.ctx.model.PhoneBrand,
        as: 'phoneBrand',
      }],
    });
    return result;
  }
  async findOne(id) {
    const { ctx } = this;
    const result = await ctx.model.Phone.findAll({
      where: {
        id,
      },
      include: [{
        model: this.ctx.model.PhoneBrand,
        as: 'phoneBrand',
      }],
    });
    return result[0];
  }
  async create(phone) {
    const { ctx } = this;
    return ctx.model.Phone.create(phone);
  }
  async update(phone) {
    const { ctx } = this;
    const id = phone.id;
    const newPhone = await ctx.model.Phone.findAll({
      where: {
        id,
      },
    });
    if (!newPhone) {
      ctx.throw(404, 'phone not found');
    }
    const phone2 = newPhone[0];
    console.log('newPhone1111');
    console.log(JSON.stringify(phone2));
    await phone2.update(phone);
  }
  async destroy(id) {
    const { ctx } = this;
    const phone = await ctx.model.Phone.findAll({
      where: {
        id,
      },
    });
    if (!phone) {
      ctx.throw(404, 'phone not found');
    }
    phone[0].destroy();
  }
}

module.exports = PhoneService;
