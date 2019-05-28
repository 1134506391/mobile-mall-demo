'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.model.Role.findAll();
    return result;
  }
  async findOne(id) {
    const { ctx } = this;
    const result = await ctx.model.Role.findAll({
      where: {
        id,
      },
    });
    return result[0];
  }
  async create(role) {
    const { ctx } = this;
    return ctx.model.Role.create(role);
  }
  async update(newRole) {
    const { ctx } = this;
    const id = newRole.id;
    const role = await ctx.model.Role.findAll({
      where: {
        id,
      },
    });
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    await role[0].update(newRole);
  }
  async destroy(id) {
    const { ctx } = this;
    const role = await ctx.model.Role.findAll({
      where: {
        id,
      },
    });
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    role[0].destroy();
  }
}

module.exports = RoleService;
