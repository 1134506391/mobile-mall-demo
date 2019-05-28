'use strict';

const Service = require('egg').Service;

class ClientUserService extends Service {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.model.ClientUser.findAll();
    return result;
  }
  async findOne(id) {
    const { ctx } = this;
    const result = await ctx.model.ClientUser.findAll({
      where: {
        id,
      },
      include: [{
        model: this.ctx.model.Order,
        as: 'order',
        include: [{
          model: this.ctx.model.OrderItem,
          as: 'orderItem',
        }],
      }],
    });
    return result[0];
  }
  async create(clientUser) {
    const { ctx } = this;
    return ctx.model.ClientUser.create(clientUser);
  }
  async update(newClientUser) {
    const { ctx } = this;
    const id = newClientUser.id;
    const clientUser = await ctx.model.ClientUser.findAll({
      where: {
        id,
      },
    });
    if (!clientUser) {
      ctx.throw(404, 'clientUser not found');
    }
    await clientUser[0].update(newClientUser);
  }
  async destroy(id) {
    const { ctx } = this;
    const clientUser = await ctx.model.ClientUser.findAll({
      where: {
        id,
      },
    });
    if (!clientUser) {
      ctx.throw(404, 'clientUser not found');
    }
    clientUser[0].destroy();
  }
}

module.exports = ClientUserService;
